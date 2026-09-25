import Image from 'next/image';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" 
                alt="Event planning" 
                fill 
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageOverlay}>
                <h2 className={styles.imageTitle}>Create memories<br/>that last a lifetime.</h2>
              </div>
            </div>
          </div>
          
          <div className={styles.formColumn}>
            <div className={styles.formHeader}>
              <span className={styles.eyebrow}>INQUIRE NOW</span>
              <h2 className={styles.title}>Let's plan your moment.</h2>
              <p className={styles.subtitle}>
                Reach out to our event specialists and begin the journey toward an unforgettable celebration at Ranveer Garden.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 90000 00000" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Event Type</label>
                  <select required>
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding / Pre-Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Event Date</label>
                  <input type="date" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Estimated Guests</label>
                  <select required>
                    <option value="">Select Guest Count</option>
                    <option value="100-300">100 - 300</option>
                    <option value="300-500">300 - 500</option>
                    <option value="500-800">500 - 800</option>
                    <option value="800+">800+</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                PLAN YOUR EVENT
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
