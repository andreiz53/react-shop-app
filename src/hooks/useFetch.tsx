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
        setIsLoading(false);
        setData(json);
      } catch (err) {
        console.log(err);
        setError('Could not fetch the data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
