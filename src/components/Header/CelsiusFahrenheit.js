import * as ToggleGroup from "@radix-ui/react-toggle-group";

const toggleGroupItemClasses =
  "bg-white text-black rounded-full font-semibold text-[17px] h-10 w-10 data-[state=on]:bg-gray-900 data-[state=on]:text-white focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";

export function CelsiusFahrenheit() {
  return (
    <ToggleGroup.Root
      className="flex gap-2"
      type="single"
      defaultValue="c"
      aria-label="Text alignment"
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="c"
        aria-label="Celsius"
      >
        °C
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="f"
        aria-label="Fahrenheit"
      >
        °F
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
