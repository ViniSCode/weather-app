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
    const tz = props?.weather?.forecastData?.timezone;
    const date = new Date();

    const toLocaleSafe = (dateObj, tzValue, options) => {
      const opts = { ...options };
      delete opts.timeZone;

      if (typeof tzValue === "number") {
        const utcMs = dateObj.getTime() + dateObj.getTimezoneOffset() * 60000;
        const localMs = utcMs + tzValue * 1000;
        return new Date(localMs).toLocaleString("en-US", opts);
      }

      return dateObj.toLocaleString("en-US", { ...opts, timeZone: tzValue });
    };

    const dateInfo = { weekday: "short", day: "numeric", month: "long" };
    const dayTimeInfo = { weekday: "long", hour: "numeric", minute: "numeric" };

    const todaysDate = toLocaleSafe(date, tz, dateInfo);
    const dayTime = toLocaleSafe(date, tz, dayTimeInfo);
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
        `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${apiKey}`,
      );

      if (!weatherResponse.ok) {
        const errorData = await weatherResponse.text();
        console.error("Weather API error:", weatherResponse.status, errorData);
        throw new Error("Something went wrong while fetching weather");
      }

      const weatherData = await weatherResponse.json();

      // Use the free 5-day / 3-hour forecast endpoint and aggregate into daily summaries
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=metric&appid=${apiKey}`,
      );

      if (!forecastResponse.ok) {
        const errorData = await forecastResponse.text();
        console.error(
          "Forecast API error:",
          forecastResponse.status,
          errorData,
        );
        throw new Error("Something went wrong while fetching forecast data");
      }

      const forecastJson = await forecastResponse.json();

      // Aggregate 3-hourly entries into daily summaries (max/min, representative weather)
      const groups = {};
      (forecastJson.list || []).forEach((item) => {
        const date = new Date(item.dt * 1000).toISOString().slice(0, 10);
        groups[date] = groups[date] || [];
        groups[date].push(item);
      });

      const daily = Object.keys(groups)
        .slice(0, 7)
        .map((date) => {
          const items = groups[date];
          const temps = items
            .map((i) => i.main && i.main.temp)
            .filter((t) => typeof t === "number");
          const min = temps.length ? Math.min(...temps) : null;
          const max = temps.length ? Math.max(...temps) : null;
          const midday = items[Math.floor(items.length / 2)];
          const pops = items.map((i) =>
            typeof i.pop === "number"
              ? i.pop
              : i.pop === 0
                ? 0
                : i.rain || i.snow
                  ? 1
                  : 0,
          );
          const pop = pops.length ? Math.max(...pops) : 0;

          return {
            dt: Math.floor(new Date(date).getTime() / 1000),
            date,
            temp: { min, max },
            pop,
            weather:
              midday && midday.weather
                ? midday.weather
                : [{ id: 800, main: "Clear", description: "clear sky" }],
            items,
          };
        });

      const forecastData = {
        ...forecastJson,
        daily,
        timezone:
          forecastJson.city?.timezone ||
          forecastJson.timezone ||
          weatherData.timezone,
      };
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
          weatherError: weatherError.message || "Failed to fetch weather data",
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
