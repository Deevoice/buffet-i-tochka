import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from '@/styles/OrderForm.module.css';

interface OrderFormProps {
    isOpen: boolean;
    onClose: () => void;
    totalPrice: number;
}

const OrderForm: React.FC<OrderFormProps> = ({ isOpen, onClose, totalPrice }) => {
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles['order-form']}
        >
            <div className={styles['order-form-container']}>
                <div className={styles['order-form-header']}>
                    <h2 className={styles['order-form-title']}>Оформление заказа</h2>
                    <button onClick={onClose} className={styles['close-btn']}>
                        <FaTimes size={24} />
                    </button>
                </div>
                <div className={styles['order-form-content']}>
                    <form>
                        <div className={styles['form-group-map']}>
                            <div>
                                <iframe className={styles['form-map']} src="https://yandex.ru/map-widget/v1/?ll=37.437474%2C55.860285&mode=poi&poi%5Bpoint%5D=37.437271%2C55.860534&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D224730537423&z=19.6"></iframe>
                                <a href="https://yandex.ru/maps/org/vkusno_i_tochka/224730537423/?utm_medium=mapframe&utm_source=maps">
                                    <div className={styles['form-map-link']}><h5>Буфет — и точка</h5></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles['form-group']}>
                            <h5>Упаковать с собой</h5>
                            <label className={styles['switch']}>
                                <input type="checkbox"></input>
                                    <span className={styles['slider']}></span>
                            </label>
                        </div>
                        <div className={styles['form-group']}>

                        </div>
                        <div className={styles['form-group']}>
                            <h3>Итого: {totalPrice} &#8381;</h3>
                        </div>
                        <button type="submit" className={styles['submit-btn']}>Оформить заказ</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default OrderForm;
