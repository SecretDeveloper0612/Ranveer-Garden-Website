import Image from 'next/image';
import styles from './GalleryMasonry.module.css';

export default function GalleryMasonry() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>THE CULINARY JOURNEY</span>
          <h2 className={styles.title}>Good food, beautiful memories.</h2>
          <p className={styles.text}>
            We believe that extraordinary celebrations are complemented by exceptional culinary experiences. 
            Our master chefs curate multi-cuisine menus that delight the senses and leave a lasting impression.
          </p>
          <div className={styles.card}>
            <p>"Taste the essence of celebration in every bite."</p>
            <p className={styles.subtext}>Our custom menus ensure your guests enjoy every moment, from the welcome drinks to the grand feast.</p>
          </div>
          <a href="/dining" className={styles.link}>EXPLORE CATERING MENU &rarr;</a>
        </div>

        <div className={styles.gallery}>
          <div className={styles.imgLarge}>
            <Image 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80" 
              alt="Dining experience" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.imgSmall1}>
            <Image 
              src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&q=80" 
              alt="Culinary details" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.imgSmall2}>
            <Image 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
              alt="Event feast" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
