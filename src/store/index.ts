import {create} from 'zustand'
import {IMovies} from "@/interfaces/app.interface";

interface InfoData {
    modal: boolean,
    currentMovie: IMovies,
    setModal: (modal: boolean) => void,
    setCurrentMovie: (movies: IMovies) => void
}

export const useInfoStore = create<InfoData>()(set => ({
    modal: false,
    currentMovie: {} as IMovies,
    setModal: (modal) => set(state => ({...state, modal: modal})),
    setCurrentMovie: (currenMovie: IMovies) => set(state => ({...state, currentMovie: currenMovie}))
}))
