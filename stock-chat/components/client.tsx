"use client";

import { useCompletion } from "ai/react";
import { FormEvent, useState } from "react";

import { ChatForm } from "@/components/chat-form";
import { ChatMessages } from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";

interface ChatClientProps {

};

export const ChatClient = ({
}: ChatClientProps) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);

  const {
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    api: "/api/chat",
    streamMode: "text",
    onFinish(prompt, completion) {
      const systemMessage: ChatMessageProps = {
        role: "system",
        content: completion,
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");
    },
    onError(error) {
      console.log("[CHAT CLIENT]", error);
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input,
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
      />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}