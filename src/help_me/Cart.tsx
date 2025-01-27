import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaShoppingCart, FaTrash } from 'react-icons/fa';
import styles from '@/styles/Cart.module.css';

interface CartProps {
    cart: { id: number; name: string; price: number; quantity: number; image: string }[];
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart = [], removeFromCart, updateQuantity }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                            cart.map(item => (
                                <div key={item.id} className={styles['cart-item']}>
                                    <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>Цена: {item.price} руб.</p>
                                    </div>
                                    <div className={styles.counter}>
                                        <button onClick={() => handleDecrement(item.id, item.quantity)} className={styles.counterButton}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={styles.counterButton}>+</button>
                                        <button onClick={() => removeFromCart(item.id)} className={styles['remove-btn']}><FaTrash /></button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Cart;

