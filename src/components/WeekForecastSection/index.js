import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function WeekForecastSection() {
  const [carouselWidth, setCarouselWidth] = useState(0);
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
        dragConstraints={{ right: 0, left: -carouselWidth }}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
        initial="hidden"
        animate="visible"
        variants={container}
        className="mt-8 flex gap-4 w-full lg:overflow-auto lg:justify-between"
      >
        <motion.div
          variants={item}
          className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
        >
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </motion.div>

        <motion.div
          variants={item}
          className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
        >
          <p>Sun</p>
          <Image
            src="/assets/rain.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </motion.div>

        <motion.div
          variants={item}
          className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
        >
          <p>Sun</p>
          <Image
            src="/assets/cloudy.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </motion.div>

        <motion.div
          variants={item}
          className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
        >
          <p>Sun</p>
          <Image
            src="/assets/storm.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </motion.div>

        <motion.div
          variants={item}
          className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
        >
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </motion.div>

        <motion.div
          variants={item}
          className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
        >
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]"
        >
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
