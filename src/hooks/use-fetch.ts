import { useState, useEffect } from 'react';
import type { useFetchResponse, FetchOptions } from '@/types/hooks/use-fetch';

/**
 * Hook - facilitates requests and provides a basic control of the request made.
 * @param {string} url - path of endpoint/json.
 * @param {FetchOptions} options - options the endpoint/json.
 * @returns {useFetchResponse<T>} - Array[ data: (array | null), isLoading: boolean, error: string | null ].
 * @example
 * // Example of use:
 * const [data, isLoading, error] = useFetch<Service[]>(
 *  '/json/servicesList.json',
 * );
 */
const useFetch = <T>(
  url: string,
  options: FetchOptions = {},
): useFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Error al realizar la petición');

        const responseData = await response.json();
        setData(responseData);
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error.message);
        else setError('Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, isLoading, error];
};

export default useFetch;
