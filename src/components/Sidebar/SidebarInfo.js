import Image from "next/image";

export function SidebarInfo() {
  return (
    <div className="flex flex-col gap-6 justify-between sidebarInfoHeight pb-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image src="/assets/clock.png" width={23} height={23} alt="date" />
          <p className="font-medium">Monday, 16:00</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/assets/wind.svg" width={23} height={23} alt="date" />
          <p className="font-medium">Wind - 5.79 Km/h</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/assets/rain.svg" width={23} height={23} alt="date" />
          <p className="font-medium">Rain - 87%</p>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          src="/assets/name-background.png"
          width={100}
          height={200}
          quality={100}
          alt="city name"
          className="h-[150px] w-full rounded-[25px] object-cover"
        />

        <p className="text-3xl font-medium text-white text-center w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          New York, USA
        </p>
      </div>
    </div>
  );
}
