"use client";

import { ChatMessage, ChatMessageProps } from "@/components/chat-message";
import { ElementRef, useEffect, useRef, useState } from "react";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
};

export const ChatMessages = ({
  messages = [],
  isLoading
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);
  const [fakeLoading, setFakeLoading] = useState(messages.length === 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        role="system"
        content={`Hello, I'm a stock assistant.`} />
      {
        messages.map((message) => (
          <ChatMessage
            key={message.content}
            role={message.role}
            content={message.content}
          />
        ))
      }
      {isLoading && (
        <ChatMessage
          role="system"
          isLoading
        />
      )}
      <div ref={scrollRef} />
    </div>
  )
}