import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <div className="px-5 min-h-screen max-w-[404px] md:max-w-[632px] mx-auto lg:max-w-full lg:grid lg:pl-0 pr-5 lg:grid-cols-[16rem_auto] gap-10 xl:grid-cols-[26rem_auto]">
      <aside className="hidden pt-0 px-0 lg:pt-8 lg:px-5 lg:block bg-white">
        <h2>Sidebar</h2>
      </aside>

      <div className="content w-full px-0 xl:max-w-[1180px] mx-auto">
        <header className="pt-8 mx-auto w-full flex items-center justify-between gap-2">
          <p className="bg-white rounded-xl p-2 w-fit text-sm">
            Tue, 5, September
          </p>

          <div className="flex gap-2">
            <button className="bg-gray-900 rounded-full text-white font-semibold text-[17px] h-10 w-10">
              °C
            </button>
            <button className="bg-white rounded-full text-black font-semibold text-[17px] h-10 w-10">
              °F
            </button>
          </div>
        </header>

        <main className="pb-20">
          <div className="block lg:hidden">
            <section className="mt-8">
              <label className="w-full relative h-fit">
                <FiSearch className="w-5 h-5 absolute z-10 left-2 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for places..."
                  className="rounded-full pl-10 pr-4 py-2 z-20 bg-white w-full"
                />
              </label>
            </section>

            <section className="mt-16 flex items-center justify-between gap-10">
              <Image
                src="/assets/storm.svg"
                width={256}
                height={256}
                alt="weather image"
                className="w-full max-w-[256px]"
              />
              <div>
                <h3 className="text-7xl xxs:text-[92px] flex items-center">
                  12<span className="text-3xl xxs:text-[50px]">°C</span>
                </h3>
                <p>Mostly Clear</p>
              </div>
            </section>
          </div>

          <section className="mt-16">
            <h3 className="text-[22px] font-semibold">Week Forecast</h3>

            <div className="mt-8 flex gap-4 overflow-hidden w-full lg:overflow-auto lg:justify-between">
              <div className="font-medium bg-white min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                <p>Sun</p>
                <Image
                  src="/assets/clear.svg"
                  alt="weather image"
                  width={45}
                  height={45}
                  className="w-11 h-12"
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
                  className="w-11 h-12"
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
                  className="w-11 h-12"
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
                  className="w-11 h-12"
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
                  className="w-11 h-12"
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
                  className="w-11 h-12"
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
                  className="w-11 h-12"
                />
                <p>32°</p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="flex gap-5">
              <button className="text-[22px] font-semibold underline">
                Details
              </button>
              <button className="text-[22px] font-semibold text-gray-500">
                Week Chart
              </button>
            </div>

            <div className="mt-8 font-medium grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8">
              <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
                <p className="text-xs xxs:text-sm lg:text-base text-gray-500">
                  Humidity
                </p>
                <p className="text-3xl xxs:text-4xl lg:text-5xl">25%</p>

                <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500 w-[25%]"></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
                <p className="text-xs xxs:text-sm lg:text-base text-gray-500">
                  Rain Probability
                </p>
                <p className="text-3xl xxs:text-4xl lg:text-5xl">75%</p>

                <div className="w-full h-5 lg:h-8 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="h-5 lg:h-8 bg-blue-500 rounded-full dark:bg-blue-500 w-[75%]"></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
                <p className="text-xs xxs:text-sm text-gray-500">Wind</p>
                <p className="text-3xl xxs:text-4xl">
                  5.79 <span className="text-xs xxs:text-base">Km/h</span>
                </p>
                <p className="text-xs xxs:text-sm text-gray-500">WSW</p>
              </div>

              <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
                <p className="text-xs xxs:text-sm text-gray-500">Pressure</p>
                <p className="text-3xl xxs:text-4xl">
                  1017 <span className="text-xs xxs:text-base">hPa</span>
                </p>
                <p className="text-xs xxs:text-sm text-gray-500">Normal</p>
              </div>

              <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
                <p className="text-xs xxs:text-sm text-gray-500">
                  Sunrise & Sunset
                </p>

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

              <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
                <p className="text-xs xxs:text-sm text-gray-500">Cloud Cover</p>
                <p className="text-3xl xxs:text-4xl">25%</p>

                <div className="flex items-center gap-2">
                  <p className="text-xs xxs:text-sm text-gray-500">
                    Party Cloud
                  </p>
                  <Image src="/assets/storm.svg" width={20} height={20} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
