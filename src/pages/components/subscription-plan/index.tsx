import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {useAuth} from "@/pages/hooks/useAuth";

function SubscriptionPlan() {
    const {logout} = useAuth()

    return (
        <div>
            <div className={'flex justify-between px-4 py-3 shadow-red-600 shadow-xl border-b-red-200 border-b-2'}>
                <Link href={'/'}><Image src={'./logo.svg'} alt={'logo'} width={56} height={56} /></Link>
                <button onClick={logout} className={'px-2 py-2 hover:text-red-300'}>Logout</button>
            </div>
            <h1 className={'text-3xl text-center mt-5'}>Выберите подходящий план</h1>
            <div className={'mb-10 pl-3'}>
                <div className={'flex items-center'}><Image src={'./check.svg'} alt={''} width={28} height={28} />Неограниченный просмотр. Без рекламы.</div>
                <div className={'flex items-center'}><Image src={'./check.svg'} alt={''} width={28} height={28} />Персональные рекомендации.</div>
                <div className={'flex items-center'}><Image src={'./check.svg'} alt={''} width={28} height={28} />Возможность перейти на другой план или отменить подписку в любое время.</div>
            </div>
            <div className={'flex justify-center flex-wrap  md:flex-row flex-col'}>
                <div className={'shadow-2xl border-solid border-red-400 border-2 p-6 w-3/4 md:w-1/4 my-2 mx-auto hover:scale-105 transition duration-600 cursor-pointer'}>
                    <h2>Базовый</h2>
                    <p className={'uppercase'}>$7.99 каждый месяц</p>
                    <p>Хорошее качество</p>
                    <p>Разрешение: 720p</p>
                    <div className={'flex items-center'}>
                        <p>Просмотр на телевизоре, компьютере, телефоне и планшете</p>
                        <Image src={'./check.svg'} alt={''} width={28} height={28} />
                    </div>
                    <button className={'px-2 py-3 w-full border-red-500 border-2 my-2 hover:text-slate-100 hover:bg-red-500 hover:border-white transition duration-400 ease-in'}>Купить</button>
                </div>
                <div className={'shadow-2xl border-solid border-red-400 border-2 p-6 w-3/4 md:w-1/3 my-2 mx-auto hover:scale-105 transition duration-600 cursor-pointer'}>
                    <h2>Базовый</h2>
                    <p className={'uppercase'}>$9.99 каждый месяц</p>
                    <p>Лучше</p>
                    <p>Разрешение: 1080p</p>
                    <div className={'flex items-center'}>
                        <p>Просмотр на телевизоре, компьютере, телефоне и планшете</p>
                        <Image src={'./check.svg'} alt={''} width={28} height={28} />
                    </div>
                    <button className={'px-2 py-3 w-full border-red-500 border-2 my-2 hover:text-slate-100 hover:bg-red-500 hover:border-white'}>Купить</button>
                </div>
                <div className={'shadow-2xl border-solid border-red-400 border-2 p-6 w-3/4 md:w-1/4 my-2 mx-auto hover:scale-105 transition duration-600 cursor-pointer'}>
                    <h2>Базовый</h2>
                    <p className={'uppercase'}>$11.99 каждый месяц</p>
                    <p>Лучшее</p>
                    <p>4K+HDR</p>
                    <div className={'flex items-center'}>
                        <p>Просмотр на телевизоре, компьютере, телефоне и планшете</p>
                        <Image src={'./check.svg'} alt={''} width={28} height={28} />
                    </div>
                    <button className={'px-2 py-3 w-full border-red-500 border-2 my-2 hover:text-slate-100 hover:bg-red-500 hover:border-white transition duration-400 ease-in'}>Купить</button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionPlan;
