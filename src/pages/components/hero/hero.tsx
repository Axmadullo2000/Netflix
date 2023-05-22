import React, {useEffect, useState} from 'react';
import {HeroProps} from "@/pages/components/hero/hero.interface";
import {IMovies} from "@/interfaces/app.interface";
import Image from "next/image";
import {tmdbBaseUrl} from "@/helpers/constants";

function Hero({trending}: HeroProps): JSX.Element {
    const [movie, setMovie] = useState<IMovies>({} as IMovies)

    useEffect(() => {
        const randomMovie = trending[Math.floor(Math.random() * trending.length)]
        setMovie(randomMovie)
    }, [trending])

    return (
        <div className={'flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end'}>
            <div className={'absolute -z-10 top-0 left-0 h-[95vh] w-full'}>
                 <Image
                    src={`${tmdbBaseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    alt={movie?.title}
                    className={'object-cover'} fill />
            </div>
            <div className={''}>
                <h1 className={'text-white text-2xl font-bold md:text-4xl lg:text-7xl mb-2'}>{movie.title}</h1>
                <p className={'max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-xl drop-shadow-lg shadow-blue-600'}>{movie?.overview}</p>
            </div>
            <div>
                <button className={'flex justify-center items-center space-x-2 border-red-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  border-solid border-2 w-[200px] h-[56px] rounded-full'}>
                <Image src={'./play.svg'} alt={'play'} width={40} height={40} className={'w-6 h-6'} /> Watch now</button>
            </div>
        </div>
    );
}

export default Hero;
