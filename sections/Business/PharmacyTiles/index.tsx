import { parseText } from '@/utils/helpers';
import styles from './styles.module.css'

const PharmacyTiles = ({ data }: { data: any }) => {
    const { normalTitle, italicTitle, remainingTitle } = parseText(data?.title);
    console.log(data);


    return (
        <section id='uberuns' className={styles.pharmacyTiles}>
            <div className="container">
                <div className={styles.pharmacyTilesWrapper}>

                    <div className={styles.pharmacyTileContent}>

                        <h4>{normalTitle}<i>{italicTitle}</i>{remainingTitle}</h4>

                        <p>{data?.text}</p>

                    </div>

                    <div className={styles.pharmacyTileStats}>
                        <div className={styles.leftSide}>
                            {data.items.slice(0, 4).map(item => (
                                <div key={item.id} className={styles.item}>
                                    <h5 className={styles.itemTitle}>{item.title}</h5>
                                    <p className={styles.itemText}>{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.rightSide}>
                            {data.items.slice(4, 8).map(item => (
                                <div key={item.id} className={styles.item}>
                                    <h5 className={styles.itemTitle}>{item.title}</h5>
                                    <p className={styles.itemText}>{item.text}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default PharmacyTiles