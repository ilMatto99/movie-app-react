import { ResponseTrendingTv } from "../types/responseTypes";
import { BASE_URL } from "./config";



export const getTv = async () => {
  try {
   // Chiamo l'API
    const response = await fetch(BASE_URL);

    const data: ResponseTrendingTv = await response.json();
    console.log(JSON.stringify(data.results));
    return data.results;
    
  }
  catch (error) {
    console.error(error);
    return [];
  }
}