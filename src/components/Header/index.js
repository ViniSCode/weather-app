import { motion } from "framer-motion";
import { CelsiusFahrenheit } from "./CelsiusFahrenheit";
import { CityName } from "./CityName";

export function Header({ weather, formattedDateTime }) {
  let cityName = weather.name + ", " + weather.sys.country;

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
          <CityName cityName={cityName} />
        </motion.div>
        <motion.p
          variants={item}
          className="hidden md:block md:bg-gray-900 md:text-white  lg:bg-white lg:text-black rounded-xl p-2 w-fit text-sm"
        >
          {formattedDateTime && formattedDateTime.todaysDate}
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        custom={1.5}
        animate="visible"
        className="flex gap-2"
      >
        <CelsiusFahrenheit />
      </motion.div>
    </header>
  );
}
