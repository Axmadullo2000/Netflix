import React, {useEffect, useState} from 'react';
import MuiModal from '@mui/material/Modal'
import Image from "next/image";
import ReactPlayer from "react-player";

import {useInfoStore} from "@/store";
import * as process from "process";
import {Element} from "@/interfaces/app.interface";

function Modal() {
    const [trailer, setTrailer] = useState<string>('')
    const [muted, setMuted] = useState<boolean>(true)
    const [pause, setPause] = useState<boolean>(true)

    const {modal, setModal, currentMovie} = useInfoStore()
    const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string
    const api_key = process.env.NEXT_PUBLIC_API_KEY as string
    const api = `${base_url}/${currentMovie?.media_type === "tv" ? "tv" : 'movie'}/${currentMovie.id}/videos?api_key=${api_key}&language=ru-Ru`

    const handleClose = () => {
        setModal(false)
    }

    useEffect(() => {
        const fetchVideoData = async () => {
            const data = await fetch(api).then(res => res.json())
            if (data?.results) {
                const index = data.results.findIndex((item: Element) => item.type === 'Trailer')
                setTrailer(data.results[index]?.key)
            }
        }

        fetchVideoData()
    // eslint-disable-next-line
    }, [currentMovie])

    return (
        <MuiModal open={modal} onClose={handleClose} className={'fixed !top-7 right-0 z-50 mx-auto w-full max-w-5xl overflow-y-scroll scrollbar-hide rounded'}>
            <div className={'relative flex flex-col h-screen md:h-screen'}>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer}`}
                    width={'100%'} height={'100%'}
                    style={{position: 'absolute', top: 0, left: 0}}
                    muted={muted}
                    playing={pause}
                />

                <div className={'z-50 absolute md:bottom-60 md:bottom-50 flex'}>
                    <button className={'flex items-center bg-white rounded text-black px-10 py-1 text-2xl font-bold'} onClick={() => setPause(prev => !prev)}>
                        {pause ? (
                            <>
                                <Image src={'./play.svg'} alt={'player'} width={28} height={28} />
                                Play
                            </>
                        ) : (
                            <>
                                <Image src={'./pause.svg'} alt={'pause'} width={28} height={28}  />
                                Pause
                            </>
                        )}
                    </button>
                    <button className={'customButton px-2 py-2'}>
                        <Image src={'./plus.svg'} alt={'plus'} width={28} height={28} />
                    </button>

                    <button className={'customButton px-2 py-2'}>
                        <Image src={'./like.svg'} alt={'like'} width={28} height={28} />
                    </button>

                    <button className={'customButton px-2 py-2'} onClick={() => setMuted(prev => !prev)}>
                        {muted ? <Image src={'./mute.svg'} alt={'volume'} width={28} height={28} /> :
                            <Image src={'./volume.svg'} alt={'mute'}  width={28} height={28} />}
                    </button>
                </div>

                <div className={'z-50 absolute bg-black flex justify-center bottom-0 mt-4 flex-col px-5 w-full'}>
                    <div className={'flex items-center px-3 py-4'}>
                        <p className={'text-green-400 mx-0.5'}>{currentMovie?.vote_average * 10}% Match</p>
                        <p className={' mx-0.5'}>{currentMovie?.release_date}</p>
                        <p className={'border rounded px-0.5 py-0.5 mx-0.5'}>HD</p>
                    </div>
                    <div className={'flex px-3 py-4'}>
                        <p className={'w-5/6'} style={{}}>{currentMovie?.overview}</p>
                        <div className={'flex-col'}>
                            <div className={'flex-1 w-full'}>
                                <p>Original language:</p>
                                <p>{currentMovie?.original_language}</p>
                            </div>
                            <div className={'flex-col'}>
                                <p>Total votes:</p>
                                <p>{currentMovie?.vote_count}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={handleClose} className={'customButton absolute right-5 top-0 h-9 w-9 border-none bg-white z-90'}>
                    <Image src={'./close.svg'} alt={'close'} width={15} height={15} />
                </button>
            </div>
        </MuiModal>
    );
}

export default Modal;

