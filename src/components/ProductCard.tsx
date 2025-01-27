// components/ProductCard.tsx

import React from 'react';
import styles from '@/styles/ProductCard.module.css';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
    addToCart: (product: { id: number; name: string; price: number; image: string }) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    cart: { id: number; quantity: number }[];
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, removeFromCart, updateQuantity, cart }) => {
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleIncrement = () => {
        updateQuantity(product.id, quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            updateQuantity(product.id, quantity - 1);
        } else {
            removeFromCart(product.id);
        }
    };

    return (
        <div className={styles['product-card']}>
            <img src={product.image} alt={product.name} className={styles['product-img']} />
            <h3 className={styles['product-title']}>{product.name}</h3>
            <p>Цена: {product.price} &#8381;</p>
            {quantity === 0 ? (
                <button onClick={handleAddToCart} className={styles['add-btn']}>Добавить в корзину</button>
            ) : (
                <div className={styles['counter']}>
                    <button onClick={handleDecrement} className={styles['counter-btn']}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement} className={styles['counter-btn']}>+</button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
