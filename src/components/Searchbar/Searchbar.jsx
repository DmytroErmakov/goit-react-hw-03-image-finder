import React from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => (
  
  <header className={styles.searchbar}>
    <form className={styles.form} onSubmit={onSubmit}>
      <button type="submit" className={styles.button}>
        <span className={styles.buttonlabel}>Search</span>
      </button>

      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="inputForSearch"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
