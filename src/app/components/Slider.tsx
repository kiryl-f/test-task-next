"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '../styles/Slider.module.scss';

const Slider: React.FC = () => {
  const slides = [
    {
      title: 'Мы создаем надежные и современные дома для вашего уютного проживания',
      subtitle:
        'В своей работе мы применяем современные технологии и специализированное строительное оборудование',
    },
    {
      title: 'Построим дом вашей мечты с учетом всех современных стандартов',
      subtitle: 'Ваш комфорт и безопасность – наша главная цель',
    },
    {
      title: 'Индивидуальный подход к каждому проекту строительства',
      subtitle:
        'Мы создаем дома, которые идеально соответствуют вашему образу жизни и предпочтениям',
    },
  ];

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        <Swiper loop autoplay={{ delay: 5000 }} spaceBetween={50} slidesPerView={1}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <button className={styles.ctaButton}>Узнать стоимость</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.rightContent}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <p>Оформление рассрочки по ставке от 15% годовых</p>
              <a href="#">Подробнее &rarr;</a>
            </div>
            <div className={styles.card}>
              <p>Барнхаусы</p>
              <a href="#">Подробнее &rarr;</a>
            </div>
            <div className={styles.card}>
              <p>Таунхаусы</p>
              <a href="#">Подробнее &rarr;</a>
            </div>
            <div className={styles.card}>
              <p>Скидка до 5% при полной предоплате за проект</p>
              <a href="#">Подробнее &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
