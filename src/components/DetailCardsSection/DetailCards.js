import Image from "next/image";

export function DetailCards() {
  return (
    <div className="mt-8 font-medium grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8">
      <div className="bg-white rounded-xl p-4 flex flex-col gap-6 lg:p-4 xl:p-6 xl:gap-10">
        <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">Humidity</p>
        <p className="text-3xl xxs:text-4xl">25%</p>

        <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500 w-[25%]"></div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 flex flex-col gap-6 lg:p-4 xl:p-6 xl:gap-10">
        <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">
          Rain Probability
        </p>
        <p className="text-3xl xxs:text-4xl">75%</p>

        <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500 w-[75%]"></div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 flex flex-col gap-6 lg:p-4 xl:p-6 xl:gap-10">
        <p className="text-xs xxs:text-sm lg:text-sm text-gray-500">Wind</p>
        <p className="text-3xl xxs:text-4xl lg:text-4xl">
          5.79 <span className="text-xs xxs:text-base">Km/h</span>
        </p>

        <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500 w-[75%]"></div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 flex flex-col gap-6 lg:p-4 xl:p-6 xl:gap-10">
        <p className="text-xs xxs:text-sm text-gray-500">Pressure</p>
        <p className="text-3xl xxs:text-4xl">
          1017 <span className="text-xs xxs:text-base">hPa</span>
        </p>
        <p className="text-xs xxs:text-sm text-gray-500">Normal</p>
      </div>

      <div className="bg-white rounded-xl p-4 flex flex-col gap-6 lg:p-4 xl:p-6 xl:gap-10">
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
      </div>

      <div className="bg-white rounded-xl p-4 flex flex-col gap-6 lg:p-4 xl:p-6 xl:gap-10">
        <p className="text-xs xxs:text-sm text-gray-500">Cloud Cover</p>
        <p className="text-3xl xxs:text-4xl">25%</p>

        <div className="flex items-center gap-2">
          <p className="text-xs xxs:text-sm text-gray-500">Party Cloud</p>
          <Image
            src="/assets/storm.svg"
            width={20}
            height={20}
            alt="weather image"
          />
        </div>
      </div>
    </div>
  );
}
