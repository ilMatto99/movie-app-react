import { MovieCards } from './components/MovieCard'
import './App.css'
import { getMovies } from './api/movies'

// creazione di un array di elementi
function App() {
  const movieMock = getMovies();
  console.log("Sono nelcomponente App");
  return (
    <div>
      <h1>Questo è il componente React che rappresenta l'intera applicazione</h1>
      {
        movieMock.map((Movie) => {
          return <MovieCards key={Movie.id} Movie={Movie} />
        })
      }

    </div>
  )
}



export default App
