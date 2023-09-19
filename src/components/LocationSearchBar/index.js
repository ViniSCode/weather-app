import { useSearchLocation } from "@/hooks/useSearchLocation";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

export function LocationSearchBar() {
  const router = useRouter();

  const {
    queryData,
    setQueryData,
    search,
    setSearch,
    loading,
    setLoading,
    error,
    setError,
    isFocused,
    setIsFocused,
  } = useSearchLocation();

  const searchResultsRef = useRef(null);

  function handleBlur() {
    setTimeout(() => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(document.activeElement)
      ) {
        setIsFocused(false);
      }
    }, 100);
  }

  const container = {
    hidden: { opacity: 0, x: "-20px" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-8 lg:mt-0 p-0 lg:full lg:bg-white lg:pb-4 relative"
    >
      <label className="w-full relative h-fit">
        <FiSearch className="w-5 h-5 absolute z-10 left-2.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search for places..."
          onChange={(e) => setSearch(e.target.value)}
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
          className="placeholder:text-gray-600 text-black placeholder:font-medium font-medium rounded-full pl-10 pr-4 py-2 z-20 bg-white w-full lg:bg-gray-300 focus:outline-blue-500"
        />
      </label>

      {queryData && queryData.length > 0 && search.length > 0 && isFocused ? (
        <div
          ref={searchResultsRef}
          className="z-20 bg-white shadow shadow-black/10 p-4 absolute rounded-xl mt-2 w-full"
        >
          {queryData.map((location, index) => (
            <div
              onClick={() => {
                let cityName = `${location.name ? location.name : ""}, ${
                  location.state ? location.state + "," : ""
                } ${location.country ? location.country : ""}`;

                router.push(`/${cityName}`);
              }}
              key={index}
              className="hover:bg-blue-200 px-2 py-1 rounded cursor-pointer"
            >
              <p className="font-medium text-sm">{`${
                location.name ? location.name : ""
              }, ${location.state ? location.state + "," : ""} ${
                location.country ? location.country : ""
              }`}</p>
            </div>
          ))}
        </div>
      ) : (
        queryData.length === 0 &&
        error &&
        isFocused && (
          <div className="bg-white shadow shadow-black/10 p-4 absolute rounded-xl mt-2 w-full">
            <div className="px-2 py-1 rounded cursor-default">
              <p className="font-medium">Not found</p>
            </div>
          </div>
        )
      )}
    </motion.section>
  );
}
