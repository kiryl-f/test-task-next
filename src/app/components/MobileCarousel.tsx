"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/MobileCarousel.module.scss";

interface Card {
  title: string;
  linkText: string;
  image: string | null;
}

const cards: Card[] = [
  {
    title: "Оформление рассрочки по ставке от 15% годовых",
    linkText: "Подробнее",
    image: null,
  },
  {
    title: "Барнхаусы",
    linkText: "Подробнее",
    image: "/barn.png",
  },
  {
    title: "Таунхаусы",
    linkText: "Подробнее",
    image: "/town.png",
  },
  {
    title: "Скидка до 5% при полной предоплате за проект",
    linkText: "Подробнее",
    image: null,
  },
];

const MobileCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselItem}>
        {cards[currentIndex].image && (
          <img src={cards[currentIndex].image} alt={cards[currentIndex].title} />
        )}
        <div className={styles.cardContent}>
          <h3>{cards[currentIndex].title}</h3>
          <a href="#" className={styles.link}>
            {cards[currentIndex].linkText} <span>&#8594;</span>
          </a>
        </div>
      </div>

      <div className={styles.navigation}>
        <button className={styles.prevButton} onClick={prevCard}>
          ❮
        </button>
        <button className={styles.nextButton} onClick={nextCard}>
          ❯
        </button>
      </div>

      <div className={styles.pagination}>
        {cards.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => goToCard(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
