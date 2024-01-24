import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carte.module.scss';
import MealsGrid from './../../components/MealsGrid/MealsGrid'

const Carte = () => (
  <div className={styles.Carte}>
    <MealsGrid></MealsGrid>
  </div>
);

export default Carte;
