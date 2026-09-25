import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Luxury Rooms & Suites | Ranveer Garden',
  description: 'Experience unparalleled luxury and comfort in our meticulously designed rooms and suites.',
};

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    description: 'A spacious haven offering panoramic garden views, featuring modern amenities, a plush king-size bed, and an elegant seating area perfect for relaxation.',
    size: '450 sq.ft',
    occupancy: '2 Adults, 1 Child',
    features: ['King-size bed', 'Garden view', 'En-suite bathroom', 'Mini-bar', 'Free Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80'
  },
  {
    id: 'premium',
    name: 'Premium Suite',
    description: 'Elevate your stay in our Premium Suite. This exceptionally designed space features a separate living area, premium furnishings, and enhanced amenities for the ultimate comfort.',
    size: '600 sq.ft',
    occupancy: '2 Adults, 2 Children',
    features: ['Separate living room', 'Premium toiletries', 'Bathtub', 'Work desk', '24-hour room service'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80'
  },
  {
    id: 'royal',
    name: 'The Royal Villa',
    description: 'Our most exclusive offering. The Royal Villa provides unparalleled privacy and luxury, complete with a private plunge pool, dedicated butler service, and exquisite décor.',
    size: '1200 sq.ft',
    occupancy: '4 Adults',
    features: ['Private pool', 'Butler service', 'Two bedrooms', 'Dining area', 'Lounge access'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
  }
];

export default function RoomsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80"
            alt="Luxury Accommodation"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>ACCOMMODATION</span>
          <h1>Unwind in luxury</h1>
          <p>Discover our elegantly appointed rooms and suites, designed for perfect relaxation.</p>
        </div>
      </section>

      <section className={`section ${styles.roomsSection}`}>
        <div className="container">
          <div className={styles.roomsList}>
            {rooms.map((room, index) => (
              <div key={room.id} className={`${styles.roomCard} ${index % 2 !== 0 ? styles.roomCardReverse : ''}`}>
                <div className={styles.roomImage}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.image}
                  />
                </div>
                <div className={styles.roomInfo}>
                  <h2>{room.name}</h2>
                  <p className={styles.description}>{room.description}</p>
                  
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Size</span>
                      <span className={styles.detailValue}>{room.size}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Occupancy</span>
                      <span className={styles.detailValue}>{room.occupancy}</span>
                    </div>
                  </div>

                  <div className={styles.featuresList}>
                    <h3>Room Features</h3>
                    <ul>
                      {room.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.actions}>
                    <Link href="/contact" className="btn-primary">Reserve Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.amenitiesSection}`}>
         <div className="container text-center">
            <h2 className={styles.amenitiesTitle}>Resort Amenities</h2>
            <p className={styles.amenitiesSubtitle}>Experience world-class facilities during your stay.</p>
            <div className={styles.amenitiesGrid}>
               <div className={styles.amenityCard}>
                  <span className={styles.amenityIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12c2 0 3-3 5-3s3 3 5 3 3-3 5-3 3 3 5 3" />
                      <path d="M2 18c2 0 3-3 5-3s3 3 5 3 3-3 5-3 3 3 5 3" />
                    </svg>
                  </span>
                  <h3>Swimming Pool</h3>
                  <p>A temperature-controlled pool perfect for a refreshing dip.</p>
               </div>
               <div className={styles.amenityCard}>
                  <span className={styles.amenityIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                    </svg>
                  </span>
                  <h3>Spa & Wellness</h3>
                  <p>Rejuvenate your senses with our signature holistic treatments.</p>
               </div>
               <div className={styles.amenityCard}>
                  <span className={styles.amenityIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.5 6.5h11" />
                      <path d="M6.5 17.5h11" />
                      <path d="M3 6.5v11" />
                      <path d="M21 6.5v11" />
                      <rect x="5" y="3" width="3" height="18" rx="1" />
                      <rect x="16" y="3" width="3" height="18" rx="1" />
                    </svg>
                  </span>
                  <h3>Fitness Center</h3>
                  <p>State-of-the-art equipment to maintain your fitness regime.</p>
               </div>
               <div className={styles.amenityCard}>
                  <span className={styles.amenityIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                    </svg>
                  </span>
                  <h3>Fine Dining</h3>
                  <p>Exquisite culinary experiences crafted by expert chefs.</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
