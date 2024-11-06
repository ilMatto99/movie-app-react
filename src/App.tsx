import {MovieCards} from './components/MovieCard'
import './App.css'
import { MovieType } from './type/movieTypes'

// creazione di un array di elementi
function App() { 
  const movieMock: MovieType[] = [
    {
      id: 1,
      title: "Il Signore degli Anelli"
    },
    {
      id: 2,
      title: "Harry Potter",
    },
    {
      id: 3,
      title: "The Avengers"
    }
  ]
  

  return (
    <div>

      {
        movieMock.map((movie) => {
          return <MovieCards idMovie = {movie.id} titleMovie = {movie.title} />
        })
      }
      
    </div>

  )
}


export default App
