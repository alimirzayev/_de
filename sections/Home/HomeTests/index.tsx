import Link from 'next/link';
import HomeSecProducts from './HomeSecProducts';
import styles from './styles.module.css';

const HomeTests = ({ data, data2, lang }: { data: any; data2: any; lang: string }) => {
  return (
    <section id='products' className={styles.homeProducts}>
      <div id='products-cpt'>
        <div className={styles.homeProductsBg}>
          <div className='container'>
            <div className={styles.homeProductsTitle}>
              <h4>{data2?.title}</h4>
              <p>{data2?.text}</p>
            </div>
            <div>
              <Link
                className={styles.homeProductsAll}
                href={
                  `${process.env.SHOP_BASE_URL}/web/products?account_number=0000005579&group_id=103`
                }
              >
                {lang === 'de' ? 'Alle Produkte ansehen' : 'See all products'}
                <i className={`${styles.homeProductsAllIcon} arrow-right-icon`} />
              </Link>
            </div>
          </div>
        </div>
        <HomeSecProducts data={data} />
      </div>
    </section>
  );
};

export default HomeTests;
