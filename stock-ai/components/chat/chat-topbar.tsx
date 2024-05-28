"use client";

import { useEffect, useState } from "react";
import { CaretSortIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// import { getSelectedModel } from "@/lib/model-helper";

import { Sidebar } from "@/components/sidebar";
import { Message } from "ai/react";

interface ChatTopbarProps {
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  chatId?: string;
  messages: Message[];
}

export default function ChatTopbar({
  setSelectedModel,
  isLoading,
  chatId,
  messages,
}: ChatTopbarProps) {
  const [models, setModels] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState<string | null>(null);

  useEffect(() => {
    // setCurrentModel(getSelectedModel());

    const env = process.env.NODE_ENV;

    const fetchModels = async () => {
      if (env === "production") {
        const fetchedModels = await fetch(process.env.NEXT_PUBLIC_OLLAMA_URL + "/api/tags");
        const json = await fetchedModels.json();
        const apiModels = json.models.map((model: any) => model.name);
        setModels([...apiModels]);
      }
      else {
        const fetchedModels = await fetch("/api/tags")
        const json = await fetchedModels.json();
        const apiModels = json.models.map((model: any) => model.name);
        setModels([...apiModels]);
      }
    }
    fetchModels();
  }, []);

  const handleModelChange = (model: string) => {
    setCurrentModel(model);
    setSelectedModel(model);
    if (typeof window !== 'undefined') {
      localStorage.setItem("selectedModel", model);
    }
    setOpen(false);
  };

  return (
    <div className="w-full flex px-4 py-6  items-center justify-between lg:justify-center ">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="lg:hidden w-5 h-5" />
        </SheetTrigger>
        <SheetContent side="left">
          <Sidebar
            chatId={chatId || ""}
            isCollapsed={false}
            isMobile={false}
            messages={messages}
          />
        </SheetContent>
      </Sheet>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={isLoading}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between"
          >
            {currentModel || "Select model"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-1">
          {models.length > 0 ? (
            models.map((model) => (
              <Button
                key={model}
                variant="ghost"
                className="w-full"
                onClick={() => {
                  handleModelChange(model);
                }}
              >
                {model}
              </Button>
            ))
          ) : (
            <Button variant="ghost" disabled className=" w-full">
              No models available
            </Button>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
