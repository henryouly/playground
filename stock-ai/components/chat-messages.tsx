"use client";

import { ChatMessage, ChatMessageProps } from "@/components/chat-message";
import { useEffect, useState } from "react";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
};

export const ChatMessages = ({
  messages = [],
  isLoading
}: ChatMessagesProps) => {
  const [fakeLoading, setFakeLoading] = useState(messages.length === 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        role="system"
        content={`Hello`} />
    </div>
  )
}