import { LoadingPage } from "@/components/Loading/LoadingPage";
import { SearchLocationContextProvider } from "@/context/SearchLocationContext";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps, router }) {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setIsPageLoading(true);
    });

    router.events.on("routeChangeComplete", (url) => {
      setIsPageLoading(false);
    });
  }, []);

  return (
    <SearchLocationContextProvider apiKey={pageProps.apiKey}>
      {isPageLoading && <LoadingPage />}
      <Component {...pageProps} />
    </SearchLocationContextProvider>
  );
}

export async function getServerSideProps() {
  const url =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/weather";
  try {
    const apiResponse = await fetch(url);
    const { apiKey } = await apiResponse.json();

    return {
      props: {
        apiKey: apiKey,
      },
    };
  } catch (apiError) {
    console.error("Failed to fetch API key:", apiError);

    return {
      props: {
        apiKey: "",
      },
    };
  }
}
