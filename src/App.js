import React from 'react';
import styles from './GallerySection.module.css';

const GallerySection = () => {
  return (
    <div className={styles.gallery}>
      <img
        className={styles.largeImage}
        src="https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Large Gym Image"
      />
      <div className={styles.smallImages}>
        <img
          className={styles.smallImage}
          src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Small Gym Image"
        />
        <img
          className={styles.smallImage}
          src="https://images.pexels.com/photos/28076/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
          alt="Small Gym Image"
        />
        <img
          className={styles.smallImage}
          src="https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Small Gym Image"
        />
      </div>
    </div>
  );
};

export default GallerySection;
