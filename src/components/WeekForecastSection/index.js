import Image from "next/image";

export function WeekForecastSection() {
  return (
    <section className="mt-10 xl:mt-16">
      <h3 className="text-lg xl:text-[22px] font-semibold">Week Forecast</h3>

      <div className="mt-8 flex gap-4 overflow-hidden w-full lg:overflow-auto lg:justify-between">
        <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </div>

        <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
          <p>Sun</p>
          <Image
            src="/assets/rain.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </div>

        <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
          <p>Sun</p>
          <Image
            src="/assets/cloudy.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </div>

        <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
          <p>Sun</p>
          <Image
            src="/assets/storm.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </div>

        <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </div>

        <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </div>

        <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
          <p>Sun</p>
          <Image
            src="/assets/clear.svg"
            alt="weather image"
            width={45}
            height={45}
            className="w-11 h-12 lg:w-10 lg:h-8"
          />
          <p>32°</p>
        </div>
      </div>
    </section>
  );
}
