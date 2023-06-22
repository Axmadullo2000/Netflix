import React, {useContext, useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

import {AuthContext} from "@/context/auth.context";

function Header() {
    const [ scroll, setScroll ] = useState(false)
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            }else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <header className={`flex justify-between ${scroll && 'bg-[#e10856]'} z-[9999] h-20`}>
            <div className={'flex space-x-2 items-center'}>
                <Image src={'./logo.svg'} alt={'logo'} width={56} height={56} className={'mx-4'}/>
                <ul className={'md:flex hidden'}>
                   <li className={'navLink'}>Главная</li>
                   <li className={'navLink'}>Фильмы</li>
                   <li className={'navLink'}>ТВ Передачи</li>
                   <li className={'navLink'}>Новые</li>
                    <li className={'navLink'}>Популярные</li>
                </ul>
            </div>
            <div className={'flex items-center space-x-4 mr-4' }>
                <Image src={'./search.svg'} alt={'search'} className={'h-6 w-6 cursor-pointer'} width={30} height={30}/>
                <p className={'md:block hidden'}>Kids</p>
                <Image src={'./notification.svg'} className={'h-6 w-6 cursor-pointer'} width={30} height={30} alt={'Notification'} />
                <Link href={'/account'}><Image src={'./user.svg'} alt={"User"} width={30} height={30} className={'h-6 w-6 cursor-pointer'}/></Link>
                <Image src={'./logout.svg'} width={'40'} height={'40'} alt={'logout'} className={'cursor-pointer'} onClick={logout}/>
            </div>
        </header>
    );
}

export default Header;
