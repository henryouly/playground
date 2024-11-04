import { z } from 'zod';
import { tool } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText, StreamData, Message } from 'ai';

export const runtime = "edge";
export const dynamic = "force-dynamic";

// export async function POST(req: Request) {
//   const { messages } = await req.json();

//   const model = new ChatOpenAI({
//     apiKey: process.env.OPENAI_API_KEY!,
//     model: "gpt-3.5-turbo",
//     temperature: 0.8,
//   });

//   const chat_messages = (messages as Message[]).map((m) =>
//       m.role == "user"
//         ? new HumanMessage(m.content)
//         : new AIMessage(m.content)
//     );

//   const prompt = ChatPromptTemplate.fromMessages([
//     new SystemMessage("You are a stock analyzer"),
//     ...chat_messages
//   ]);

//   const stream = await prompt.pipe(model)
//     .stream("");

//   const aiStream = LangChainAdapter.toAIStream(stream);
//   return new StreamingTextResponse(aiStream);
// }



export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Call the language model
  const result = await streamText({
    // model: openai("gpt-4o"),
    // model: anthropic('claude-3-haiku-20240307'),
    model: anthropic('claude-3-5-sonnet-20240620'),
    tools: {
      weather: tool({
        description: 'Get the weather in a location',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => ({
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
        }),
      }),
    },
    messages,
  });

  // Create a new StreamData
  const streamData = new StreamData();

  // async: process tool calls and append them to the stream data
  (async () => {
    try {
      for await (const part of result.fullStream) {
        if (part.type === 'tool-result') {
          // only weather tool, so it's fully typed:
          streamData.append({
            city: part.args.location,
            weather: part.result.temperature,
          });
          console.log("tool result");
          console.log(part.args.location);
          console.log(part.result.location);
          console.log(part.result.temperature);
        }
      }
    } finally {
      streamData.close();
    }
  })().catch(console.error);  

  // Convert the response into a friendly text-stream
  const stream = result.toAIStream({
    onFinal(_) {
      // streamData.close();
    },
  });

  // Respond with the stream and additional StreamData
  return new StreamingTextResponse(stream, {}, streamData);
}