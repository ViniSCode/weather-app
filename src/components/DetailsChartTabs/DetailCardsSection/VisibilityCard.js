import { formattedVisibility, getVisibilityStatus } from "@/utils/weather";
import { motion } from "framer-motion";

export function VisibilityCard({ weather }) {
  const visibility = formattedVisibility(weather.visibility);
  const visibilityStatus = getVisibilityStatus(weather.visibility);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
    >
      <p className="text-xs xxs:text-sm text-gray-500">Visibility</p>
      <p className="text-3xl xxs:text-4xl">
        {visibility}
        <span className="text-xs xxs:text-base">Km</span>
      </p>

      <div className="flex items-center gap-2">
        <p className="text-xs xxs:text-sm text-gray-500">{visibilityStatus}</p>
      </div>
    </motion.div>
  );
}
