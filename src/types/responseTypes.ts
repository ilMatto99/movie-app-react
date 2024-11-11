import { MovieType } from "./movieTypes";
import { PersonType } from "./peopleTypes";
import { TvTypes } from "./tvTypes";

export type ResponseTrendingType={
    page:number,
    results:MovieType[],
    total_pages:number,
    total_results:number,
};

export type ResponseTrendingPeople={
    page:number,
    results:PersonType[],
    total_pages:number,
    total_results:number,
};

export type ResponseTrendingTv={
    page:number,
    results:TvTypes[],
    total_pages:number,
    total_results:number,
};