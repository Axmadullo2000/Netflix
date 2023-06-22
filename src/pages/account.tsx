import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {MembershipPlan} from "./components";

function Account() {
    return (

        <>
            <Head>
                <title>Account</title>
                <meta name="description" content="Account" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div>
                <header className='flex justify-between z-[9999] h-20'>
                    <div className={'flex space-x-2 items-center'}>
                        <Link href={'/'} >
                            <Image src={'./logo.svg'} alt={'logo'} width={56} height={56} className={'mx-4'}/>
                        </Link>
                    </div>
                    <div className={'flex items-center space-x-4 mr-4' }>
                        <Link href={'/account'}><Image src={'./user.svg'} alt={"User"} width={30} height={30} className={'h-6 w-6 cursor-pointer'}/></Link>
                    </div>
                </header>

                <div className={'max-w-6xl mx-auto px-10 gap-4'}>
                    <div className={'flex items-center flex-row mb-5'}>
                        <h1 className={'text-3xl'}>Account</h1>
                        <Image src={'./subscribe.svg'} className={''} alt={'subscribe'} width={'40'} height={'40'} />
                        <p className={'text-slate-300'}>Member since 15 February, 2023</p>
                    </div>
                    <MembershipPlan />
                    <div className={'flex justify-between border-2 border-red-500 px-4 py-4 mb-4 mt-4'}>
                        <p className={'text-slate-100 opacity-50'}>Plan Details</p>
                        <p className={'text-white'}>Premium</p>
                        <button className={'text-blue-800 hover:text-blue-500'}>Change Plan</button>
                    </div>
                    <div className={'flex justify-between border-2 border-red-500 px-4 py-4'}>
                        <p className={'text-slate-100 opacity-50'}>Settings</p>
                        <button className={'text-blue-800 hover:text-blue-500'}>Sign Out of all devices</button>
                        <p className={'text-white'}></p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Account;
