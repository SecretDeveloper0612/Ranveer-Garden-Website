'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { rooms, Room } from '@/data/rooms';
import styles from './Accommodation.module.css';

const BedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
  </svg>
);

const SizeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3L3 21M21 3v6M21 3h-6M3 21v-6M3 21h6" />
  </svg>
);

const getBedInfo = (room: Room) => {
  if (room.id === 'superior') return '1 King Bed';
  if (room.id === 'suite') return '1 King Bed';
  if (room.id === 'royal') return '2 Bedrooms';
  const bedFeature = room.features?.find(f => f.toLowerCase().includes('bed'));
  return bedFeature || room.occupancy;
};

const RoomCard = ({ room }: { room: Room }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image 
          src={room.images[currentIdx]} 
          alt={room.name} 
          fill 
          style={{ objectFit: 'cover' }}
        />
        {room.images.length > 1 && (
          <div className={styles.sliderControls}>
            <button className={styles.sliderBtn} onClick={prevImage} aria-label="Previous image">&larr;</button>
            <button className={styles.sliderBtn} onClick={nextImage} aria-label="Next image">&rarr;</button>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.icon}><BedIcon /></span>
            <span>{getBedInfo(room)}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.icon}><SizeIcon /></span>
            <span>{room.size}</span>
          </div>
        </div>
        <Link href={`/rooms/${room.id}`} className={styles.link}>
          EXPLORE ROOMS &rarr;
        </Link>
      </div>
    </div>
  );
};

export default function Accommodation() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>ACCOMMODATION AT RANVEER</span>
          <h2 className={styles.title}>Stay a little longer.</h2>
          <p className={styles.subtitle}>
            Comfort meets luxury in our guest rooms, offering the perfect retreat after a long day of celebrations.
          </p>
        </div>

        <div className={styles.grid}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
