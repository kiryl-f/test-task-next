import React from "react";
import styles from "../styles/CardGrid.module.scss";

const cards = [
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

const CardGrid: React.FC = () => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          {card.image && <img src={card.image} alt={card.title} />}
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <a href="#" className={styles.link}>
              {card.linkText} <span>&#8594;</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
