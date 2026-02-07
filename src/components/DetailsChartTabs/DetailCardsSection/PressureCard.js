import { motion } from "framer-motion";

export function PressureCard({ weather }) {
  const pressure = weather.main.pressure;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
    >
      <p className="text-xs xxs:text-sm text-gray-500">Pressure</p>
      <p className="text-3xl xxs:text-4xl">
        {pressure} <span className="text-xs xxs:text-base">hPa</span>
      </p>
      <p className="text-xs xxs:text-sm text-gray-500">Normal</p>
    </motion.div>
  );
}
