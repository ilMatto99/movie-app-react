import { PersonType } from "../types/peopleTypes";

type PeopleProps = {
    person: PersonType,
};

export const People = ({ person }: PeopleProps) => {
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>{person.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} />
        </div>
    );
}