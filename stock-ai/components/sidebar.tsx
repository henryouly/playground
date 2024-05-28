"use client";

import { Message } from "ai/react";


type Props = {
  chatId?: string;
  isCollapsed: boolean;
  isMobile: boolean;
  messages: Message[];
  setMessages?: (messages: Message[]) => void;
}

export const Sidebar = ({
  chatId,
}: Props) => {
  return (
    <div>
      Sidebar
    </div>
  )
}