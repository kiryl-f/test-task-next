"use client";

import React, { useState, useEffect } from "react";
import CardGrid from "./CardGrid"; // Adjust path as needed
import styles from "../styles/Slider.module.scss";

const slides = [
  {
    title: "Мы создаем надежные и современные дома для вашего уютного проживания",
    subtitle: "В своей работе мы применяем современные технологии и специализированное строительное оборудование",
  },
  {
    title: "Построим дом вашей мечты с учетом всех современных стандартов",
    subtitle: "Ваш комфорт и безопасность – наша главная цель",
  },
  {
    title: "Индивидуальный подход к каждому проекту строительства",
    subtitle: "Мы создаем дома, которые идеально соответствуют вашему образу жизни и предпочтениям",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        {/* Slides */}
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <button className={styles.ctaButton}>Узнать стоимость</button>
            </div>
          ))}
        </div>

        <button className={styles.prevButton} onClick={prevSlide}>
          ❮
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          ❯
        </button>

        <div className={styles.pagination}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className={styles.cardGridSection}>
        <CardGrid />
      </div>
    </section>
  );
};

export default Slider;
