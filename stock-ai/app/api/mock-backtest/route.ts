import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { z } from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
    experimental_toolCallStreaming: true,
    system:
      'You are a stock analyzer that specialize in analyze real-time or historical stock data.' +
      'You use the showBacktestResult tool to show the backtesting result to the user instead of talking about it.',
    tools: {
      // server-side tool with execute function:
      runBacktest: {
        description: 'run back testing on a stock',
        parameters: z.object({ 
          ticker: z.string(),
          strategy: z.string(),
          from: z.string().optional(),
          to: z.string().optional(),
        }),
        execute: async ({ ticker, strategy, from, to }: { 
          ticker: string,
          strategy: string,
          from: string | null,
          to: string | null,
        }) => {
          return {
            ticker: ticker,
            gain: Math.random() * 10,
          };
        },
      },
      // client-side tool that displays whether information to the user:
      showBacktestResult: {
        description:
          'Show the backtesting result to the user. Always use this tool to tell backtesting result to the user.',
        parameters: z.object({
          ticker: z.string(),
          gain: z.number().describe(
            'the return of investment'
          ),
        }),
      },
    },
  });

  return result.toDataStreamResponse();
}