import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

function Header() {
    const [ scroll, setScroll ] = useState(false)

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
        <header className={`flex justify-between ${scroll && 'bg-[#e10856]'}`}>
            <div className={'flex space-x-2 items-center'}>
                <Image src={'./logo.svg'} alt={'logo'} width={56} height={56} className={'mx-4'}/>
                <ul className={'md:flex hidden'}>
                   <li className={'navLink'}>Home</li>
                   <li className={'navLink'}>About</li>
                   <li className={'navLink'}>Settings</li>
                   <li className={'navLink'}>Contacts</li>
                </ul>
            </div>
            <div className={'flex items-center space-x-4 mr-5' }>
                <Image src={'./search.svg'} alt={'search'} width={30} height={30}/>
                <p className={'md:block hidden'}>Kids</p>
                <Image src={'./notification.svg'} width={30} height={30} alt={'Notification'} />
                <Link href={'/account'}><Image src={'./user.svg'} alt={"User"} width={30} height={30}/></Link>
            </div>
        </header>
    );
}

export default Header;
