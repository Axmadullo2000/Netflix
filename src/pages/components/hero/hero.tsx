import React, {useEffect, useState} from 'react';
import ReactStars from 'react-stars'
import Image from "next/image";

import {HeroProps} from "@/pages/components/hero/hero.interface";
import {IMovies} from "@/interfaces/app.interface";
import {tmdbBaseUrl} from "@/helpers/constants";
import {useInfoStore} from "@/store";


function Hero({trending}: HeroProps) {
    const [movie, setMovie] = useState<IMovies>({} as IMovies)
    const {setModal, setCurrentMovie, currentMovie} = useInfoStore()

    useEffect(() => {
        const randomMovie = trending[Math.floor(Math.random() * trending.length)]
        setMovie(randomMovie)
    }, [trending])

    const handleCurrentMovie = () => {
        setModal(true)
        setCurrentMovie(movie)
    }

    return (
        <div className={'flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end'}>
            <div className={'capitalize rounded bg-[#1D1D1D] w-[111px] text-center text-white p-[4px 8px]'}>
                {movie?.media_type}
            </div>
            <div className={'flex space-x-0 items-center'}>
                <ReactStars count={10} value={movie?.vote_average} edit={false} size={18} color1={'#b3b3b3'} color2={'white'}/>
                <p>({movie?.vote_count})</p>
            </div>
            <div className={'absolute -z-10 top-0 left-0 h-[95vh] w-full'}>
                 <Image
                    src={`${tmdbBaseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    alt={movie?.title}
                    className={'object-cover'} fill />
            </div>
            <div className={''}>
                <h1 className={'text-white text-2xl font-bold md:text-4xl lg:text-7xl mb-2 shadow_text'}>{movie.title}</h1>
                <div className={'max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-xl shadow_text'}>
                    {movie?.overview?.slice(0, 100)}...</div>
            </div>
            <div className={'watchNow'}>
                <button onClick={handleCurrentMovie} className={'flex justify-center items-center space-x-2 border-red-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  border-solid border-2 w-[150px] h-[56px] rounded-full md:w-[200px] '}>
                <Image src={'./white_play.svg'} alt={'play'} width={30} height={30} className={'w-6 h-6'} /> Watch now</button>
            </div>
        </div>
    );
}

export default Hero;
