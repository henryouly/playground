"use client";

import { useCompletion } from "ai/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { ChatForm } from "./chat-form";

interface ChatClientProps {

};

export const ChatClient = ({
}: ChatClientProps) => {
  // const router = useRouter();
  const [messages, setMessages] = useState<any[]>([]);

  const {
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    api: `/api/chat`,
    onFinish(prompt, completion) {
      const systemMessage = {
        role: "system",
        content: completion,
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      // router.refresh();
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      Chat Client
      <div>
        Messages TODO
      </div>
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}