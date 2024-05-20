import  { StreamingTextResponse } from "ai";

import { Replicate } from "@langchain/community/llms/replicate";
import { NextResponse } from "next/server";

import MemoryManager from "@/lib/memory";

export async function POST(
  request: Request,
) {
  try {
    const { prompt } = await request.json();

    const preamble = "You are a FINRA certified stock analysis. Your task is to answer the user's question as helpful as you can.";

    const name = "Stock Chat AI";

    const relevantHistory = "";

    const memoryManager = await MemoryManager.getInstance();

    const records = await memoryManager.readLatestHistory();
    if (records.length === 0) {
      // await memoryManager.seedChatHistory(seedchat, "\n\n", companionKey);
    }
    await memoryManager.writeToHistory("User: " + prompt + "\n");
    const recentChatHistory = await memoryManager.readLatestHistory();

    const model = new Replicate({
      model:
        "a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5",
      input: {
        max_length: 2048,
      },
      apiKey: process.env.REPLICATE_API_TOKEN,
    });

    model.verbose = true;

    const resp = String(
      await model
        .call(
          `
         ONLY generate NO more than three sentences as ${name}. DO NOT generate more than three sentences. 
         Make sure the output you generate starts with '${name}:' and ends with a period.
  
         ${preamble}
  
         Below are relevant details about ${name}'s past and the conversation you are in.
         ${relevantHistory}
  
         ${recentChatHistory}\n${name}:`
        )
        .catch(console.error)
    );

    // Right now just using super shoddy string manip logic to get at
    // the dialog.

    const cleaned = resp.replaceAll(",", "");
    const chunks = cleaned.split("\n");
    const response = chunks[0];

    await memoryManager.writeToHistory("" + response.trim());
    var Readable = require("stream").Readable;

    let s = new Readable();
    s.push(response);
    s.push(null);
  
    return new StreamingTextResponse(s);
  } catch (error) {
    console.log("[CHAT_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}