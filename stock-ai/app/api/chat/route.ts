import { StreamingTextResponse, Message, LangChainAdapter } from "ai";
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
    model: "gpt-3.5-turbo",
    temperature: 0.8,
  });

  const chat_messages = (messages as Message[]).map((m) =>
      m.role == "user"
        ? new HumanMessage(m.content)
        : new AIMessage(m.content)
    );

  const prompt = ChatPromptTemplate.fromMessages([
    new SystemMessage("You are a stock analyzer"),
    ...chat_messages
  ]);

  const stream = await prompt.pipe(model)
    .stream(
      (messages as Message[]).map((m) =>
        m.role == "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      )
    );

  const aiStream = LangChainAdapter.toAIStream(stream);
  return new StreamingTextResponse(aiStream);
}
