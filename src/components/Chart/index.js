import { motion } from "framer-motion";
import { useState } from "react";
import Chart from "react-apexcharts";

export default function WeekChart() {
  const chartFadeIn = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        width: 100,
        height: 400,
        toolbar: false,
        fontFamily: "Raleway sans-serif",
        padding: { left: 40, right: 40, top: 40, bottom: 40 },
      },
      fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
          shade: "dark",
          opacityFrom: "0.7",
          opacityTo: "0.3",
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "date",
        categories: [
          "Thu, 14",
          "Fri, 14",
          "Sat, 14",
          "Sun, 14",
          "Mon, 14",
          "Tue, 14",
          "Wed, 14",
        ],
      },
    },
    series: [
      {
        name: "temperature",
        data: [18, 22, 10, 15, 25, 20, 15, 30],
      },
    ],
  });

  return (
    <motion.div initial="hidden" animate="visible" variants={chartFadeIn}>
      <div className="w-full bg-white rounded-xl px-4 py-4">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          width="100%"
          height="400"
        />
      </div>
    </motion.div>
  );
}
