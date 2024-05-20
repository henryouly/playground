import { Redis } from "@upstash/redis";

class MemoryManager {
  private static instance: MemoryManager;
  private history: Redis;

  public constructor() {
    this.history = Redis.fromEnv();  
  }

  public async init() {}

  public static async getInstance(): Promise<MemoryManager> {
    if (!MemoryManager.instance) {
      MemoryManager.instance = new MemoryManager();
      await MemoryManager.instance.init();
    }
    return MemoryManager.instance;
  }

  public async writeToHistory(text: string) {
    const key = "stock-chat";
    const result = await this.history.zadd(key, {
      score: Date.now(),
      member: text,
    });

    return result;
  }

  public async readLatestHistory(): Promise<string> {
    const key = "stock-chat";
    let result = await this.history.zrange(key, 0, Date.now(), {
      byScore: true,
    });

    result = result.slice(-30).reverse();
    const recentChats = result.reverse().join("\n");
    return recentChats;
  }  
}

export default MemoryManager;