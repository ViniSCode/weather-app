import { useDebounce } from "@/hooks/useDebounce";
import { removeDuplicateLocations } from "@/utils/weather";

const { createContext, useState, useEffect } = require("react");

export const SearchLocationContext = createContext({});

export function SearchLocationContextProvider(props) {
  const [queryData, setQueryData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [location, setLocation] = useState(null);
  const debouncedSearch = useDebounce(search, 400, setLoading);

  let currentUserLocation;

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

      const formattedData = removeDuplicateLocations(data);
      setQueryData(formattedData);
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

  function getUserLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  async function getUserLocationByLatLon(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${10}&appid=${
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

      return data;
    } catch (error) {
      setError(true);
      console.error("Failed to fetch weather data:", error);
    }
  }

  useEffect(() => {
    if (location && location.lat && location.lon) {
      const fetchLocation = async () => {
        try {
          const userLocation = await getUserLocationByLatLon(
            location.lat,
            location.lon
          );

          currentUserLocation = `${
            userLocation[0].name && userLocation[0].name + ","
          } ${userLocation[0].state && userLocation[0].state + ","} ${
            userLocation[0].country && userLocation[0].country
          }`;

          setSearch(currentUserLocation);
        } catch (error) {
          console.error("Error fetching user location:", error);
        }
      };

      fetchLocation();
    }
  }, [location]);

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
        location,
        setLocation,
        getUserLocation,
        getUserLocationByLatLon,
      }}
    >
      {props.children}
    </SearchLocationContext.Provider>
  );
}
