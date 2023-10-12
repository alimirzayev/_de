import BusinessStats from '@/sections/Business/BusinessStats'
import styles from './styles.module.css'
import img1 from '../../../assets/about-1.png';
import img2 from '../../../assets/about-2.png';
import Image from 'next/image';

const About = ({ data, lang }: any) => {
    const isGerman = lang == 'de' ? true : false;
    return (
        <section className={`${styles.about} container`}>
            <>
                <div className={styles.aboutTitle}>
                    <h1>{isGerman ? 'Über' : 'About'}</h1>
                </div>
                <div className={styles.aboutSubTitle}>
                    {isGerman ?
                        <h2>Primär- und Präventivversorgung Versorgung<br />
                            <i>zugänglich machen</i></h2>
                        :
                        <h2>Making primary and preventive<br />
                            careaccessible <i>for everyone</i></h2>
                    }

                </div>
                <div className={styles.aboutDesc}>
                    {isGerman ?
                        <p>
                            Wir ermöglichen den Zugang zu medizinischem Personal und fortschrittlicher Diagnostik, wann immer und wo immer die Patienten sie benötigen,
                            Sowohl online als auch persönlich, damit die Menschen sich besser um sich selbst kümmern können
                        </p>
                        :
                        <p>
                            We enable access to medical staff and advanced diagnosticswhenever and wherever patients may need them,<br />
                            both online and in person, empowering people to take better care of themselves
                        </p>}
                </div>
            </>
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutWrapper1}>
                    <h3>{isGerman ? 'Unser Auftrag' : 'Our Mission'}</h3>
                    <p>{isGerman ? 'Bequeme und für jedermann zugängliche Primär- und Präventivversorgung, indem schnelle und innovative Lösungen dorthin gebracht werden, wo Hilfe benötigt wird' : 'Making primary and preventive care convenient and accessible for everyone by bringing fast and innovative solutions to where help is needed'}
                    </p>
                </div>
                <div className={styles.aboutWrapper2}>
                    <Image src={img1} alt={'aboutimg'} />
                </div>
                <div className={styles.aboutWrapper3}>
                    <Image src={img2} alt={'aboutimg'} />
                </div>
                <div className={styles.aboutWrapper4}>
                    <h3>{isGerman ? 'Unsere Vision' : 'Our Vision'}</h3>
                    <p>{isGerman ? 'Die Ungleichgewichte in der Gesundheitsversorgung weltweit beseitigen und die Menschen in die Lage versetzen, sich selbst besser zu versorgen' : 'Solving the imbalances of healthcare coverage worldwide, and empowering people to take better care of themselves'}</p>
                </div>
            </div>

            <BusinessStats data={data?.Tiles} about={true} />

            <div className={styles.aboutFooter}>
                <p className={styles.aboutFooterHeading}>{isGerman ? 'Kontaktinformationen' : 'Contact Information'}</p>
                <div className={styles.aboutContact}>
                    <div>
                        <p>service@ecocare.de</p>
                        <p>Hotline : +49 211 387 895 73</p>
                    </div>
                    <div>
                        <p>Address: EcoCare GmbH,</p>
                        <p>Kolberger Str. 7, 40599 Düsseldorf Germany</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About