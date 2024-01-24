import styles from './Accueil.module.scss';
import Slider from './../../components/Slider/Slider'

const Accueil = () => (
  <div className={styles.Accueil}>
    <h1>DwapsFood</h1>
    <Slider></Slider>
  </div>
);

export default Accueil;
