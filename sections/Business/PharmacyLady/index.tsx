import Image from 'next/image';
import styles from './styles.module.css';

const PharmacyLady = ({data}: {data: any}) => {
    return (
        <section className={'container'}>
            <div className={styles.pharmacyLadyWrapper}>
                <div className={styles.pharmacyLadyImg}>
                    <Image
                       src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.image?.url}`}
                       width={data?.image?.formats?.medium?.width}
                       height={data?.image?.formats?.medium?.height}
                       alt={'text'}
                    />
                </div>

                <div className={styles.pharmacyLadyText}>
                    <h4>{data?.textSection[0].title}</h4>
                    <p>{data?.textSection[0].text}</p>
                </div>
            </div>
        </section>
    )
}

export default PharmacyLady