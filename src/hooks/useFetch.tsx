import { useState, useEffect } from "react";

type UseFetchReturnType = {
  data:
    | [
        {
          id: number;
          title: string;
          body: string;
          userId: number;
        }
      ]
    | null;
  loading: boolean;
  error: Error | null;
};

export const useFetch = (url: string, options: {}): UseFetchReturnType => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof RangeError) {
          setError(error);
        }

        setLoading(false);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, data };
};
