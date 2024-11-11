import { TvTypes } from "../types/tvTypes";

type TvCardProps = {
    tv: TvTypes;
};
export const TvCard = ({ tv }: TvCardProps) => {
    return (
        <div style={{ backgroundColor: 'blue' }}>
            <h1>{tv.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} />
        </div>

    );
}