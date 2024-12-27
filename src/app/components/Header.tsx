import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import Popup from './Popup';

const Header: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.address}>
            <strong>Адрес офиса:</strong>
            <p>РБ, г. Минск, ул. Ленина, 1</p>
          </div>
          <div className={styles.phone}>
            <p><strong>+375 99 999 99 99</strong></p>
            <p>пн – пт: с 09:00 до 18:00</p>
            <p>сб – вс: с 10:00 до 16:00</p>
          </div>
        </div>
        <button className={styles.callButton} onClick={handleOpenPopup}>Заказать звонок</button>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>
    </header>
  );
};

export default Header;
