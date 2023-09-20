import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export function Skeleton() {
  const cfButtons =
    "animate-pulse text-gray-350 bg-gray-350 rounded rounded-full font-semibold text-[17px] h-10 w-10";

  return (
    <div className="px-5 min-h-screen max-w-[404px] md:max-w-[632px] mx-auto lg:max-w-full lg:grid lg:pl-0 pr-5 lg:grid-cols-[20rem_auto] gap-10 xl:grid-cols-[26rem_auto]">
      {/* SIDEBAR */}
      <div>
        <aside className="h-screen hidden pt-0 px-0 lg:pt-4 xl:pt-8 lg:px-10 lg:block bg-white z-50 relative">
          <div>
            <section className="mt-8 lg:mt-0 p-0 lg:full lg:bg-white lg:pb-4 relative">
              <label className="w-full relative h-fit">
                <FiSearch className="w-5 h-5 absolute z-10 left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for places..."
                  className="placeholder:text-gray-600 text-black placeholder:font-medium font-medium rounded-full pl-10 pr-4 py-2 z-20 bg-white w-full lg:bg-gray-300 focus:outline-blue-500"
                />
              </label>
            </section>
          </div>
          <div>
            <section className="mt-16 lg:mt-8 flex flex-row items-center justify-between gap-10 lg:flex-col lg:items-start">
              <Image
                src={`/assets/weather-skeleton.svg`}
                width={256}
                height={256}
                quality={10}
                priority
                alt="weather image"
                className="rounded-xl w-full max-w-[256px] lg:max-w-[200px] xl:max-w-[256px] animate-pulse"
              />
              <div>
                <div className="animate-pulse text-gray-350 bg-gray-350 rounded-xl text-7xl xxs:text-[92px] lg:text-7xl flex items-center">
                  27
                  <span className="animate-pulse text-gray-350 bg-gray-350 text-3xl xxs:text-[50px] lg:text-[40px]">
                    °C
                  </span>
                </div>
                <p className="animate-pulse text-gray-350 bg-gray-350 rounded font-medium mt-0 lg:mt-4 xl:mt-4 xl:text-lg lg:font-semibold">
                  Clear
                </p>
              </div>
            </section>
          </div>
          <div className="mt-6 mb-6 h-[2px] bg-gray-300"></div>
          <div className="w-full mb-2">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <p className="font-medium animate-pulse text-gray-350 bg-gray-350 rounded">
                    Wednesday 13:24 PM
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-medium animate-pulse text-gray-350 bg-gray-350 rounded">
                    Wind - 5.7 Km/h
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-medium animate-pulse text-gray-350 bg-gray-350 rounded">
                    Rain - No precipitation
                  </p>
                </div>
              </div>

              <div className="relative w-full">
                <Image
                  src="/assets/name-background-skeleton.png"
                  width={100}
                  height={200}
                  quality={100}
                  alt="city name"
                  className="h-[150px] w-full rounded-[25px] object-cover animate-pulse"
                />
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="content w-full px-0 lg:max-w-[950px] xl:max-w-[1180px] mx-auto">
        {/* HEADER */}
        <div>
          <header className="pt-8 lg:pt-4 xl:pt-8 mx-auto w-full flex items-center justify-between gap-2">
            <div className="flex gap-4 font-medium">
              <p className="animate-pulse text-gray-350 bg-gray-350 block rounded-xl p-2 w-fit max-w-[130px] text-sm truncate">
                New York, US
              </p>
              <p className="animate-pulse text-gray-350 bg-gray-350 hidden md:block rounded-xl p-2 w-fit text-sm">
                Wed, September 20
              </p>
            </div>

            <div className="flex gap-2">
              <div className={cfButtons}></div>
              <div className={cfButtons}></div>
            </div>
          </header>
        </div>

        <main>
          <div className="block lg:hidden">
            <div>
              <section className="mt-8 lg:mt-0 p-0 lg:full lg:bg-white lg:pb-4 relative">
                <label className="w-full relative h-fit">
                  <FiSearch className="w-5 h-5 absolute z-10 left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search for places..."
                    className="placeholder:text-gray-600 text-black placeholder:font-medium font-medium rounded-full pl-10 pr-4 py-2 z-20 bg-white w-full lg:bg-gray-300 focus:outline-blue-500"
                  />
                </label>
              </section>
            </div>
            <div>
              <section className="mt-16 lg:mt-8 flex flex-row items-center justify-between gap-10 lg:flex-col lg:items-start">
                <Image
                  src={`/assets/cloudy.svg`}
                  width={256}
                  height={256}
                  quality={10}
                  priority
                  alt="weather image"
                  className="w-full max-w-[256px] lg:max-w-[200px] xl:max-w-[256px]"
                />
                <div>
                  <h3 className="text-7xl xxs:text-[92px] lg:text-7xl flex items-center">
                    27
                    <span className="text-3xl xxs:text-[50px] lg:text-[40px]">
                      °C
                    </span>
                  </h3>
                  <p className="font-medium mt-0 lg:mt-4 xl:mt-4 xl:text-lg lg:font-semibold">
                    Clear
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div>
            <section className="mt-10 xl:mt-16 min-h-[180px] overflow-hidden">
              <h3 className="animate-pulse text-gray-350 bg-gray-350 rounded text-lg xl:text-[22px] font-semibold max-w-fit">
                Week Forecast
              </h3>

              <div className="mt-8 flex gap-4 w-full cursor-grab lg:cursor-default lg:overflow-auto lg:justify-between">
                <div className="animate-pulse text-gray-350 bg-gray-350 font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                  <p>27</p>
                  <Image
                    src="/assets/weather-skeleton.svg"
                    alt="weather image"
                    width={45}
                    height={45}
                    className="w-11 h-12 lg:w-10 lg:h-8"
                  />
                  <p>27°</p>
                </div>
                <div className="animate-pulse text-gray-350 bg-gray-350 font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                  <p>27</p>
                  <Image
                    src="/assets/weather-skeleton.svg"
                    alt="weather image"
                    width={45}
                    height={45}
                    className="w-11 h-12 lg:w-10 lg:h-8"
                  />
                  <p>27°</p>
                </div>
                <div className="animate-pulse text-gray-350 bg-gray-350 font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                  <p>27</p>
                  <Image
                    src="/assets/weather-skeleton.svg"
                    alt="weather image"
                    width={45}
                    height={45}
                    className="w-11 h-12 lg:w-10 lg:h-8"
                  />
                  <p>27°</p>
                </div>
                <div className="animate-pulse text-gray-350 bg-gray-350 font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                  <p>27</p>
                  <Image
                    src="/assets/weather-skeleton.svg"
                    alt="weather image"
                    width={45}
                    height={45}
                    className="w-11 h-12 lg:w-10 lg:h-8"
                  />
                  <p>27°</p>
                </div>
                <div className="animate-pulse text-gray-350 bg-gray-350 font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                  <p>27</p>
                  <Image
                    src="/assets/weather-skeleton.svg"
                    alt="weather image"
                    width={45}
                    height={45}
                    className="w-11 h-12 lg:w-10 lg:h-8"
                  />
                  <p>27°</p>
                </div>
                <div className="animate-pulse text-gray-350 bg-gray-350 font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                  <p>27</p>
                  <Image
                    src="/assets/weather-skeleton.svg"
                    alt="weather image"
                    width={45}
                    height={45}
                    className="w-11 h-12 lg:w-10 lg:h-8"
                  />
                  <p>27°</p>
                </div>
                <div className="animate-pulse text-gray-350 bg-gray-350 font-medium min-w-[95px] rounded-xl w-24 p-2 flex flex-col gap-2 items-center lg:w-full lg:h-full lg:min-w-0 lg:max-w-[126px]">
                  <p>27</p>
                  <Image
                    src="/assets/weather-skeleton.svg"
                    alt="weather image"
                    width={45}
                    height={45}
                    className="w-11 h-12 lg:w-10 lg:h-8"
                  />
                  <p>27°</p>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-10 xl:mt-16 min-h-[180px]">
            <div className="flex gap-3">
              <p className="animate-pulse text-gray-350 bg-gray-350 rounded text-lg xl:text-[22px] font-semibold leading-none select-none first:rounded-tl-md last:rounded-tr-md ">
                Details
              </p>
              <p className="animate-pulse text-gray-350 bg-gray-350 rounded text-lg xl:text-[22px] font-semibold leading-none select-none first:rounded-tl-md last:rounded-tr-md ">
                Week Chart
              </p>
            </div>
            <div className="mt-8 animate-pulse text-gray-350 bg-gray-350 rounded-xl h-96"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
