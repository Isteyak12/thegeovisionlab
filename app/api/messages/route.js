import { NextResponse } from 'next/server';
import { supabase } from '@/lib/utils';

export async function GET() {
  try {
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      messages: messages || [],
      count: messages?.length || 0
    });
  } catch (error) {
    console.error('Error reading messages:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to read messages' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const newMessage = await request.json();
    
    const { data, error } = await supabase
      .from('messages')
      .insert([{
        name: newMessage.name,
        email: newMessage.email,
        subject: newMessage.subject,
        message: newMessage.message,
        timestamp: new Date().toISOString(),
        status: 'unread'
      }])
      .select();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Message saved successfully',
      messageId: data[0]?.id
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save message' },
      { status: 500 }
    );
  }
}