"use client";

import React, { useState } from "react";
import styles from "../styles/MobileInfo.module.scss";
import Popup from "./Popup"; 

const MobileInfo: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className={styles.mobileInfo}>
      <h2 className={styles.title}>
        Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией
      </h2>
      <p className={styles.subtitle}>
        Без головной боли и отклонений от сметы строительства
      </p>
      <button className={styles.ctaButton} onClick={handleOpenPopup}>
        Узнать стоимость
      </button>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default MobileInfo;
