import React, {useRef, useState} from 'react';
import Image from "next/image";

import {RowProps} from "@/pages/components/row/row.props";
import Thumbnail from "@/pages/components/thumbnail";


function Row({title, movies, isBig}: RowProps) {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [moved, setMoved] = useState<boolean>(false)

    const handleClick = (direction: "left" | "right") => {
        setMoved(true)

        if (carouselRef.current) {
            const { clientWidth, scrollLeft } = carouselRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            carouselRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})

            if (direction === 'left' && scrollTo === 0) {
                setMoved(false)
            }
        }
    }

    return (
        <div className={'space-y-1 md:space-y-2 mt-5 mb-5 row_top'}>
            <h2 className={'shadow_text w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200'}>{title}</h2>

            {/* Carousel */}

            <div className={'group relative md:ml-2'}>
                {moved && <Image onClick={() => handleClick("left")} className={'absolute top-0 left-2 bottom-0 m-auto h-9 w-6 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125 z-50'} src={'./left_direction_carousel.svg'} alt={'left'} width={40} height={40} />}

                <div ref={carouselRef} className={`flex overflow-hidden scrollbar-hide items-center overflow-x-scroll ${isBig ? 'space-x-0 md:space-x-0.5' : 'space-x-0.5 md:space-x-2.5'}`}>
                    {movies.map(item => (
                        <Thumbnail key={item.id} movie={item} isBig={isBig}/>
                    ))}
                </div>
                <Image onClick={() => handleClick("right")} className={'rotate-180 absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-6 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125'} src={'./left_direction_carousel.svg'} alt={'right'} width={40} height={40} />
            </div>
        </div>
    )
}

export default Row;
