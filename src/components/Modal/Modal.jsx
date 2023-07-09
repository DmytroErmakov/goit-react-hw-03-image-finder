import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export const Modal = ({ src, alt, handleClose }) => (
  <div className={styles.overlay} onClick={handleClose}>
    <div className={styles.modal}>
      <img src={src} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  srs: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
