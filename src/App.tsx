//Questo è il componente React che rappresenta l'intera applicazione
import { useEffect, useState } from 'react';
import { getMovies } from './api/movies';
import './App.css'
import { MovieCards } from './components/MovieCard';
import { MovieType } from './types/movieTypes';
import { TvCard } from './components/TvCard';
import { TvTypes } from './types/tvTypes';
import { getTv } from './api/tv';
import { PersonType } from './types/peopleTypes';
import { getPeople } from './api/people';
import { People } from './components/PeopleCards';

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [people, setPeople] = useState<PersonType[]>([]);
  const [tvSeries, setTV] = useState<TvTypes[]>([]);

  // useEffect(parFunzione, arrayDipendenze)
  useEffect(() => {
    const fetchMovie = async () => {
      const movies = await getMovies();
      setMovies(movies);
    }
    fetchMovie();
  }, []);

  useEffect(() => {
    const fetchPerson = async () => {
      const people = await getPeople();
      setPeople(people);
    }
    fetchPerson();
  },[]);

  useEffect(() => {
    const fetchTv = async () => {
      const tvSeries = await getTv();
      setTV(tvSeries);
    }
    fetchTv();
  }, []);

  const firstThreeMovie = movies.slice(0, 3);
  const firstThreeTv = tvSeries.slice(0, 3);
  const firstThreePerson = people.slice(0, 3);

  return (
    <div>
      <h1>Movies</h1>
      <div className="box">
        {
          firstThreeMovie.map((movie) => {
            return <MovieCards key={movie.id} Movie={movie} />
          })
        }
      </div>

      <h1>Serie Tv</h1>
      <div className='box2'>
        {firstThreeTv.map((tv) => {
          return <TvCard key={tv.id} tv={tv} />
        })
        }
      </div>

      <div className='box3'>
        {firstThreePerson.map((person) => {
          return <People key={person.id} person={person} />
        })}
      </div>
    </div>
  )

}

export default App



