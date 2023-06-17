import React from 'react';
import Image from "next/image";

import {ThumbnailProps} from "@/pages/components/thumbnail/thumbnail.props";
import {tmdbBaseUrl} from "@/helpers/constants";
import ReactStars from "react-stars";
import {useInfoStore} from "@/store";

function Thumbnail({movie, isBig}: ThumbnailProps) {
    const {setCurrentMovie, setModal} = useInfoStore()

    const handleCurrentMovie = () => {
        setCurrentMovie(movie)
        setModal(true)
    }

    return (
        <div onClick={handleCurrentMovie} className={`relative ${isBig ? 'md:min-w-[400px] md:h-[660px] min-w-[300px] h-[300px]' : 'md:h-[440px] md:min-w-[292px] h-[400px] min-w-[200px]'} cursor-pointer ease-out  md:hover:scale-125 transition duration-150`}>
            <Image
                src={`${tmdbBaseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                alt={movie?.title}
                className={'object-cover rounded-sm md:rounded'} fill />
            <div className={'absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40 h-full w-full'}/>
            <div className={'absolute bottom-4'}>
                <div className={'flex space-x-0 items-center'}>
                    <ReactStars count={10} value={movie?.vote_average} edit={false} size={18} color1={'#b3b3b3'} color2={'white'} className={'shadow_text'}/>
                    <p>({movie?.vote_count})</p>
                </div>
                <h2 className={'text-xl md:text-2xl -z-100 top-0 text-left shadow_text'}>{movie.title || movie.name }</h2>
            </div>
        </div>
    );
}

export default Thumbnail;
