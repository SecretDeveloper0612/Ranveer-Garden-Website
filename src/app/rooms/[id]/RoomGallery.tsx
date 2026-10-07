'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function RoomGallery({ images, roomName }: { images: string[], roomName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={styles.airbnbGallery}>
        <div className={styles.mainImage} onClick={() => openGallery(0)}>
          {images[0] && (
            <Image src={images[0]} alt={roomName} fill style={{ objectFit: 'cover' }} />
          )}
        </div>
        <div className={styles.sideImages}>
          {images.slice(1, 5).map((img, i) => (
            <div key={i} className={styles.sideImage} onClick={() => openGallery(i + 1)}>
              <Image src={img} alt={`${roomName} ${i + 2}`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <button className={styles.viewMoreBtn} onClick={() => openGallery(0)}>
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
             <path d="M2.5 4h11a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5zm0-1A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm3.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-2.5 4.5v1h9v-2.28l-2.6-2.6a.5.5 0 0 0-.71 0l-2.3 2.3-1.6-1.6a.5.5 0 0 0-.7 0L3.5 10.5z"></path>
          </svg>
          Show all photos
        </button>
      </div>

      {isOpen && (
        <div className={styles.galleryModal} onClick={closeGallery}>
          <button className={styles.closeBtn} onClick={closeGallery}>✕</button>
          
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalNavBtn} onClick={prevImage}>&larr;</button>
            <div className={styles.modalImageWrapper}>
              <Image 
                src={images[currentIndex]} 
                alt={`${roomName} ${currentIndex + 1}`} 
                fill 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </div>
            <button className={styles.modalNavBtn} onClick={nextImage}>&rarr;</button>
          </div>
          <div className={styles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
