import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Loading } from "../Loading";
import { DetailCardsSection } from "./DetailCardsSection";

const DynamicChart = dynamic(() => import("../Chart/index"), {
  ssr: false,
  loading: () => <Loading />,
});

export function DetailsChartTabs() {
  const container = {
    hidden: { opacity: 0, x: "-20px" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <Tabs.Root
      className="mt-10 xl:mt-16 flex flex-col w-full"
      defaultValue="tab1"
    >
      <Tabs.List className="flex gap-4" aria-label="Manage your account">
        <Tabs.Trigger
          className="data-[state=active]:cursor-default focus-visible:p-1 data-[state=active]:focus-visible:relative text-lg xl:text-[22px] font-semibold flex items-center justify-center leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-black  data-[state=active]:text-black data-[state=active]:underline outline-none cursor-pointer focus-visible:outline-blue-500"
          value="tab1"
        >
          <motion.p initial="hidden" animate="visible" variants={container}>
            Details
          </motion.p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="data-[state=active]:cursor-default focus-visible:p-1 data-[state=active]:focus-visible:relative text-lg xl:text-[22px] font-semibold flex items-center justify-center leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-black  data-[state=active]:text-black data-[state=active]:underline outline-none cursor-pointer focus-visible:outline-blue-500"
          value="tab2"
        >
          <motion.p initial="hidden" animate="visible" variants={container}>
            Week Chart
          </motion.p>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <DetailCardsSection />
      </Tabs.Content>
      <Tabs.Content className="mt-8" value="tab2">
        <DynamicChart />
      </Tabs.Content>
    </Tabs.Root>
  );
}

<div className="flex gap-5">
  <button className="text-lg xl:text-[22px] font-semibold text-gray-500">
    Week Chart
  </button>
</div>;
