import { FiSearch } from "react-icons/fi";

export function LocationSearchBar() {
  return (
    <section className="mt-8 lg:mt-0 p-0 static lg:fixed lg:w-[inherit] lg:max-w-[inherit] lg:bg-white lg:pb-4">
      <label className="w-full relative h-fit">
        <FiSearch className="w-5 h-5 absolute z-10 left-2 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search for places..."
          className="rounded-full pl-10 pr-4 py-2 z-20 bg-white w-full lg:bg-gray-300 focus:outline-blue-500"
        />
      </label>
    </section>
  );
}
