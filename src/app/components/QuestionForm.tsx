import React, { useState } from 'react';
import styles from '../styles/QuestionForm.module.scss';

const QuestionForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, comment }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setPhone('');
        setComment('');
      } else {
        setSubmitError(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.imageWrapper}>
        <img
          src="/question_form.jpeg"
          alt="Modern interior"
          className={styles.image}
        />
      </div>
      <div className={styles.formWrapper}>
        <h2>Остались вопросы?</h2>
        <p>
          Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone">Телефон*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+375 (99) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="comment">Комментарий</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Ваш комментарий"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id="agreement" name="agreement" required />
            <label htmlFor="agreement">
              Согласие на обработку персональных данных
            </label>
          </div>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
          {submitError && <p className={styles.error}>{submitError}</p>}
          {submitSuccess && <p className={styles.success}>Спасибо! Мы свяжемся с вами.</p>}
        </form>
      </div>
    </section>
  );
};

export default QuestionForm;
