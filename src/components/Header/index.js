import { motion } from "framer-motion";
import { CityName } from "./CityName";

export function Header() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i) => {
      const delay = 0.1 + i * 0.2;
      return {
        opacity: 1,
        transition: {
          delay,
          duration: 0.3,
          staggerChildren: 0.2,
        },
      };
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <header className="pt-8 lg:pt-4 xl:pt-8 mx-auto w-full flex items-center justify-between gap-2">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        custom={0}
        animate="visible"
        className="flex gap-4 font-medium"
      >
        <motion.div variants={item}>
          <CityName />
        </motion.div>
        <motion.p
          variants={item}
          className="hidden lg:block bg-white rounded-xl p-2 w-fit text-sm"
        >
          Tue, 5, September
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        custom={1.5}
        animate="visible"
        className="flex gap-2"
      >
        <button className="bg-gray-900 rounded-full text-white font-semibold text-[17px] h-10 w-10">
          °C
        </button>
        <button className="bg-white rounded-full text-black font-semibold text-[17px] h-10 w-10">
          °F
        </button>
      </motion.div>
    </header>
  );
}
