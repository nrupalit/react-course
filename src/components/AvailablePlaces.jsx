import { useEffect, useState } from 'react';
import fetchPlaces from '../https.js';
import Error from './Error.jsx';
import Places from './Places.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvilablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  useEffect(() => {
    // fetch(`${DEFAULT_URL}/places`)
    //   .then(res => res.json())
    //   .then(resData => {
    //     setAvilablePlaces(resData.places);
    //     setIsLoading(false)
    //   })

    async function fetchPlacesData() {
      try {
        const places = await fetchPlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
          setAvilablePlaces(sortPlaces)
          setIsLoading(false)
      })
      } catch (error) {
        setError({message: error.message || "Could fetch"})
        setIsLoading(false);
      }
    }
    fetchPlacesData();
  }, []);

  if (error) {
    return <Error title="Network error:" message={error.message} />
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
