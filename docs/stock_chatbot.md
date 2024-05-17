Hello, I'm Henry and I like finance, large language models and agent framework.

Here is a rough idea I'd like to explore further - create a chat bot that can be used for financial analysis.

A typical user journey I'm envisioning:

1. The user asks the bot: Can you develop a few strategies to trade SPY (or any stock symbols), and analyze the strategy's
profitability and risk.
2. The bot will utilize an agent framework to develop a trading strategy (such as "Utilize 20d and 200d SMAs to determine
market trends, with RSI and MACD to identify potential reversal points.) This agent can use scrape and search tools to
do its own research.
3. Run a backtesting with the strategy. I am hoping it can be enough to generate code to implement a compounding strategy 
using the great work from https://github.com/cinar/indicator/, or maybe at least choose from existing ones.
4. Send users to an interactive candlestick chart to view the result, and also tweak the ask further (for example, let's
try 30d and 90d SMA instead)

Insipration from:
- [The crew AI course from crew.ai](https://learn.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai/lesson/15/mutli-agent-collaboration-for-financial-analysis-(code))
- https://github.com/cinar/indicator. Looks like great to be a backend component to run backtesting with custom strategies.
- https://github.com/tradingview/lightweight-charts. I used it to make simple interactive candlestick chart in stock-dashboard project.
