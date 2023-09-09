import { DetailCards } from "@/components/DetailCards";
import { Header } from "@/components/Header";
import { LocationSearchBar } from "@/components/LocationSearchBar";
import { MainWeatherSection } from "@/components/MainWeatherSection";
import { Sidebar } from "@/components/Sidebar";
import { WeekForecastSection } from "@/components/WeekForecastSection";

export default function Home() {
  return (
    <div className="px-5 min-h-screen max-w-[404px] md:max-w-[632px] mx-auto lg:max-w-full lg:grid lg:pl-0 pr-5 lg:grid-cols-[20rem_auto] gap-10 xl:grid-cols-[26rem_auto]">
      <Sidebar />

      <div className="content w-full px-0 lg:max-w-[750px] xl:max-w-[1180px] mx-auto">
        <Header />

        <main className="pb-20">
          <div className="block lg:hidden">
            <LocationSearchBar />

            <MainWeatherSection />
          </div>

          <WeekForecastSection />

          <section className="mt-10 xl:mt-16">
            <div className="flex gap-5">
              <button className="text-lg xl:text-[22px] font-semibold underline">
                Details
              </button>
              <button className="text-lg xl:text-[22px] font-semibold text-gray-500">
                Week Chart
              </button>
            </div>

            <DetailCards />
          </section>
        </main>
      </div>
    </div>
  );
}
