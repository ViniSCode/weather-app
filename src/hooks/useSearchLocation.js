import { SearchLocationContext } from "@/context/SearchLocationContext";
import { useContext } from "react";

export function useSearchLocation() {
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
    location,
    setLocation,
    getUserLocation,
    getUserLocationByLatLon,
    units,
    setUnits,
  } = useContext(SearchLocationContext);

  return {
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
    units,
    setUnits,
  };
}
