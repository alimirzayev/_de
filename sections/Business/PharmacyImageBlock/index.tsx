import { parseText } from '@/utils/helpers';
import Image from 'next/image';
import styles from './styles.module.css'

const PharmacyImageBlock = ({ data }: { data: any }) => {
    const { normalTitle, italicTitle, remainingTitle } = parseText(data?.textSection[0].title);
    console.log("image",data)

    const listItems = data?.textSection[0].text?.split('\n')?.filter(line => line?.trim() !== '');

    return (
        <section id='diagnostik' className={styles.pharmacyImageBlock}>
            <div className={`${styles.pharmacyBlockArticle} container`}>
                <div className={`${styles.pharmacyBlockArticleTitle}`}>
                    <h4>
                        {normalTitle}
                        <i>{italicTitle}</i>
                        {remainingTitle}
                    </h4>
                </div>
                <div className={`${styles.pharmacyBlockArticleText}`}>
                    <ul>
                        {listItems && listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`${styles.pharmacyBlockImage}`}>
        
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.image?.url}`}
                    // width={undefined}
                    // height={undefined}
                    alt={'text'}
                    objectFit='cover'
                    layout='fill'
                />
            </div>
        </section>
    )
}

export default PharmacyImageBlock