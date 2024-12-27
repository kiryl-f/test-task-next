import React from 'react';
import styles from '../styles/Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={'/logo.png'} alt="Company Logo" width={200} height={100} />
        </div>
        <div className={styles.address}>
          <h3>Адрес офиса</h3>
          <p>РБ, г. Минск, <br/> ул. Ленина, 1</p>
          <p>пн-пт: с 00:00 до 18:00<br/>сб-вс: с 10:00 до 16:00</p>
        </div>
        <div className={styles.companyInfo}>
          <h3>ООО "Строительные решения"</h3>
          <p>Юридический адрес:<br/>РБ г. Минск, ул. Ленина, 1<br/>УНП: 111111111</p>
        </div>
        <div className={styles.developer}>
          <p>Разработка сайта: <a href="https://web-space.by" target="_blank" rel="noopener noreferrer">Web-space.by</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;