//modificare
import { ResponseTrendingPeople } from "../types/responseTypes";
import { BASE_URL } from "./config";



export const getPeople = async () => {
  try {
   // Chiamo l'API
    const response = await fetch(BASE_URL);

    const data: ResponseTrendingPeople = await response.json();
    console.log(JSON.stringify(data.results));
    return data.results;
    
  }
  catch (error) {
    console.error(error);
    return [];
  }
}