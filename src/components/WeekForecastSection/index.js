import getNext7Days, { getWeatherCode } from "@/utils/weather";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function WeekForecastSection({ weather }) {
  const sevenDaysWeek = getNext7Days(weather.forecastData.timezone);
  let forecast = weather && weather.forecastData.daily;

  const [carouselWidth, setCarouselWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    if (slideRef.current) {
      setCarouselWidth(
        slideRef.current.scrollWidth - slideRef.current.offsetWidth
      );
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: "100px" },
    visible: { opacity: 1, x: 0 },
  };

  const item2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <section
      className="mt-10 xl:mt-16 min-h-[180px] overflow-hidden"
      ref={slideRef}
    >
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={item2}
        className="text-lg xl:text-[22px] font-semibold"
      >
        Week Forecast
      </motion.h3>

      <motion.div
        drag="x"
        whileDrag={{ scale: 1.03 }}
        dragConstraints={{ right: 0, left: -carouselWidth }}
        dragMomentum={false}
        onPointerDown={() => {
          setIsDragging(true);
        }}
        onPointerOut={() => {
          setIsDragging(false);
        }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
        initial="hidden"
        animate="visible"
        variants={container}
        className={`mt-8 flex gap-4 w-full cursor-grab lg:cursor-default lg:overflow-auto lg:justify-between ${
          isDragging && "cursor-grabbing"
        }`}
      >
        {forecast.map((temp, index) => {
          return (
            <motion.div
              key={index}
              variants={item}
              className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
            >
              <p>{sevenDaysWeek[index]}</p>
              <Image
                src={`/assets/${getWeatherCode(temp.weather[0].id)}.svg`}
                alt="weather image"
                width={45}
                height={45}
                className="w-11 h-12 lg:w-10 lg:h-8"
              />
              <p className="text-sm">
                {`${temp.temp.max.toFixed()} ~ ${temp.temp.min.toFixed()}`}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
