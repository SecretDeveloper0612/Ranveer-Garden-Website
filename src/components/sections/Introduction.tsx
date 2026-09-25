import Image from 'next/image';
import styles from './Introduction.module.css';

export default function Introduction() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.eyebrowWrapper}>
            <div className={styles.line}></div>
            <span className={styles.eyebrow}>DISCOVER THE MAGIC</span>
          </div>
          
          <h2 className={styles.title}>A place made for celebrations.</h2>
          
          <p className={styles.text}>
            We are one of the most exclusive and luxurious banquet halls in Haldwani. 
            Nestled in the breathtaking surroundings of nature, our venue offers a perfect blend of elegance and modern amenities.
          </p>
          <p className={styles.text}>
            Whether you are planning a grand wedding, a corporate event, or an intimate gathering, 
            Ranveer Garden provides a spectacular backdrop. With a sprawling 7,500 sq ft pillar-less hall 
            and lush green lawns, we ensure your special moments are truly unforgettable.
          </p>
          
          <a href="/about" className={styles.link}>EXPLORE THE VENUE &rarr;</a>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
            alt="Ranveer Garden Venue" 
            fill 
            className={styles.image}
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.badge}>
            <span className={styles.est}>Est. 2008</span>
            <span className={styles.name}>RANVEER GARDEN</span>
            <span className={styles.location}>Haldwani, Uttarakhand</span>
          </div>
        </div>
      </div>
    </section>
  );
}
