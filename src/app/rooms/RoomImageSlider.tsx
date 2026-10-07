'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function RoomImageSlider({ images, alt }: { images: string[], alt: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className={styles.image}
      />
    );
  }

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Image 
        src={images[currentIdx]} 
        alt={alt} 
        fill 
        style={{ objectFit: 'cover' }}
        className={styles.image}
      />
      <div className={styles.sliderControls}>
        <button className={styles.sliderBtn} onClick={prevImage}>&larr;</button>
        <button className={styles.sliderBtn} onClick={nextImage}>&rarr;</button>
      </div>
    </>
  );
}
