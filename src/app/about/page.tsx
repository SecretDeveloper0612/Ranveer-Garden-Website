import styles from './page.module.css';


export const metadata = {
  title: 'Our Story | Ranveer Garden Resort & Banquet',
  description: 'Learn about the history and vision behind Ranveer Garden Resort & Banquet, your premium destination for monumental celebrations in Uttarakhand.',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1>Our Story</h1>
          <p>A legacy of luxury, hospitality, and unforgettable celebrations.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`section container ${styles.storySection}`}>
        <div className={styles.storyGrid}>
          <div className={styles.textContent}>
            <h2 className="section-title" style={{textAlign: 'left'}}>A Vision of Grandeur</h2>
            <p className={styles.lead}>
              Founded with a vision to redefine luxury events in Uttarakhand, Ranveer Garden Resort & Banquet stands as a testament to exceptional hospitality and grand architecture.
            </p>
            <p>
              Our journey began with a simple yet ambitious goal: to create a space where every celebration becomes a monumental memory. From intimate gatherings to royal weddings, our venue is designed to cater to the most discerning guests.
            </p>
            <p>
              We believe that true luxury lies in the details. That&apos;s why every aspect of our resort, from the manicured lawns to the opulent banquet halls, has been meticulously crafted to provide an unparalleled experience.
            </p>
          </div>
          <div className={styles.imageContent}>
            {/* Using a placeholder or generic styling since we don't have images */}
            <div className={styles.imagePlaceholder}>
               <span>Ranveer Garden</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide our every action and interaction.</p>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Excellence</h3>
              <p>We strive for perfection in every detail, ensuring your event is flawlessly executed.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Hospitality</h3>
              <p>Warmth, respect, and anticipation of our guests&apos; needs are at the heart of our service.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Integrity</h3>
              <p>We operate with transparency and honesty, building lasting relationships with our clients.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>We continuously evolve our offerings to bring you the latest in event trends and technologies.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
