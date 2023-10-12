'use client'
import { useModal } from '@/hooks/useModal';
import Modal from '@/layouts/Modal';
import { parseText } from '@/utils/helpers';
import Image from 'next/image';
import styles from './styles.module.css';

const PharmacyFeatures = ({ data }: { data }) => {
    const { normalTitle, italicTitle, remainingTitle } = parseText(data[0]?.title);
    const { isOpen, openModal, closeModal } = useModal();

    const items = data[2].text.split('\n\n').filter(item => item.trim() !== '');

    const foruthItems = data[3].text.split('\n\n').filter(item => item.trim() !== '');

    return (
        <section className={styles.pharmacyFeatures}>

            <div className={styles.pharmacyFeaturesFirst}>
                <div className={styles.pharmacyFeaturesFirstImage}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[0]?.image?.url}`}
                        // width={data[0]?.image?.formats?.medium?.width}
                        // height={data[0]?.image?.formats?.medium?.height}
                        alt={'text'}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>

                <div className={styles.pharmacyFeaturesFirstContent}>
                    <h4>{normalTitle}<i>{italicTitle}</i>{remainingTitle}</h4>
                    <p>{data[0]?.text}</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.pharmacyFeaturesSecond}>
                    <div className={styles.pharmacyFeaturesSecondContent}>
                        <p>{data[1]?.text}</p>
                    </div>


                    <div className={styles.pharmacyFeaturesSecondImage}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[1]?.image?.url}`}
                            width={data[1]?.image?.formats?.medium?.width}
                            height={data[1]?.image?.formats?.medium?.height}
                            alt={'text'}
                            // objectFit='cover'
                            // layout='fill'
                        />
                    </div>
                </div>
            </div>

            <div className="container">
                <h4 className={styles.pharmacyFeaturesThirdTitle}>{data[2]?.title}</h4>

                <div className={styles.pharmacyFeaturesThird}>
                    <ul>
                        {items?.slice(0, 6).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <ul>
                        {items?.slice(6).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.pharmacyFeaturesThirdButton}>
                    <button  onClick={openModal}>{data[2]?.button[0]?.name}</button>
                </div>
            </div>

            <div className={styles.pharmacyFeaturesFourth}>

                <div className={styles.pharmacyFeaturesFourthImage}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[3]?.image?.url}`}
                        width={data[3]?.image?.formats?.medium?.width}
                        height={data[3]?.image?.formats?.medium?.height}
                        alt={'text'}
                    
                    />
                </div>

                    <div className={styles.pharmacyFeaturesFourthContent}>
                        <h4>{data[3]?.title}</h4>

                        <h5>{foruthItems[0]}</h5>

                        <ul>
                            <li>{foruthItems[1]}</li>
                            <li>{foruthItems[2]}</li>
                            <li>{foruthItems[3]}</li>
                        </ul>
                    </div>
            </div>

            <Modal isOpen={isOpen} onClose={closeModal} />
        </section>
    )
}

export default PharmacyFeatures