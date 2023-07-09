import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export const Modal = ({ src, alt, onClose }) => (
  <div className={styles.overlay} onClick={onClose}>
    <div className={styles.modal}>
      <img src={src} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
