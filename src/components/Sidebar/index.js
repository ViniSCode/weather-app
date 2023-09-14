import { motion } from "framer-motion";
import { LocationSearchBar } from "../LocationSearchBar";
import { MainWeatherSection } from "../MainWeatherSection";
import { SidebarInfo } from "./SidebarInfo";

export function Sidebar() {
  const container = {
    hidden: { opacity: 0, x: "-100px" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "100px" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.aside
      variants={container}
      initial="hidden"
      animate="visible"
      className="hidden pt-0 px-0 lg:pt-4 xl:pt-8 lg:px-10 lg:block bg-white"
    >
      <motion.div variants={item}>
        <LocationSearchBar />
      </motion.div>
      <motion.div variants={item}>
        <MainWeatherSection />
      </motion.div>
      <div className="mt-6 mb-6 h-[2px] bg-gray-300"></div>
      <motion.div variants={item} className="w-full mb-2">
        <SidebarInfo />
      </motion.div>
    </motion.aside>
  );
}
