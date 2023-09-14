import { motion } from "framer-motion";
import { DetailCards } from "./DetailCards";

export function DetailCardsSection() {
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
      className="mt-10 xl:mt-16"
    >
      <DetailCards />
    </motion.section>
  );
}
