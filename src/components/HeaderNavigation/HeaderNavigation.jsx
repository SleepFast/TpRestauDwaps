import styles from './HeaderNavigation.module.scss';
import { Link } from 'react-router-dom'

const HeaderNavigation = () => (
    <ul className={styles.HeaderNavigation}>
      <li>
        <Link to="/accueil">
          <img src="vite.svg" />
        </Link>
      </li>
      <div className={styles.HeaderNavigation_links}>
        <li className={styles.HeaderxNavigation_links}>
          <Link to="/presentation">presentation</Link>
        </li>
        <li className={styles.HeaderNavigation_links}>
          <Link to="/carte">carte</Link>
        </li>
        <li className={styles.HeaderNavigation_links}>
          <Link to="/localisation">localisation</Link>
        </li>
      </div>
    </ul>
);

export default HeaderNavigation;
