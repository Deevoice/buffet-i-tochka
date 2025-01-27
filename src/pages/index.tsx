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
        { id: 1, name: 'Бургер', price: 250, image: '/images/products/1.jpeg' },
        { id: 2, name: 'Картофель фри', price: 60, image: '/images/products/2.jpeg' },
        { id: 3, name: 'Картофель', price: 80, image: '/images/products/3.jpeg' },
        { id: 4, name: 'Наггетсы', price: 110, image: '/images/products/4.jpeg' },
        { id: 5, name: 'Салат греческий', price: 170, image: '/images/products/5.jpeg' },
        { id: 6, name: 'Чизкейк', price: 150, image: '/images/products/6.jpeg' },
        { id: 7, name: 'Шейк клубничеый', price: 120, image: '/images/products/7.jpeg' },
        { id: 8, name: 'Шейк шоколадный', price: 120, image: '/images/products/8.jpeg' },
        { id: 9, name: 'Rich апельсин', price: 100, image: '/images/products/9.jpeg' },
        { id: 10, name: 'Вода Baikal', price: 100, image: '/images/products/10.jpeg' },
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
                        {/* <Image src="/images/location.svg" alt="vbz" className="title__ico" layout="fill" objectFit="contain"> */}
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
                <div className="cards-container">
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
