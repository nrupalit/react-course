import { DEFAULT_URL } from "./constants/common";

export default async function fetchPlaces() {
    const response = await fetch(`${DEFAULT_URL}/places`);
    console.log("response", response.ok);
    
    if(!response.ok) {
        throw new Error('Error while fetching data')
    }
    const resData = await response?.json()
    return resData.places;
}