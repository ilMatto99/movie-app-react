import { MovieType } from "../types/movieTypes"
// Inserire in questa funzione la chiamata fetch per recuperare i dati dal server
export const getMovies = () => { 
    const movieMock: MovieType[] = [
    {
      id: 1,
      title: "Il Signore degli Anelli",
      description:"Un film di Peter Jackson "
    },
    {
      id: 2,
      title: "Harry Potter",
      description: "prova"
    },
    {
      id: 3,
      title: "The Avengers",
      description: "Un film di Joss Whedon"
    }
  ]
  
console.log("Sono nella funzione getMovies");
  return movieMock;
}