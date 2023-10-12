import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import mainImg from '../../../assets/dusseldorf-main.png'
import { parseText } from '@/utils/helpers'
import MVPScrollBottom from '@/sections/MVP/MVPScrollBottom'

const FrankfurtMain = ({ data }: any) => {
  const text = data?.text;
  const {
    normalTitle,
    italicTitle,
    remainingTitle
  } = parseText(text);

  return (
    <main className={`${styles.main} container`}>
      <div className={styles.mainWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.mainContentHeading}>
            <h1>{data?.title}</h1>
          </div>
          <div className={styles.mainContentText}>
            <p>{normalTitle}<i>{italicTitle}</i>{remainingTitle}</p>
          </div>
          <div className={styles.mainContentButtons}>
            <Link href={data?.buttons[0]?.url}>
              <button className={styles.mainBookNow}>{data?.buttons[0]?.name}</button>
            </Link>

            {data?.buttons[1]?.name !== 'Explore' && (
              <Link href={data?.buttons[1]?.url} className={styles.mainExplore}>
                <p>{data?.buttons[1]?.name}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 18C16.7 18 16.5 17.9 16.3 17.7L6.3 7.7C5.9 7.3 5.9 6.7 6.3 6.3C6.7 5.9 7.3 5.9 7.7 6.3L17.7 16.3C18.1 16.7 18.1 17.3 17.7 17.7C17.5 17.9 17.3 18 17 18Z" fill="#0B1B5C" />
                  <path d="M17 18H8C7.4 18 7 17.6 7 17C7 16.4 7.4 16 8 16H16V8C16 7.4 16.4 7 17 7C17.6 7 18 7.4 18 8V17C18 17.6 17.6 18 17 18Z" fill="#0B1B5C" />
                </svg>
              </Link>
            )}

          </div>
        </div>

        <div className={styles.mainImage}>
          <Image src={mainImg} alt={'dusseldorf_main'} />
        </div>
      </div>
    </main>
  )
}

export default FrankfurtMain