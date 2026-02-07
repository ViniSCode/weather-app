import { motion } from "framer-motion";
import { HumidityCard } from "./HumidityCard";
import { PressureCard } from "./PressureCard";
import { RainCard } from "./RainCard";
import { SunriseSunsetCard } from "./SunriseSunsetCard";
import { VisibilityCard } from "./VisibilityCard";
import { WindCard } from "./WindCard";

export function DetailCardsSection({ weather }) {
  const container = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-8"
    >
      <div className="font-medium items-center grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8 mb-4">
        <HumidityCard weather={weather} />
        <RainCard weather={weather} />
        <WindCard weather={weather} />
        <PressureCard weather={weather} />
        <SunriseSunsetCard weather={weather} />
        <VisibilityCard weather={weather} />
      </div>
    </motion.section>
  );
}
