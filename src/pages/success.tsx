import React from 'react';
import Image from "next/image";
import useTextNavigation from "@mui/base/utils/useTextNavigation";
import {useRouter} from "next/router";

function Success() {
    const router = useRouter()

    return (
        <div className={'px-4 py-2'}>
            <Image src={'./logo.svg'} width={56} height={56} alt={'logo'} className={'cursor-pointer object-contain'} />
            <div className={'h-[70vh] flex flex-col justify-center items-center'}>
                <Image src={'./checked.svg'} alt={''} width={56} height={56} className={'border-green-500 rounded-lg border-2'} />

                <h2 className={'text-slate-300 text-4xl mt-4'}>Подписка выполнена</h2>
                <button onClick={() => router.push('/')} className={'text-green-400 border-green-500 border-2 px-4 py-4 rounded-lg mt-6'}>
                    Домой
                </button>
            </div>
        </div>
    )
}

export default Success;
