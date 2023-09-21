import { getWeatherCode } from "@/utils/weather";
import { motion } from "framer-motion";
import Image from "next/image";

export function MainWeatherSection({ weather }) {
  const container = {
    hidden: { opacity: 0, x: "-20px" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  let weatherImage =
    weather && weather.weather && getWeatherCode(weather.weather[0].id);

  let weatherConditions = weather && weather.weather && weather.weather[0].main;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-16 lg:mt-8 flex flex-row items-center justify-center  gap-2 lg:gap-10 lg:justify-between lg:flex-col lg:items-start"
    >
      <div>
        <Image
          src={`/assets/${weatherImage}.svg`}
          width={256}
          height={256}
          quality={10}
          priority
          alt="weather image"
          className="w-full md:max-w-[256px] lg:max-w-[200px] xl:max-w-[256px]"
        />
      </div>
      <div>
        <h3 className="text-7xl xxs:text-[92px] lg:text-7xl flex items-center">
          {weather?.main.temp && weather.main.temp.toFixed()}
          <span className="block text-3xl xxs:text-[50px] lg:text-[40px]">
            °C
          </span>
        </h3>
        <p className="font-medium mt-0 lg:mt-4 xl:mt-4 xl:text-lg lg:font-semibold">
          {weatherConditions}
        </p>
      </div>
    </motion.section>
  );
}
