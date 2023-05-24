import React from 'react';
import Image from "next/image";

import {ThumbnailProps} from "@/pages/components/thumbnail/thumbnail.props";
import {tmdbBaseUrl} from "@/helpers/constants";

function Thumbnail({movie}: ThumbnailProps) {

    return (
        <div className={'relative h-[330px] min-w-[200px] cursor-pointer ease-out md:h-[440px] md:min-w-[292px] md:hover:scale-125 transition duration-150'}>
            <Image
                src={`${tmdbBaseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                alt={movie?.title}
                className={'object-cover rounded-sm md:rounded'} fill />
        </div>
    );
}

export default Thumbnail;
