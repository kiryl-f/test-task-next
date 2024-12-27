import React from "react";
import styles from "../styles/Popup.module.scss";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.header}>
          <img src="/popup_bg_desktop.png" style={{width: '100%'}}/>
          <h2>Обратный звонок</h2>
          <p>Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.</p>
        </div>
        <form>
          <label htmlFor="phone">Телефон*</label>
          <input type="tel" id="phone" placeholder="+375 (99) 999-99-99" required />
          <label htmlFor="comment">Комментарий</label>
          <textarea id="comment" placeholder="Ваш комментарий"></textarea>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id="agreement" required />
            <label htmlFor="agreement">Согласие на обработку персональных данных</label>
          </div>
          <button type="submit" className={styles.submitButton}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
