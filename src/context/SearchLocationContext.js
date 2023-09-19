import { useDebounce } from "@/hooks/useDebounce";

const { createContext, useState, useEffect } = require("react");

export const SearchLocationContext = createContext({});

export function SearchLocationContextProvider(props) {
  const [queryData, setQueryData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearch = useDebounce(search, 400);

  async function fetchLocationWeatherData(value) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=${10}&appid=${
          props.apiKey
        }`
      );

      if (!response.ok) {
        throw new Error("Something went wrong while fetching weather");
      }

      const data = await response.json();

      if (data.length === 0) {
        throw new Error("Not Found");
      }
      setQueryData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setQueryData([]);
      setLoading(false);
      console.error("Failed to fetch weather data:", error);
    }
  }

  useEffect(() => {
    if (debouncedSearch) {
      fetchLocationWeatherData(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <SearchLocationContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </SearchLocationContext.Provider>
  );
}
