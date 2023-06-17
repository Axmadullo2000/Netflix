import {DateSchema} from "yup";

export interface IMovies {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    name:              string,
    title:             string;
    original_language: string;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    genre_ids:         number[];
    popularity:        number;
    release_date:      string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}


export interface Element {
    type: "Trailer" | "Clip" | "Opening Credits" | "Behind the Scenes"
    key: string
}
