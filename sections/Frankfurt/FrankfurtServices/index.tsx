'use client'
import styles from './styles.module.css';
import card1 from '../../../assets/dusseldorf-service-1.png'
import card2 from '../../../assets/dusseldorf-service-2.png'
import card3 from '../../../assets/dusseldorf-service-3.png'
import Image from 'next/image';

const FrankfurtServices = ({ lang }: { lang: 'en' | 'de' }) => {
    const data = [
        {
            id: 1,
            title_de: 'COVID-19-Tests',
            title: 'COVID-19 Tests',
            img: card1
        },
        {
            id: 1,
            title_de: 'Gesundheitstests',
            title: 'Health Tests',
            img: card2
        },
        {
            id: 1,
            title_de: 'Behandlungen',
            title: 'Treatments',
            img: card3
        }
    ]

    const isBrowser = () => typeof window !== "undefined";

    function scrollToBottom() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 1000, behavior: "smooth" });
    }

    const title = lang === 'de' ? 'Unsere Dienstleistungen' : 'Our Services';
    const desc = lang === 'de' ? 'Entdecken Sie neben unseren bewährten COVID-19-Tests eine Vielzahl von Bluttests. Mit nur einem kleinen Tropfen Blut können Sie wertvolle Erkenntnisse über Ihren Körper gewinnen und gezielt Maßnahmen für Ihr Wohlbefinden ergreifen. Unser geschultes Personal nimmt die Proben schnell und einfach vor Ort ab. In wenigen Minuten erhalten Sie leicht verständliche Ergebnisse und entsprechende Handlungsempfehlungen' : 'Discover a variety of blood tests alongside our proven COVID-19 tests. With just a small drop of blood, you can gain valuable insights into your body and take targeted measures for your well-being. Our trained staff quickly and easily collect samples on-site. In a matter of minutes, you will receive easily understandable results and appropriate recommendations for action.';

    return (
        <section className={`${styles.services} container`}>
            <div className={styles.servicesIcon}>
                <svg
                    onClick={scrollToBottom}
                    width="112"
                    height="111"
                    viewBox="0 0 112 111"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M55.6918 110.713C86.4244 110.713 111.338 86.0892 111.338 55.7142C111.338 25.3392 86.4244 0.715332 55.6918 0.715332C24.9592 0.715332 0.0454102 25.3392 0.0454102 55.7142C0.0454102 86.0892 24.9592 110.713 55.6918 110.713Z"
                        fill="#0B1B5C"
                    />
                    <g clip-path="url(#clip0_707_2104)">
                        <path
                            d="M56.0159 75.0097L65.2903 65.7354C65.6793 65.4022 65.7247 64.8167 65.3914 64.4277C65.0583 64.0387 64.4728 63.9933 64.0838 64.3266C64.0475 64.3576 64.0136 64.3914 63.9826 64.4277L56.2849 72.1161L56.2849 35.3988C56.2849 34.8867 55.8696 34.4714 55.3574 34.4714C54.8452 34.4714 54.43 34.8867 54.43 35.3988L54.43 72.1161L46.7416 64.4277C46.4084 64.0387 45.8229 63.9933 45.4339 64.3266C45.0449 64.6598 44.9995 65.2452 45.3328 65.6342C45.3639 65.6705 45.3976 65.7044 45.4339 65.7354L54.7083 75.0098C55.0699 75.3693 55.6541 75.3693 56.0159 75.0097Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_707_2104">
                            <rect
                                width="40.808"
                                height="40.808"
                                fill="white"
                                transform="translate(75.7661 34.4714) rotate(90)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className={styles.servicesWrapper}>
                <div className={styles.servicesContent}>
                    <div className={styles.servicesTitle}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.servicesText}>
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
                <div className={styles.servicesContainer}>
                    {data.map((item, index) => {
                        return (
                            <div className={styles.servicesCard} key={index}>
                                <div className={styles.servicesCardImg}>
                                    <Image src={item.img} alt={item.title} />
                                </div>
                                <div className={styles.servicesCardTitle}>
                                    <p>{lang === 'en' ? item?.title : item?.title_de}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FrankfurtServices