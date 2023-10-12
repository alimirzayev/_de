import styles from './styles.module.css'

const Cookies = ({ lang }: { lang: 'en' | 'de' }) => {
    const isGerman = lang === 'de' ? true : false;
    const title = isGerman ? 'Notwendige Cookies' : 'Necessary cookies';

    const cookiesEn = [
        {
            active: true,
            title: 'EcoCare Cookie Consent Management',
            name: 'cookie_consent,cookieconsent_status',
            provider: 'Ecolog Germany GmbH',
            purpose: 'EcoCare Cookie Consent Management',
            runtime: '1 year',
            marketing: ''
        },
        {
            active: true,
            title: 'EcoCare Authorization HTTP Only Cookie',
            name: 'ndidentndpay_session-0',
            provider: 'Ecolog Germany GmbH',
            purpose: 'EcoCare Authorization HTTP Only Cookie',
            runtime: '20 Minutes',
            marketing: 'These technologies are used by advertisers to serve ads relevant to your interests.'
        },
        {
            active: false,
            title: 'Google Tag Manager',
            name: '_ga,_gat,_gid',
            provider: 'Google LLC',
            purpose: 'Google cookie to control advanced script and event handling.',
            runtime: '2 Years',
            marketing: ''
        },
        {
            active: false,
            title: 'Facebook pixels',
            name: '_fbp,act,c_user,datr,fr,m_pixel_ration,pl,presence,sb, spin, wd, xs',
            provider: 'Facebook Ireland Limited',
            purpose: 'Facebook cookie used for website analytics, ad targeting and ad measurement.',
            runtime: 'session / 1 year',
            marketing: ''
        }
    ]

    const cookiesDe = [
        {
            active: true,
            title: 'EcoCare Cookie Consent Management',
            name: 'cookie_consent,cookieconsent_status',
            provider: 'Ecolog Germany GmbH',
            purpose: 'EcoCare Cookie Consent Management',
            runtime: '1 year',
            marketing: ''
        },
        {
            active: true,
            title: 'EcoCare Authorization HTTP Only Cookie',
            name: 'ndidentndpay_session-0',
            provider: 'Ecolog Germany GmbH',
            purpose: 'EcoCare Authorization HTTP Only Cookie',
            runtime: '20 Minutes',
            marketing: 'These technologies are used by advertisers to serve ads relevant to your interests.'
        },
        {
            active: false,
            title: 'Google Tag Manager',
            name: '_ga,_gat,_gid',
            provider: 'Google LLC',
            purpose: 'Google cookie to control advanced script and event handling.',
            runtime: '2 Years',
            marketing: ''
        },
        {
            active: false,
            title: 'Facebook pixels',
            name: '_fbp,act,c_user,datr,fr,m_pixel_ration,pl,presence,sb, spin, wd, xs',
            provider: 'Facebook Ireland Limited',
            purpose: 'Facebook cookie used for website analytics, ad targeting and ad measurement.',
            runtime: 'session / 1 year',
            marketing: ''
        }
    ]

    const cookiesData = isGerman ? cookiesDe : cookiesEn;

    return (
        <section className={`${styles.cookies} container`}>
            <div className={styles.cookiesTitle}>
                <h1>{title}</h1>
            </div>

            <div className={styles.cookiesDesc}>
                {isGerman ?
                    <h2>Diese Technologien sind erforderlich, um die Kernfunktionalität<br/>der Webseite zu aktivieren.</h2>
                    :
                    <h2>These technologies are required to enable the core<br/>functionality of the website.</h2>
                }
            </div>

            <div className="cookiesWrapper">
                {cookiesData.map((item) => {
                    return(
                        <div className={styles.cookiesItem}>
                            <div className={styles.cookiesItemTop}>
                                <input type="checkbox" checked={true} value={item.title} style={{accentColor: item.active ? '#858FB0' : '#6183F1'}}/>
                                <h3>{item?.title}</h3>
                            </div>
                            <div className={styles.cookiesList}>
                                <div className={styles.cookiesListItem}>
                                    <span className={styles.cookiesListItemTitle}>Name:</span>
                                    <p className={styles.cookiesListItemDesc}>{item?.name}</p>
                                </div>
                                <div className={styles.cookiesListItem}>
                                    <p className={styles.cookiesListItemTitle}>Provider:</p>
                                    <p className={styles.cookiesListItemDesc}>{item?.provider}</p>
                                </div>
                                <div className={styles.cookiesListItem}>
                                    <p className={styles.cookiesListItemTitle}>Purpose:</p>
                                    <p className={styles.cookiesListItemDesc}>{item?.purpose}</p>
                                </div>
                                <div className={styles.cookiesListItem}>
                                    <p className={styles.cookiesListItemTitle}>Cookie Runtime::</p>
                                    <p className={styles.cookiesListItemDesc}>{item?.runtime}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Cookies