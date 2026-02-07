import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useRouter } from "next/router";
import { useState } from "react";

const toggleGroupItemClasses =
  "bg-white text-black rounded-full font-semibold text-[17px] h-10 w-10 data-[state=on]:bg-gray-900 data-[state=on]:text-white focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-blue-500";

export function CelsiusFahrenheit({ apiKey }) {
  const router = useRouter();
  const [value, setValue] = useState(
    router.query.units ? router.query.units : "metric"
  );
  const [units, setUnits] = useState(
    router.query.units ? router.query.units : "metric"
  );

  return (
    <ToggleGroup.Root
      className="flex gap-2"
      type="single"
      defaultValue="c"
      aria-label="Text alignment"
      value={value}
      onValueChange={(value) => {
        if (value) {
          setValue(value);
          setUnits(value === "Celsius" ? "metric" : "imperial");

          if (router.pathname === "/") {
            router.push(`New York, US?units=${value}`);
            return;
          }

          router.replace({
            pathname: router.pathname,
            query: { ...router.query, units: value },
          });
        }
      }}
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="metric"
        aria-label="metric"
      >
        °C
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="imperial"
        aria-label="imperial"
      >
        °F
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
