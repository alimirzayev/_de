import Link from 'next/link';
import styles from './styles.module.css';

const Imprint = ({lang}: {lang: 'en' | 'de'}) => {
  const isGerman = lang == 'de' ? true : false;
  
  return (
    <section className={`${styles.imprint} container`}>
      <div className={styles.imprintTitle}>
        <h1>{isGerman ? 'Impressum' : 'Imprint'}</h1>
      </div>

      <div className={styles.imprintDetails}>
        <p>{isGerman ? 'Angaben gemäß § 5 TMG' : 'According to § 5 TMG'}</p>

        <div>
          <p>Ecolog Deutschland GmbH</p>
          <p>40599 Dusseldorf</p>
          <p>In der Steele 14</p>
        </div>

        <div>
          <p>{isGerman ? 'Handelsregister: HRB 65967' : 'Commercial register: HRB 65967'}C</p>
          <p>{isGerman ? 'Registergericht: Amtsgericht Düsseldorf' : 'Registration court: District Court of Düsseldorf'}</p>
          <p>{isGerman ? 'USt-ID: DE22679472' : 'VAT ID: DE22679472'}</p>
        </div>
      </div>

      <div className={styles.imprintDirector}>
        <h2>{isGerman ? 'Vertreten durch den Geschäftsführer:' : 'Represented by the managing director:'}</h2>
        <p>Fisnik Demiri</p>
      </div>

      <div className={styles.imprintContact}>
        <h2>{isGerman ? 'Kontakt' : 'Contact'}</h2>
        <div><p>email:</p>
          <Link href={`mailto:impressum@ecocare.center`}>impressum@ecocare.center</Link>
        </div>
      </div>

      <div className={styles.imprintContact}>
        <h2>Hotline</h2>
        <p>phone: +49 211 387 895 73</p>
        <p>{isGerman ? '(Unsere Hotline ist 24 Stunden / 7 Tage in der Woche für Sie erreichbar)' : '(You can reach our hotline 24 hours a day, 7 days a week)'}</p>
      </div>

      <div className={styles.pressContact}>
        <h2>{isGerman ? 'Pressekontakt' : 'Press Contact'}</h2>
        <p>presse@ecocare.center</p>

        <p>{isGerman ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)' : 'The European Commission provides a platform for online dispute resolution (OS)'}: <Link href={'https://ec.europa.eu/consumers/odr'} className={'link'} target={'_blank'}>https://ec.europa.eu/consumers/odr</Link>. {isGerman ? 'Unsere E-Mail-Adresse finden Sie oben im Impressum.' : 'Our e-mail address can be found above in the imprint.'}</p>

        <p>{isGerman ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.' : 'We are not willing or obliged to participate in dispute settlement procedures before a consumer arbitration board.'}</p>

        <p>{isGerman ? 'Haftung für Inhalte' : 'Liability for content'}</p>

        <p>{isGerman ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.' : 'As a service provider, we are responsible for our own content on these pages according to Section 7, Paragraph 1 of the German Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.'}</p>

        <p>{isGerman ? 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.' : 'Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the point in time at which knowledge of a specific infringement of the law is known. As soon as we become aware of any violations of the law, we will remove this content immediately.'}</p>

        <p>{isGerman ? 'Haftung für Links' : 'Liability for links'}</p>

        <p>{isGerman ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.' : 'Our offer contains links to external websites over which we have no influence. Therefore we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking'}</p>

        <p>{isGerman ? 'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.' : 'However, a permanent control of the content of the linked pages is not reasonable without concrete evidence of an infringement. As soon as we become aware of legal violations, we will remove such links immediately.'}</p>

        <p>{isGerman ? 'Urheberrecht' : 'Copyright'}</p>

        <p>{isGerman ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.' : 'The content and works on these pages created by the site operators are subject to German copyright law. The duplication, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use'}</p>

        <p>{isGerman ? 'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.' : 'Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, we ask that you inform us accordingly. As soon as we become aware of legal violations, we will remove such content immediately.'}</p>
      </div>
    </section>
  )
}

export default Imprint