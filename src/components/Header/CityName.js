import * as Tooltip from "@radix-ui/react-tooltip";

export function CityName() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <p className="block bg-white lg:bg-gray-900 lg:text-white rounded-xl p-2 w-fit max-w-[130px] text-sm truncate">
            São Paulo, BR
          </p>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-black select-none rounded-xl bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            São Paulo, SP, Brasil
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
