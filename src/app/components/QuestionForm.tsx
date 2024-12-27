import React from 'react';
import styles from '../styles/QuestionForm.module.scss';

const QuestionForm: React.FC = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.imageWrapper}>
        <img
          src="/popup_bg_desktop.png"
          alt="Modern interior"
          className={styles.image}
        />
      </div>
      <div className={styles.formWrapper}>
        <h2>Остались вопросы?</h2>
        <p>
          Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.
        </p>
        <form>
          <label htmlFor="phone">Телефон*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+375 (99) 999-99-99"
            required
          />
          <label htmlFor="comment">Комментарий</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Ваш комментарий"
          ></textarea>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id="agreement" name="agreement" required />
            <label htmlFor="agreement">
              Согласие на обработку персональных данных
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuestionForm;
