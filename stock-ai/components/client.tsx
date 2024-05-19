"use client";

import { useState } from "react";

interface ChatClientProps {

};

export const ChatClient = ({
}: ChatClientProps) => {
  const [messages, setMessages] = useState<any[]>();

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      Chat Client
    </div>
  )
}