import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import Cart from './Cart';
import "@/styles/Header.css";
import { useCart } from '../context/CartContext';

const Header = () => {
    const router = useRouter();
    const { cart, removeFromCart, updateQuantity } = useCart();

    return (
        <>
            <header className="header">
                <a href="" className="logo">
                    <Image src="/images/logo.svg" alt="Logo" className='header__logo' width={48} height={48} />
                </a>

                <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
            </header>
        </>
    );
};

export default Header;
