import { LocationSearchBar } from "../LocationSearchBar";
import { MainWeatherSection } from "../MainWeatherSection";
import { SidebarInfo } from "./SidebarInfo";

export function Sidebar() {
  return (
    <aside className="hidden pt-0 px-0 lg:pt-4 xl:pt-8 lg:px-5 lg:block bg-white">
      <div
        className="fixed w-[17rem] xl:w-[23rem]"
        style={{ overflowY: "auto", maxHeight: "calc(100vh)" }}
      >
        <LocationSearchBar />
        <MainWeatherSection />
        <div className="mt-6 mb-6 h-[2px] bg-gray-300"></div>
        <div className="w-full mb-10">
          <SidebarInfo />
        </div>
      </div>
    </aside>
  );
}
