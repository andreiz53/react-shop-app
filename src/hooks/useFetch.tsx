import { useEffect, useState } from 'react';

export const useFetch = function (url: string) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setError('Could not fetch the data');
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
