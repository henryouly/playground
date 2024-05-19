"use client";

import { ChatMessage } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
};

export const ChatMessages = ({
  messages = [],
  isLoading
}: ChatMessagesProps) => {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        role="system"
        content={`Hello`} />
      <ChatMessage
        role="user"
        content={`Hello`} />
    </div>
  )
}