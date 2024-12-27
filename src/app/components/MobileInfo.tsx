"use client";

import React from "react";
import styles from "../styles/MobileInfo.module.scss";

const MobileInfo: React.FC = () => {
  const openPopup = () => {
    alert("Узнать стоимость - Popup not implemented yet.");
  };

  return (
    <div className={styles.mobileInfo}>
      <h2 className={styles.title}>
        Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией
      </h2>
      <p className={styles.subtitle}>
        Без головной боли и отклонений от сметы строительства
      </p>
      <button className={styles.ctaButton} onClick={openPopup}>
        Узнать стоимость
      </button>
    </div>
  );
};

export default MobileInfo;
