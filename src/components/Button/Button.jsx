import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
