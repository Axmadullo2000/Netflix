import React from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

function Cancel() {
    const router = useRouter()

    return (
        <div className={'px-4 py-2'}>
            <Image src={'./logo.svg'} width={56} height={56} alt={'logo'} className={'cursor-pointer object-contain'} />
            <div className={'h-[70vh] flex flex-col justify-center items-center'}>
                <Image src={'./cancel.svg'} alt={''} width={56} height={56} className={'border-red-500 rounded-lg border-2'} />

                <h2 className={'text-red-500 text-4xl mt-4'}>Произошла ошибка при покупке товара</h2>
                <button onClick={() => router.push('/')} className={'text-red-500 border-red-500 border-2 px-4 py-4 text-2xl rounded-lg mt-6'}>
                    Домой
                </button>
            </div>
        </div>
    );
}

export default Cancel;
