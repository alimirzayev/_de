import Image from 'next/image';
import styles from './styles.module.css';

const PharmacyTests = ({ data }: { data: any }) => {
    return (
        <section className={styles.pharmacyTests}>
            <div className="container">
                <div className={styles.pharmacyTestsWrapper}>

                    <div className={styles.pharmacyTestsTitle}>
                        <h4>{data?.title}</h4>
                    </div>

                    <div className={styles.pharmacyTestsItems}>
                        {data?.Tests?.map((item) => {
                            return (
                                <div key={item.id} className={styles.pharmacyTestsItem}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                                        width={item?.image?.formats?.medium?.width}
                                        height={item?.image?.formats?.medium?.height}
                                        alt={'text'}
                                    />
                                    <p>{item?.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PharmacyTests