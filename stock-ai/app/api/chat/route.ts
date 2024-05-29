import { StreamingTextResponse, Message, LangChainAdapter } from "ai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
    model: "gpt-3.5-turbo",
    temperature: 0.8,
  });

  const stream = await model
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
