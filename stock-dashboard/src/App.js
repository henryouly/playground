import { createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const fetchHistoricalData = async (symbol, startDate, endDate) => {
  try {
    const response = await fetch(`/api/${symbol}?period1=${startDate}&period2=${endDate}&interval=1d`);
    const data = await response.json();

    // Handle the data as needed
    const result = data.chart.result[0];
    const { meta, timestamp, indicators } = result;
    const { quote } = indicators;

    // Printing the fetched data
    console.log("Symbol:", meta.symbol);
    console.log("Timestamp:", new Date(timestamp[0] * 1000));
    console.log("Current Price:", quote[0].close);
    console.log("High Price:", quote[0].high);
    console.log("Low Price:", quote[0].low);
    console.log("Open Price:", quote[0].open);

    const stockData = timestamp.map((ts, index) => {
      return {
        open: quote[0].open[index],
        high: quote[0].high[index],
        low: quote[0].low[index],
        close: quote[0].close[index],
        time: ts
      }
    })

    console.log("stockData:", stockData);

    return stockData;
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};

export const ChartComponent = props => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = '#2962FF',
      textColor = 'black',
      areaTopColor = '#2962FF',
      areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(
    () => {
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      };

      const chart = createChart(chartContainerRef.current, {
        layout: {
          textColor: 'black',
          background: { type: 'solid', color: 'white' }
        },
        width: chartContainerRef.current.clientWidth,
        height: 300,
      });
      chart.timeScale().fitContent();

      const candlestickSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
      candlestickSeries.setData(data);
      const markers = [
        {
          time: { year: 2023, month: 3, day: 1 },
          position: 'belowBar',
          color: '#26a69a',
          shape: 'arrowUp',
          text: 'B',
        },
        {
          time: { year: 2023, month: 8, day: 1 },
          position: 'aboveBar',
          color: '#ef5350',
          shape: 'arrowDown',
          text: 'S',
        },
      ];
      candlestickSeries.setMarkers(markers);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        chart.remove();
      };
    },
    [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
  );

  return (
    <div
      ref={chartContainerRef}
    />
  );
};

// Data format
// const initialData = [
//   { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
//   { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 },
//   { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
//   { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
//   { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 },
//   { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
//   { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 },
//   { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 },
//   { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 },
//   { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }
// ]
const stockData = await fetchHistoricalData(
  "AAPL",
  new Date('2023-01-01').getTime() / 1000,
  new Date('2023-12-31').getTime() / 1000
);

function App(props) {
  return (
    <ChartComponent {...props} data={stockData}></ChartComponent>
  );
}

export default App;
