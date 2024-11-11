import { ResponseTrendingType } from "../types/responseTypes";
import { BASE_URL } from "./config";

// Inserire in questa funzione la chiamata fetch per recuperare i dati dal server

/*
1) Modificare MovieType in modo che possa contenere un movie di TMDB API corretto
2) Implementare la funzione getMovies in modo che faccia na chiamata fetch a API
*/ 

export const getMovies = async () => {
  try {
   // Chiamo l'API
    const response = await fetch(BASE_URL);

    const data: ResponseTrendingType = await response.json();
    console.log(JSON.stringify(data.results));
    return data.results;
    
  }
  catch (error) {
    console.error(error);
    return [];
  }
}