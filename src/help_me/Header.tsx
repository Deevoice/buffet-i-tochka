import React from 'react';
import Image from "next/image";
// import logo from '@/public/images/logo.svg';
import { useRouter } from 'next/router';
import Cart from './Cart';
import "@/styles/Header.css";
// import LockPersonIcon from '@mui/icons-material/LockPerson';
// import Settings from './settings';


const Header = () => {
    const router = useRouter();
    // const isUserPage = ['/lk', '/settings'].includes(router.pathname);

    return (
        <>
            <header className="header">
                {/* style="margin: 0 2vw; display: flex; align-items: center; justify-content: space-between; width: 100%;" */}


                <a href="" className="logo">
                    <Image src="/images/logo.svg" alt="Logo" className='header__logo' width={48} height={48} />
                </a>

                <Cart />

            </header>
        </>
    );
};

export default Header;