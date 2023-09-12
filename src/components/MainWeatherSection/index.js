import Image from "next/image";

export function MainWeatherSection() {
  return (
    <section className="mt-16 lg:mt-16 flex flex-row items-center justify-between gap-10 lg:flex-col lg:items-start">
      <Image
        src="/assets/storm.svg"
        width={256}
        height={256}
        alt="weather image"
        className="w-full max-w-[256px] lg:max-w-[200px] xl:max-w-[256px]"
      />
      <div>
        <h3 className="text-7xl xxs:text-[92px] lg:text-7xl flex items-center">
          12<span className="text-3xl xxs:text-[50px] lg:text-[40px]">°C</span>
        </h3>
        <p className="font-medium mt-0 lg:mt-2 xl:mt-4 xl:text-lg lg:font-semibold">
          Mostly Clear
        </p>
      </div>
    </section>
  );
}
