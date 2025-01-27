// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { CartProvider } from '@/context/CartContext';
import '@/styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
};

export default MyApp;
