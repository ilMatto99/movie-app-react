import { useState } from "react";
import { MovieType } from "../types/movieTypes";
type MovieCardProps = {
    Movie: MovieType
}


/**
 * Movie Card è un componente che deve ricevere dei dati:
 * - idMovie: è un numero che rappresenta l'id el film
 * - titleMovie: una stringa che rappresenta un titolo del film
 * 
 * Le funzioni che rappresentano i componenti react in typescript    
 * 
 */

/* 1) Modificare un movie type in modo che possa contenree un movi di omdb
   2) implementare getMovies in modo che faccia una chiamta fetch a OMDB API
*/
export const MovieCards = ({ Movie }: MovieCardProps) => {
    // const {idMovie, titleMovie} = props;
    const [clickCount, setClickCount] = useState(0);

    const handleClickCount = () => {

        setClickCount(clickCount + 1); // setClickCount è asincrona
        console.log(`Click count: ${clickCount}`);
    }

    const handleClick = (message: string) => {
        console.log(`Cliccato ${message}`);
    }


    return (
        <div style={{ backgroundColor: 'red' }}>
            <h1> {Movie.id} </h1>
            <p onClick={() => handleClick(Movie.title)}>{Movie.title} </p>
            <p onClick={() => handleClick(Movie.description)}>{Movie.description} </p>
            <p>Numero di click: {clickCount}</p>
        </div>
    );
}