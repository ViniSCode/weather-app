import { TimeConvert } from "@/utils/weather";
import { motion } from "framer-motion";
import Image from "next/image";

export function SunriseSunsetCard({ weather }) {
  const timezone = weather.forecastData.timezone;
  const sunrise = TimeConvert(timezone, weather.sys.sunrise).split(" ");
  const sunset = TimeConvert(timezone, weather.sys.sunset).split(" ");

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
    >
      <p className="text-xs xxs:text-sm text-gray-500">Sunrise & Sunset</p>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/sunrise.svg"
            width={35}
            height={35}
            alt="Sunset"
            className="w-8 h-8 xxs:w-full xxs:h-full xxs:max-w-[35px]"
          />

          <p className="font-medium text-base xxs:text-lg w-fit">
            {sunrise[0]} <span className="text-xs">{sunrise[1]}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/assets/sunset.svg"
            width={35}
            height={35}
            alt="Sunrise"
            className="w-8 h-8 xxs:w-full xxs:h-full xxs:max-w-[35px]"
          />

          <p className="font-medium text-base xxs:text-lg w-fit">
            {sunset[0]} <span className="text-xs">{sunset[1]}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
