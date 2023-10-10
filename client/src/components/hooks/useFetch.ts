// hooks/useFetch.ts
import { useState, useEffect } from "react";

interface FetchResponse<T> {
  data: T | null;
  isFetching: boolean;
}

const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setIsFetching(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsFetching(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isFetching };
};

export default useFetch;
