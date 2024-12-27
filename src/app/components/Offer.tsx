import React from 'react';
import styles from '../styles/Offer.module.scss';
import Image from 'next/image';

const Offer = () => {
  return (
    <article>
        <h1 style={{fontSize: '3rem'}}>Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией</h1>
        <p style={{fontSize: '2rem'}}>Без головной боли и отклонений от сметы строительства</p>
        <button>Узнать стоимость</button>
    </article>
  );
};

export default Offer;