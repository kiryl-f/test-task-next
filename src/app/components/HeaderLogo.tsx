
import styles from '../styles/HeaderLogo.module.scss';
import { HouseIcon } from './HouseIcon';

const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <HouseIcon />
      <div className={styles.textWrapper}>
        <p className={styles.textPrimary}>Строительные решения</p>
        <p className={styles.textSecondary}>Строительная компания</p>
      </div>
    </div>
  );
};

export default HeaderLogo;
