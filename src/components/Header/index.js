export function Header() {
  return (
    <header className="pt-8 lg:pt-4 xl:pt-8 mx-auto w-full flex items-center justify-between gap-2">
      <p className="bg-white rounded-xl p-2 w-fit text-sm">Tue, 5, September</p>

      <div className="flex gap-2">
        <button className="bg-gray-900 rounded-full text-white font-semibold text-[17px] h-10 w-10">
          °C
        </button>
        <button className="bg-white rounded-full text-black font-semibold text-[17px] h-10 w-10">
          °F
        </button>
      </div>
    </header>
  );
}
