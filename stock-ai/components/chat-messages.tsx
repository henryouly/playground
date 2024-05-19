"use client";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
};

export const ChatMessages = ({
  messages = [],
  isLoading
}: ChatMessagesProps) => {
  return (
    <div className="flex-1">
      Chat Messages Component!
    </div>
  )
}