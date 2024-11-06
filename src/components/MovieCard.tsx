type MovieCardProps = {
    idMovie: number,
    titleMovie: string,
}


/**
 * Movie Card è un componente che deve ricevere dei dati:
 * - idMovie: è un numero che rappresenta l'id el film
 * - titleMovie: una stringa che rappresenta un titolo del film
 * 
 * Le funzioni che rappresentano i componenti react in typescript    
 * 
 */


export const MovieCards = (props: MovieCardProps) => {
   
    return ( 
        <div style = {{backgroundColor:'red'}}> 
            <h1> {props.idMovie} </h1>
            <p> {props.titleMovie} </p>
        </div>
    );
}