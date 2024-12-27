import React, { useState } from "react";
import styles from "../styles/Popup.module.scss";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, comment }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setPhone(""); // Clear the form fields
        setComment("");
      } else {
        setSubmitError(data.error || "Something went wrong.");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.header}>
          <img src="/popup_bg_desktop.png" style={{ width: "100%" }} />
          <h2>Обратный звонок</h2>
          <p>Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone">Телефон*</label>
          <input
            type="tel"
            id="phone"
            placeholder="+375 (99) 999-99-99"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="comment">Комментарий</label>
          <textarea
            id="comment"
            placeholder="Ваш комментарий"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id="agreement" required />
            <label htmlFor="agreement">
              Согласие на обработку персональных данных
            </label>
          </div>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить"}
          </button>
          {submitError && <p className={styles.error}>{submitError}</p>}
          {submitSuccess && <p className={styles.success}>Спасибо! Мы свяжемся с вами.</p>}
        </form>
      </div>
    </div>
  );
};

export default Popup;
