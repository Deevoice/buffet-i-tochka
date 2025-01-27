import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaShoppingCart, FaTrash } from 'react-icons/fa';
import styles from '@/styles/Cart.module.css';
import OrderForm from './OrderForm';

interface CartProps {
    cart: { id: number; name: string; price: number; quantity: number; image: string }[];
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart = [], removeFromCart, updateQuantity }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const handleDecrement = (productId: number, quantity: number) => {
        if (quantity > 1) {
            updateQuantity(productId, quantity - 1);
        } else {
            removeFromCart(productId);
        }
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const openOrderForm = () => {
        setIsOrderFormOpen(true);
        setIsOpen(false);
    };

    const closeOrderForm = () => {
        setIsOrderFormOpen(false);
    };

    return (
        <>
            <button onClick={toggleCart} className={styles['cart-button']}>
                <FaShoppingCart size={24} />
            </button>
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? 0 : '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={styles['cart-sidebar']}
            >
                <div className={styles['cart-container']}>
                    <div className={styles['cart-header']}>
                        <h2 className="cart-header__title">Корзина</h2>
                        <button onClick={toggleCart} className={styles['close-btn']}>
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <div className={styles['cart-content']}>
                        {cart.length === 0 ? (
                            <div className={styles['cart-none']}>
                                <p>Корзина пуста</p>
                            </div>
                        ) : (
                            <>
                                {cart.map(item => (
                                    <div key={item.id} className={styles['cart-item']}>
                                        <div className={styles['cart-item_main']}>
                                            <img src={item.image} alt={item.name} className={styles['cart-item__img']} />
                                            <div className={styles['cart-item_desc']}>
                                                <h5 className={styles['item-name']}>{item.name}</h5>
                                                <p className={styles['item-price']}>Цена: {item.price} &#8381;</p>
                                                <div className={styles.counter}>
                                                    <button onClick={() => handleDecrement(item.id, item.quantity)} className={styles.counterButton}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={styles.counterButton}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['cart-item_right']}>
                                            <button onClick={() => removeFromCart(item.id)} className={styles['remove-btn']}><FaTrash size={20} /></button>
                                            <h5>Итог: {item.price * item.quantity} &#8381;</h5>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <div className={styles['cart-total']}>
                        <h3>Итоговая сумма: {totalPrice} &#8381;</h3>
                        <button onClick={openOrderForm} className={styles['order-btn']}>Оформить заказ</button>
                    </div>
                </div>
            </motion.div>
            <OrderForm isOpen={isOrderFormOpen} onClose={closeOrderForm} totalPrice={totalPrice} />
        </>
    );
};

export default Cart;