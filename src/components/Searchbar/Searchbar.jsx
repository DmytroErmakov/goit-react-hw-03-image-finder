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
        name="inputForSearch"
        className={styles.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
