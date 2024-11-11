import { useState } from "react";
import { MovieType } from "../types/movieTypes";
type MovieCardProps = {
    Movie: MovieType
}


/**
 * MovieCard è un componente che deve ricevere tre dati:
 * -idMovie: number un numero che rappresenta l'id del film
 * -titleMovie: string il titolo del film
 * -description: string la descrizione del film
 * 
 * Le funzioni che rappresentano i componenti React in TypeScript ricevo un solo parametro, 
 * props, che è un oggetto che contiene tutte le proprietà passate al componente.
 */
 

export const MovieCards = ({ Movie }: MovieCardProps) => {

     // Se il valore della variabile deve essere visualizzato aggiornando la UI
    // è necessario usare una variabile di stato.
    // La varabile di stato è un array con due elementi e viene dichiarata con useState()
    const [clickCount, setClickCount] = useState(0);

    /*const handleClickCount = () => {
        // Una variabile di stato è 'immutabile', non può essere modificata direttamente 
        // con un'istruzione di assegnazione come ad esempio clickCount = clickCount + 1;
        // Per aggiornare il suo valore devo usare la funzione setClickCount (restituita da useState)
        // passando il nuovo valore come parametro.
        setClickCount(clickCount + 1); // setClickCount è asincrona
        console.log(`Click count: ${clickCount}`);
    }*/
    
    // Per convenzione usiamo il prefisso handle per le funzioni che gestiscono eventi
    const handleClick = (message: string) => {
        console.log(`Cliccato ${message}`);
        setClickCount(clickCount+1);
    }


    return (
        <div style={{ backgroundColor: 'red' }}>
            <h1> {Movie.title} </h1>
            <img src= {`https://image.tmdb.org/t/p/w500${Movie.backdrop_path}`}/>
            <p onClick={() => handleClick(Movie.title)}>{Movie.title} </p>
            <p>Numero di click: {clickCount}</p>
        </div>
    );
}