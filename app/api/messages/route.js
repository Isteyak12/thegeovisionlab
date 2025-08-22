import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const messagesFilePath = path.join(process.cwd(), 'data', 'messages.json');

function ensureDataFile() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(messagesFilePath)) {
    fs.writeFileSync(messagesFilePath, JSON.stringify([], null, 2));
  }
}

export async function GET() {
  try {
    ensureDataFile();
    const data = fs.readFileSync(messagesFilePath, 'utf8');
    const messages = JSON.parse(data);
    
    return NextResponse.json({
      success: true,
      messages: messages,
      count: messages.length
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
    ensureDataFile();
    const newMessage = await request.json();
    
    const data = fs.readFileSync(messagesFilePath, 'utf8');
    const messages = JSON.parse(data);
    
    messages.push({
      id: newMessage.id || Date.now(),
      name: newMessage.name,
      email: newMessage.email,
      subject: newMessage.subject,
      message: newMessage.message,
      timestamp: newMessage.timestamp || new Date().toISOString(),
      status: 'unread'
    });
    
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
    
    return NextResponse.json({
      success: true,
      message: 'Message saved successfully',
      messageId: newMessage.id
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save message' },
      { status: 500 }
    );
  }
}