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
  };
}
