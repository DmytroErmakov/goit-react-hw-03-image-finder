import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map((image, index) => (
      <ImageGalleryItem onClick={onImageClick} image={image} key={index} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};
