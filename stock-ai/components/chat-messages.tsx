"use client";

import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
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