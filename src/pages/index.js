import { DetailsChartTabs } from "@/components/DetailsChartTabs";
import { Header } from "@/components/Header";
import { LocationSearchBar } from "@/components/LocationSearchBar";
import { MainWeatherSection } from "@/components/MainWeatherSection";
import { Sidebar } from "@/components/Sidebar";
import { WeekForecastSection } from "@/components/WeekForecastSection";
import Head from "next/head";

export default function Home(props) {
  return (
    <div className="px-5 min-h-screen max-w-[404px] md:max-w-[632px] mx-auto lg:max-w-full lg:grid lg:pl-0 pr-5 lg:grid-cols-[20rem_auto] gap-10 xl:grid-cols-[26rem_auto]">
      <Head>
        <meta
          name="description"
          content="Get accurate weather forecasts for your location with our weather app. Stay informed about current conditions and upcoming weather changes."
        />
        <meta
          name="keywords"
          content="weather app, weather forecast, location-based weather, weather conditions, weather updates"
        />
        <title>Today's Weather</title>
      </Head>

      <Sidebar />

      <div className="content w-full px-0 lg:max-w-[950px] xl:max-w-[1180px] mx-auto">
        {props.weather && <Header weather={props.weather} />}
        <main>
          <div className="block lg:hidden">
            <LocationSearchBar />
            {props.weather && <MainWeatherSection weather={props.weather} />}
          </div>

          {props.weather && <WeekForecastSection weather={props.weather} />}
          <DetailsChartTabs />
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const url =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/weather";
  try {
    const apiResponse = await fetch(url);
    const { apiKey } = await apiResponse.json();

    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${apiKey}`
      );

      if (!weatherResponse.ok) {
        throw new Error("Something went wrong while fetching weather");
      }

      const weatherData = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
      );

      if (!forecastResponse.ok) {
        throw new Error("Something went wrong while fetching forecast data");
      }

      const forecastData = await forecastResponse.json();

      const weather = {
        ...weatherData,
        forecastData,
      };

      return {
        props: {
          weather,
        },
      };
    } catch (weatherError) {
      console.error("Failed to fetch weather data:", weatherError);

      return {
        props: {
          weatherError,
        },
      };
    }
  } catch (apiError) {
    console.error("Failed to fetch API key:", apiError);

    return {
      props: {
        apiKey: "",
      },
    };
  }
}
