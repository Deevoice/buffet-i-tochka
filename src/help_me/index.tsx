import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/home.css";
import React from 'react';
import Cart from '../components/Cart';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const IndexPage: React.FC = () => {
    const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

    const products = [
        { id: 1, name: 'Товар 1', price: 100, image: '/images/product1.jpg' },
        { id: 2, name: 'Товар 2', price: 200, image: '/images/product2.jpg' },
        { id: 3, name: 'Товар 3', price: 200, image: '/images/product2.jpg' },
        { id: 4, name: 'Товар 4', price: 200, image: '/images/product2.jpg' },
        { id: 5, name: 'Товар 5', price: 200, image: '/images/product2.jpg' },
        { id: 6, name: 'Товар 6', price: 200, image: '/images/product2.jpg' },
        { id: 7, name: 'Товар 7', price: 200, image: '/images/product2.jpg' },
        { id: 8, name: 'Товар 8', price: 200, image: '/images/product2.jpg' },
        { id: 9, name: 'Товар 9', price: 200, image: '/images/product2.jpg' },
        { id: 10, name: 'Товар 10', price: 200, image: '/images/product2.jpg' },

        // Добавьте больше товаров
    ];

    return (

        <MainLayout>
            <main className="main">
                <div className="main-page">
                    <div className="main-page__logo">
                        <Image src="/images/main_img.jpg" alt="Буфет - и точка!" layout="fill" objectFit="contain"  className="main-page__logo-img"/>
                    </div>
                    <h1 className="main-page__title">БУФЕТ – И ТОЧКА!</h1>
                    <p className="main-page__lead">Оперативно и вкусно</p>
                </div>
                <div className="container">

                    <div className="title">
                        {/* <img src="../static/img/location.svg" alt="" className="title__ico"> */}
                        <h2>Приходи к нам!</h2>
                    </div>

                    <div className="location">
                        <div className="location-block">
                            <div>
                                <h5 className="location-block__title">Акции города</h5>
                                <p className="location-block__text">Москва</p>
                            </div>

                            <a href="https://yandex.ru/maps/-/CDqzNM1Y" className="location-block__link">Адрес</a>
                        </div>

                        <div className="provocation">
                            <h5 className="provocation__title"><span>Не жди в очереди –&nbsp;</span>закажи на сайте и получи заказ за прилавком!</h5>
                            {/* <img src="../static/img/provo.png" alt="" className="provocation__img"> */}
                        </div>
                    </div>

                    <div className="title">
                        <h5>Акции</h5>
                        <h2>Наши акции</h2>
                    </div>

                    <div className="stocks">
                        <div className="stock-card">
                            <div className="stock-desc">
                                <h3 className="stock-desc__title"></h3>
                                <p className="stock-desc__text">Ждем тебя!</p>
                                <p className="stock-desc__duration">Действует до 28.12.2023 г.</p>
                            </div>
                            {/* <img src="../static/img/latte.png" alt="" className="stock-card__img"> */}
                        </div>

                        <div className="stock-card">
                            <div className="stock-desc">
                                <h3 className="stock-desc__title">Латте всего за 89 ₽</h3>
                                <p className="stock-desc__text">Ждем тебя!</p>
                                <p className="stock-desc__duration">Действует до 28.12.2023 г.</p>
                            </div>
                            {/* <img src="../static/img/latte.png" alt="" className="stock-card__img"> */}
                        </div>

                        <div className="stock-card">
                            <div className="stock-desc">
                                <h3 className="stock-desc__title">Латте всего за 89 ₽</h3>
                                <p className="stock-desc__text">Ждем тебя!</p>
                                <p className="stock-desc__duration">Действует до 28.12.2023 г.</p>
                            </div>
                            {/* <img src="../static/img/latte.png" alt="" className="stock-card__img"> */}
                        </div>
                    </div>
                </div>
                <div className="title">
                    <h5>Заказ</h5>
                    <h2>Наше меню</h2>
                </div>
                <div>
                    <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                    <div className="cards-block">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                updateQuantity={updateQuantity}
                                cart={cart}
                            />
                        ))}
                    </div>
                </div>



            </main>
        </MainLayout>
    );
};

export default IndexPage;
