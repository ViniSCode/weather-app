import Image from "next/image";

export function SidebarInfo({ weather, formattedDateTime }) {
  let wind = weather && weather.wind.speed;
  let precipitation = weather && weather.forecastData.daily[0].pop * 100;
  let cityName = weather.name + ", " + weather.sys.country;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Image src="/assets/clock.png" width={23} height={23} alt="date" />
          <p className="font-medium">
            {formattedDateTime && formattedDateTime.dayTime}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/assets/wind.svg" width={23} height={23} alt="wind" />
          <p className="font-medium">Wind - {wind} Km/h</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/assets/rain.svg" width={23} height={23} alt="rain" />
          <p className="font-medium">
            Rain - {precipitation ? `${precipitation}%` : "No precipitation"}
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          src="/assets/name-background.png"
          width={100}
          height={200}
          quality={100}
          alt={cityName}
          className="h-[150px] w-full rounded-[25px] object-cover"
        />

        <p className="text-2xl font-medium text-white text-center w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          {cityName}
        </p>
      </div>
    </div>
  );
}
