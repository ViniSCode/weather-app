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
      stroke: {
        curve: "smooth",
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        type: "date",
        categories: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
      },
      yaxis: {
        show: true,
      },
    },
    series: [
      {
        name: "temperature",
        data: [18, 22, 10, 15, 25, 20, 15],
      },
    ],
  });

  return (
    <motion.div initial="hidden" animate="visible" variants={chartFadeIn}>
      <div className="w-full bg-white rounded-xl px-0 py-1 lg:py-4 lg:px-2  h-[300px] md:h-[400px]">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    </motion.div>
  );
}
