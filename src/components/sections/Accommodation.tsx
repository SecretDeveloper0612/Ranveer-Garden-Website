import Image from 'next/image';
import Link from 'next/link';
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

export default function Accommodation() {
  const rooms = [
    {
      title: 'Premium Room',
      desc: 'Elegant rooms featuring plush bedding and beautiful garden views.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
      beds: '1 King Bed',
      size: '300 sq.ft',
    },
    {
      title: 'Royal Suite & Family Rooms',
      desc: 'Spacious suites designed for families and VIP guests with living areas.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
      beds: '2 Queen Beds',
      size: '500 sq.ft',
    },
    {
      title: 'Executive & Presidential Suites',
      desc: 'The pinnacle of luxury with expansive spaces and premium amenities.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
      beds: '1 King Bed',
      size: '800 sq.ft',
    }
  ];

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
          {rooms.map((room, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.image}>
                <Image 
                  src={room.image} 
                  alt={room.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.content}>
                <h3>{room.title}</h3>
                <p>{room.desc}</p>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <span className={styles.icon}><BedIcon /></span>
                    <span>{room.beds}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.icon}><SizeIcon /></span>
                    <span>{room.size}</span>
                  </div>
                </div>
                <Link href="/rooms" className={styles.link}>
                  EXPLORE ROOMS &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
