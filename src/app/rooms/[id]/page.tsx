import { notFound } from 'next/navigation';
import { rooms } from '@/data/rooms';
import Link from 'next/link';
import styles from './page.module.css';
import RoomGallery from './RoomGallery';

export function generateStaticParams() {
  return rooms.map((r) => ({ id: r.id }));
}

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = rooms.find(r => r.id === id);
  
  if (!room) return notFound();

  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        <Link href="/rooms" className={styles.backLink}>&larr; Back to Rooms</Link>
        
        <div className={styles.header}>
          <h1>{room.name}</h1>
          <div className={styles.subHeader}>
            <span>★ 5.0</span>
            <span>·</span>
            <span>{room.size}</span>
            <span>·</span>
            <span>{room.occupancy}</span>
          </div>
        </div>
        
        <RoomGallery images={room.images} roomName={room.name} />
        
        <div className={styles.contentSplit}>
          <div className={styles.leftContent}>
            <div className={styles.hostInfo}>
              <h2>Room hosted by Ranveer Garden</h2>
              <p>{room.occupancy} · {room.size} · Premium Amenities</p> 
            </div>
            
            <hr className={styles.divider} />
            
            <div className={styles.description}>
              <h2>About this space</h2>
              <p>{room.description}</p>
              <br/>
              <p>Experience the perfect blend of modern comfort and natural serenity at Ranveer The Garden Resort. From the moment you arrive, you'll be treated to world-class hospitality and amenities designed to make your stay unforgettable.</p>
            </div>
            
            <hr className={styles.divider} />

            <div className={styles.sleepSection}>
              <h2>Where you'll sleep</h2>
              <div className={styles.sleepCards}>
                <div className={styles.sleepCard}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-forest)" strokeWidth="1.5">
                    <path d="M2 4v16M22 4v16M2 8h20M2 17h20M7 8v9M17 8v9"/>
                  </svg>
                  <h3>Bedroom</h3>
                  <p>1 {room.features.find(f => f.toLowerCase().includes('bed')) || 'King-size bed'}</p>
                </div>
              </div>
            </div>

            <hr className={styles.divider} />
            
            <div className={styles.features}>
              <h2>What this place offers</h2>
              <ul>
                {room.features.map(f => <li key={f}>{f}</li>)}
                <li>Air conditioning</li>
                <li>Daily housekeeping</li>
                <li>In-room safe</li>
                <li>Flat-screen TV</li>
              </ul>
            </div>
            
          </div>
          
          <div className={styles.rightContent}>
            <div className={styles.bookingCard}>
              <div className={styles.cardHeader}>
                <h3>Reserve</h3>
                <p>Contact us for availability</p>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.datePicker}>
                  <div className={styles.dateInput}>
                    <label>CHECK-IN</label>
                    <span>Add date</span>
                  </div>
                  <div className={styles.dateInput}>
                    <label>CHECKOUT</label>
                    <span>Add date</span>
                  </div>
                </div>
                <div className={styles.guestsInput}>
                  <label>GUESTS</label>
                  <span>1 guest</span>
                </div>
                <Link href="/contact" className={`btn-primary ${styles.reserveBtn}`}>Check Availability</Link>
                <p className={styles.chargeText}>You won't be charged yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
