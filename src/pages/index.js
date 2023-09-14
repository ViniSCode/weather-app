import { DetailsChartTabs } from "@/components/DetailsChartTabs";
import { Header } from "@/components/Header";
import { LocationSearchBar } from "@/components/LocationSearchBar";
import { MainWeatherSection } from "@/components/MainWeatherSection";
import { Sidebar } from "@/components/Sidebar";
import { WeekForecastSection } from "@/components/WeekForecastSection";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

      <Sidebar />

      <div className="content w-full px-0 lg:max-w-[950px] xl:max-w-[1180px] mx-auto">
        <Header />
        <main>
          <div className="block lg:hidden">
            <LocationSearchBar />
            <MainWeatherSection />
          </div>

          <WeekForecastSection />
          <DetailsChartTabs />
        </main>
      </div>
    </div>
  );
}
