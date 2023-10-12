import { parseText } from '@/utils/helpers';
import styles from './styles.module.css'
import React from 'react'
import Image from 'next/image';
import circle1 from '../../../assets/image/circle1.png';
import circle2 from '../../../assets/image/circle2.png';
import circle3 from '../../../assets/image/circle3.png';

const PharmacyCircle = ({ data }: { data: any }) => {
    const title = data?.title;

    const { normalTitle, italicTitle, remainingTitle } = parseText(title);

    return (
        <section className={styles.pharmacyCircles}>
            <div className="container">
                <div className={styles.pharmacyCirclesTitle}>
                    <h4>{normalTitle} {italicTitle} {remainingTitle} </h4>
                </div>

                <div className={styles.pharmacyCirclesContainer}>
                        <div className={styles.pharmacyCirclesItem}>
                            <Image
                                src={circle1}
                                alt={'circle1'}
                            />
                            <h5>{data?.items[0]?.title}</h5>
                            <p>{data?.items[0]?.text}</p>
                        </div>

                    <div className={styles.pharmacyCirclesItem}>
                        <Image
                            src={circle2}
                            alt={'circle2'}
                        />
                        <h5>{data?.items[1]?.title}</h5>
                        <p>{data?.items[1]?.text}</p>
                    </div>

                    <div className={styles.pharmacyCirclesItem}>
                        <Image
                            src={circle3}
                            alt={'circle3'}
                        />
                        <h5>{data?.items[2]?.title}</h5>
                        <p>{data?.items[2]?.text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PharmacyCircle