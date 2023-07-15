import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li className={styles.galleryItem} onClick={onClick}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={styles.galleryItemImage}
    />
  </li>
);

ImageGalleryItem.propsTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
