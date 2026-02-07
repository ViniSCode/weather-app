import { getWindDirection } from "@/utils/weather";
import { motion } from "framer-motion";
import { FiCompass } from "react-icons/fi";

export function WindCard({ weather }) {
  const wind = {
    speed: weather.wind.speed.toFixed(1),
    direction: getWindDirection(weather.wind.deg),
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
    >
      <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">Wind</p>
      <p className="text-3xl xxs:text-4xl lg:text-4xl">
        {wind.speed} <span className="text-xs xxs:text-base">Km/h</span>
      </p>

      <p className="text-xs xxs:text-sm lg:text-sm text-gray-500 flex gap-2 items-center">
        <FiCompass size={18} /> {wind.direction}
      </p>
    </motion.div>
  );
}
