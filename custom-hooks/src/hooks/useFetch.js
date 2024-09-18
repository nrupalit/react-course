import { useEffect, useState } from "react";

export function useFetch(fetchFn, intialValue) {
    const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(intialValue);
    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setFetchedData(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch user places.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]); 

      return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
      }
}