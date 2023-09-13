import { motion } from "framer-motion";
import { DetailCards } from "./DetailCards";

export function DetailCardsSection() {
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-10 xl:mt-16"
    >
      <div className="flex gap-5">
        <button className="text-lg xl:text-[22px] font-semibold underline">
          Details
        </button>
        <button className="text-lg xl:text-[22px] font-semibold text-gray-500">
          Week Chart
        </button>
      </div>

      <DetailCards />
    </motion.section>
  );
}
