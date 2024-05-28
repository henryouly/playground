import { StreamingTextResponse, Message } from "ai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { BytesOutputParser } from "@langchain/core/output_parsers";
import { ChatOpenAI } from "@langchain/openai";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { messages, selectedModel } = await req.json();

  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
  });

  const parser = new BytesOutputParser();

  const stream = await model
    .pipe(parser)
    .stream(
      (messages as Message[]).map((m) =>
        m.role == "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      )
    );


  return new StreamingTextResponse(stream);
}
