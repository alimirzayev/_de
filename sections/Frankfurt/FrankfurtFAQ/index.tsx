"use client"
import styles from './styles.module.css'
import img from '../../../assets/dusseldorf-faq.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const FrankfurtFAQ = ({ lang, data }: { lang: 'en' | 'de' , data: any}) => {
  const pathname = usePathname();
  const params = useSearchParams();
  const page = pathname?.split("/")[1];
  const page2 = pathname?.split("/")[2];
  const isFrankfurt = page === "frankfurt" || page2 === "frankfurt"  || params.get('p') == 'frankfurt';
  const isDusseldorf = page === 'dusseldorf' || page2 === "dusseldorf" || params.get('p') == 'dusseldorf';
  const isGerman = page === "de";

  return (
    <section className={`${styles.faq} container`}>
      <div className={styles.faqWrapper}>
        <div className={styles.faqImg}>
          <Image alt='Dusseldorf FAQ' src={img} />
        </div>
        <div className={styles.faqContent}>
          <div className={styles.faqTitle}>
            <h4>{data?.title}</h4>
          </div>
          <div className={styles.faqText}>
            <p>{data?.text}</p>
          </div>
          <Link href={{
             pathname: `${!isGerman ? '/en/faq' : '/de/faq'}`,
             query: { p: isFrankfurt ? 'frankfurt' : isDusseldorf ? 'dusseldorf' : '' },
          }}>
            <button className={styles.faqBtn}>
              {lang === "de" ? "Mehr sehen" : "See More"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FrankfurtFAQ