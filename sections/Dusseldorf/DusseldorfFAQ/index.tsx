import styles from './styles.module.css'
import img from '../../../assets/dusseldorf-faq.png';
import Image from 'next/image';
import Link from 'next/link';

const DusseldorfFAQ = ({lang,data}: {lang: 'en' | 'de', data: any}) => {
  return (
    <section className={`${styles.faq} container`}>
      <div className={styles.faqWrapper}>
        <div className={styles.faqImg}>
          <Image alt='Dusseldorf FAQ' src={img} />
        </div>
        <div className={styles.faqContent}>
          <div className={styles.faqTitle}>
            <h4>FAQs</h4>
          </div>
          <div className={styles.faqText}>
            <p>Everything you need to know about our services.<br />Can’t find the answear you’re looking for?</p>
          </div>
          <Link href={'/en/faq'}>
            <button className={styles.faqBtn}>
              {lang === "de" ? "Mehr sehen" : "See More"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DusseldorfFAQ