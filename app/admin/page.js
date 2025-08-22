"use client";

import { useState, useEffect } from 'react';
import { Mail, Calendar, User, MessageSquare, RefreshCw, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.replace("/login");
        return;
      }
      
      setUser(session.user);
      fetchMessages();
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.replace("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      
      if (data.success) {
        setMessages(data.messages);
        setError(null);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to fetch messages');
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Button onClick={fetchMessages}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Message Queue</h1>
            <p className="text-gray-600">FIFO Order - {messages.length} total messages</p>
            <p className="text-sm text-gray-500">Logged in as: {user.email}</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={fetchMessages} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button onClick={handleSignOut} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No messages yet</h3>
            <p className="text-gray-500">Messages will appear here when users submit the contact form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={message.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600 font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {message.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {message.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(message.timestamp).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-200 pl-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Subject: {message.subject}</h4>
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {message.status || 'unread'}
                  </span>
                  <a 
                    href={`mailto:${message.email}?subject=Re: ${message.subject}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}