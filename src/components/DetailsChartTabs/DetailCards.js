import {
  formattedVisibility,
  getVisibilityStatus,
  getWindDirection,
} from "@/utils/weather";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCompass } from "react-icons/fi";
export function DetailCards({ weather }) {
  let humidity = weather.main.humidity;
  console.log(weather);
  let rain = weather.forecastData.daily[0].pop * 100;
  let wind = {
    speed: weather.wind.speed.toFixed(1),
    direction: getWindDirection(weather.wind.deg),
  };
  let pressure = weather.main.pressure;
  let visibility = formattedVisibility(weather.visibility);
  let visibilityStatus = getVisibilityStatus(weather.visibility);

  let humidityPercentage = () => (
    <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500]"
        style={{ width: `${humidity}%` }}
      ></div>
    </div>
  );

  let rainPercentage = () => (
    <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500]"
        style={{ width: `${rain}%` }}
      ></div>
    </div>
  );

  return (
    <div className="font-medium items-center grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8 mb-4">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
      >
        <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">Humidity</p>
        <p className="text-3xl xxs:text-4xl">{humidity}%</p>

        {humidityPercentage()}
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
      >
        <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">
          Rain Probability
        </p>
        <p className="text-3xl xxs:text-4xl">{rain}%</p>

        {rainPercentage()}
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl p-4 flex flex-col justify-between gap-6 lg:p-4 xl:p-6 xl:gap-10 h-full"
      >
        <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">Wind</p>
        <p className="text-3xl xxs:text-4xl lg:text-4xl">
          {wind.speed} <span className="text-xs xxs:text-base">Km/h</span>
        </p>

        <p className="text-xs xxs:text-sm lg:text-sm text-gray-500 flex gap-2 items-center">
          <FiCompass size={18} /> {wind.direction}
        </p>
      </motion.div>

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
              6:35 <span className="text-xs">AM</span>
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
              5:42 <span className="text-xs">PM</span>
            </p>
          </div>
        </div>
      </motion.div>

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
          <p className="text-xs xxs:text-sm text-gray-500">
            {visibilityStatus}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
