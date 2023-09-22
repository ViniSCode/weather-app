import { DetailsChartTabs } from "@/components/DetailsChartTabs";
import { Header } from "@/components/Header";
import { LocationSearchBar } from "@/components/LocationSearchBar";
import { MainWeatherSection } from "@/components/MainWeatherSection";
import { Sidebar } from "@/components/Sidebar";
import { WeekForecastSection } from "@/components/WeekForecastSection";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [formattedDateTime, setFormattedDateTime] = useState(null);

  useEffect(() => {
    const dateInfo = {
      timeZone: props.weather.forecastData.timezone,
      weekday: "short",
      day: "numeric",
      month: "long",
    };
    const dayTimeInfo = {
      timeZone: props.weather.forecastData.timezone,
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    };
    const date = new Date();
    const todaysDate = date.toLocaleString("en-US", dateInfo);
    const dayTime = date.toLocaleString("en-US", dayTimeInfo);
    setFormattedDateTime({ todaysDate, dayTime });
    setFormattedDateTime({ todaysDate, dayTime });
  }, []);

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

      {props.weather && (
        <Sidebar
          weather={props.weather}
          formattedDateTime={formattedDateTime}
          apiKey={props.apiKey}
        />
      )}

      <div className="content w-full px-0 lg:max-w-[950px] xl:max-w-[1180px] mx-auto">
        {props.weather && (
          <Header
            weather={props.weather}
            formattedDateTime={formattedDateTime}
            apiKey={props.apiKey}
          />
        )}
        <main>
          <div className="block lg:hidden">
            <LocationSearchBar apiKey={props.apiKey} />
            {props.weather && <MainWeatherSection weather={props.weather} />}
          </div>

          {props.weather && <WeekForecastSection weather={props.weather} />}
          {props.weather && <DetailsChartTabs weather={props.weather} />}
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const url =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/weather";
  try {
    const apiResponse = await fetch(url);
    const { apiKey } = await apiResponse.json();

    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=New York, US&units=metric&appid=${apiKey}`
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
          apiKey,
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
