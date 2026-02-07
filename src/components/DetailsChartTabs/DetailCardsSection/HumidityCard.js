import { motion } from "framer-motion";

export function HumidityCard({ weather }) {
  const humidity = weather.main.humidity;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
    >
      <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">Humidity</p>
      <p className="text-3xl xxs:text-4xl">{humidity}%</p>

      <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500]"
          style={{ width: `${humidity}%` }}
        ></div>
      </div>
    </motion.div>
  );
}
