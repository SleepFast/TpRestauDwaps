import React from 'react';
import PropTypes from 'prop-types';
import styles from './Localisation.module.scss';
import LeafletMap from '../../components/LeafletMap/LeafletMap';

const Localisation = () => (
  <div className={styles.Localisation}>
    <h2>NOUS RETROUVER</h2>
    <LeafletMap></LeafletMap>
  </div>
);

export default Localisation;
