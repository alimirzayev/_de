import styles from './styles.module.css';

const DataProtection = ({lang}: {lang: 'en' | 'de'}) => {
  const termsConditions = [
    {
      id: 1,
      title: "Introduction",
      clauses: [
        { id: '', clause: "Ecolog is one of the world’s leading providers of logistics solutions. This privacy policy (hereinafter the “Policy”) explains the relevant personal data processing operations and your corresponding data protection rights when using the website www.ecocare.center and affiliated websites, the Ecocare App and the services offered by Ecolog on these websites including, in particular, the EcoCare COVID-19 tests available at the locations specified on our websites or as ordering an online - certificate by means of video monitoring of the antigen test for lay use (so-called self-test)." },
      ],
    },
    {
      id: 2,
      title: "Mandatory information to be provided pursuant to the EU General Data Protection Regulation (GDPR)",
      clauses: [
        { id: 2.1, clause: "Controller responsible for the processing and contact details of the Data Protection Officer" },
        { id: '', clause: "The data controller and body responsible for the processing of personal data is:" },
        { id: '', clause: "Ecolog Deutschland GmbH" },
        { id: '', clause: "In der Steele 1440599" },
        { id: '', clause: "Düsseldorfinfo@ecolog-international.com" },
        { id: '', clause: "The data protection officer is:" },
        { id: '', clause: "Marc NeumannIBS data protection services and consulting GmbH" },
        { id: '', clause: "Zirkusweg 1 20359" },
        { id: '', clause: "dpo@ecolog-international.com" },
        { id: '', clause: "You can contact our Data Protection Officer using the same address with the addition “FAO: Data Protection Officer (Datenschutzbeauftragter)” or by email at: dpo@ecolog-international.com." },
        { id: 2.2, clause: "Processing of personal data, purposes and legal bases" },
        { id: '', clause: "Ecolog processes and stores various types of personal data" },
        { id: '2.2.1', clause: "Provision of the website and App" },
        { id: '', clause: "If you use our website and App, data concerning your usage (e.g. the date and time of your visit, the pages viewed and files accessed, the type and version of the browser you are using, the type of end device you are using and the operating system running on it, as well as your IP address) will be stored temporarily in a log file located on our server. Processing of the server log data is necessary for technical reasons in order to provide the website and services, and subsequently in order to ensure system security. Our legitimate interest in providing the website with our services constitutes the legal basis for the processing (Art. 6 (1)(f) of the GDPR). As the processing is an essential precondition for use of our website, there is no right of objection." },
        { id: '', clause: "The data will be erased after 12 days at the latest." },
        { id: '', clause: "Thereafter, the server log data may be evaluated in anonymised form for statistical purposes and to improve our internet presence. There is no link between the server log data and your personal data, nor will the server log data be combined in any way with other sources of personal data." },
        { id: '2.2.2', clause: "Creation of a customer account" },
        { id: '', clause: "In order to book a test appointment or a video-monitored online self-test you will need to have a customer account with us. If you register for a personal customer account, you will need to specify your name, gender, contact details (e.g. address, telephone number, email address), date of birth and set a personal password. Adding nationality and ID number are mandatory only for flights to Japan. We will process this registration data in order to set up and manage your customer account and for implementing future orders. To complete the registration process, you will be sent a link via SMS to the telephone number you have provided, which you will then need to click on. As a registered customer, you will have access (by means of your email address and the password you have chosen yourself) to your personal customer account, from where you will be able to view the progress of your orders, and also save and amend your personal settings (e.g. password and language settings)." },
      ],
    },
    {
      id: 3,
      title: "Security measures",
      clauses: [
        { id: '', clause: "Ecolog has introduced extensive security measures to ensure the security of personal data. This includes the following measures:" },
        { id: '*', clause: "Organisational measures: Preparation and implementation of an internal control plan, alongside regular instruction and further training of employees;"},
        { id: '*', clause: "Technical measures: Management of access rights to its systems, installation of an access control system, encryption of certain types of personal data and installation of security software;" },
        { id: '*', clause: "Physical measures: Restriction of access to all internal data centres (e.g. computer rooms or data storage rooms) and" },
        { id: '*', clause: "Contractual measures: Third parties hosting our systems are contractually bound to comply with our instructions and are subject to regular monitoring." },
      ],
    },
    {
      id: 4,
      title: "Amendments to this Policy",
      clauses: [
        { id: "", clause: "Ecolog strives to maintain the highest possible standards and continuously improve its services. This may therefore mean that we will change our services from time to time. Such changes may affect the processing of personal data. We reserve the right to amend this Policy at any time. The latest version from time to time in force is available at: www.ecocare.center. We recommend that you regularly check the latest status of this Policy.This version of the data privacy notice is valid since December 2021." }
      ],
    }
  ];

  const termsConditionsGerman = [
    {
      id: 1,
      title: "Einleitung",
      clauses: [
        { id: '', clause: "Ecolog ist ein weltweit führender Anbieter von Logistiklösungen. Diese Datenschutzrichtlinie (im Folgenden die „Richtlinie“) erläutert die relevante Verarbeitung personenbezogener Daten und Ihre entsprechenden Datenschutzrechte bei der Nutzung der Website www.ecocare.center und verbundener Websites, der Ecocare App sowie der von Ecolog auf diesen Websites angebotenen Dienstleistungen, insbesondere des EcoCare-COVID-19-Tests an den auf unseren Websites angegebenen Orten oder als Bestellung eines Online-Zertifikats mittels Videoüberwachung des Antigentests (sog. Selbstetsts)." },
      ],
    },
    {
      id: 2,
      title: "Pflichtangaben gemäß DSGVO",
      clauses: [
        { id: 2.1, clause: "Für die Verarbeitung Verantwortlicher und Kontaktdaten des Datenschutzbeauftragten" },
        { id: '', clause: "Datenverantwortlicher und für die Verarbeitung personenbezogener Daten verantwortliche Stelle ist" },
        { id: '', clause: "Ecolog Deutschland GmbH" },
        { id: '', clause: "In der Steele 1440599" },
        { id: '', clause: "Düsseldorfinfo@ecolog-international.com" },
        { id: '', clause: "Der Datenschutzbeauftragte ist:" },
        { id: '', clause: "Marc Neumann" },
        { id: '', clause: "IBS data protection services and consulting GmbH" },
        { id: '', clause: "Zirkusweg 1 20359" },
        { id: '', clause: "dpo@ecolog-international.com" },
        { id: '', clause: "Unseren Datenschutzbeauftragten erreichen Sie unter derselben Adresse mit dem Zusatz „z. Hd: Datenschutzbeauftragter“ oder unter dpo@ecolog-international.com." },
        { id: 2.2, clause: "Verarbeitung personenbezogener Daten, Zwecke und Rechtsgrundlage" },
        { id: '', clause: "Ecolog verarbeitet und speichert verschiedene personenbezogene Daten." },
        { id: '2.2.1', clause: "Bereitstellung der Website und App" },
        { id: '', clause: "Wenn Sie unsere Websites und App nutzen, werden Daten über Ihre Nutzung (wie Datum und Uhrzeit Ihres Besuches, aufgerufene Seiten und abgerufene Dateien, Typ und Version des von Ihnen verwendeten Browsers, Typ und Betriebssystem des von Ihnen verwendeten Endgerätes sowie Ihre IP-Adresse) vorübergehend in einer Logdatei auf unserem Server gespeichert. Die Verarbeitung der Serverlogdaten ist aus technischen Gründen erforderlich, um die Website und die Dienste bereitzustellen und anschließend die Systemsicherheit sicherzustellen." },
        { id: '', clause: "Die Daten werden spätestens nach 12 Tagen gelöscht." },
        { id: '', clause: "Die Serverlogdaten können anschließend in anonymisierter Form zu statistischen Zwecken und zur Verbesserung unseres Internetauftritts ausgewertet werden. Es besteht keine Verknüpfung zwischen den Serverlogdaten und Ihren personenbezogenen Daten und die Serverlogdaten werden in keiner Weise mit anderen Quellen personenbezogener Daten kombiniert." },
        { id: '2.2.2', clause: "Einrichtung eines Kundenkontos" },
        { id: '', clause: "Damit Sie einen Termin zum Test buchen oder ein Online-Zertifikat bestellen können, benötigen Sie ein Kundenkonto bei uns.  Wenn Sie sich für ein persönliches Kundenkonto registrieren, müssen Sie Namen, Geschlecht, Kontaktdaten (d. h. Adresse, Telefonnummer, E-Mail-Adresse), Geburtsdatum angeben und ein persönliches Passwort festlegen. Die Eingabe der Staatsangehörigkeit und Ausweisnummer sind nur für Flüge nach Japan verpflichtend einzugeben. Wir verarbeiten diese Registrierungsdaten zur Einrichtung und Verwaltung Ihres Kundenkontos sowie für die Abwicklung künftiger Bestellungen. Um die Registrierung abzuschließen, erhalten Sie per SMS auf die von Ihnen angegebene Telefonnummer einen Link, den Sie anschließend anklicken müssen. Als registrierter Kunde haben Sie (mittels Ihrer E-Mail-Adresse und des von Ihnen selbst gewählten Passworts) Zugang zu Ihrem persönlichen Kundenkonto, in dem Sie u.a. Ihren Bestellverlauf einsehen und Ihre persönlichen Einstellungen (z.B. Passworteinstellungen, Spracheinstellungen) speichern und ändern können." },
      ],
    },
    {
      id: 3,
      title: "Sicherheitsmaßnahmen",
      clauses: [
        { id: '', clause: "Ecolog hat umfassende Sicherheitsmaßnahmen ergriffen, um die Sicherheit personenbezogener Daten zu gewährleisten. Das beinhaltet folgende Maßnahmen:" },
        { id: '*', clause: "Organisatorische Maßnahmen: Erstellung und Umsetzung eines internen Kontrollplans, regelmäßige Schulung und Weiterbildung der Mitarbeiter;"},
        { id: '*', clause: "Technische Maßnahmen: Verwaltung der Zugriffsrechte zu seinen Systemen, Installation eines Zugriffssteuerungssystems, Verschlüsselung bestimmter personenbezogener Daten, Installation von Sicherheitsprogrammen;" },
        { id: '*', clause: "Physische Maßnahmen: Beschränkung des Zugangs zu allen internen Datenzentren (z. B. Computerräume, Datenspeicherräume) und " },
        { id: '*', clause: "Vertragliche Maßnahmen: Dritte, die unsere Systeme hosten, sind vertraglich an unsere Anweisungen gebunden und werden regelmäßig überwacht." },
      ],
    },
    {
      id: 4,
      title: "Änderungen dieser Richtlinie",
      clauses: [
        { id: "", clause: "Ecolog bemüht sich um höchste Standards und die kontinuierliche Verbesserung seiner Dienstleistungen. Daher kann es sein, dass wir unsere Dienstleistungen von Zeit zu Zeit ändern. Solche Änderungen können sich auf die Verarbeitung personenbezogener Daten auswirken. Wir behalten uns das Recht vor, diese Richtlinie jederzeit zu ändern. Die jeweils aktuelle Version ist unter www.ecocare.center verfügbar. Wir raten Ihnen, sich regelmäßig selbst über den aktuellen Stand dieser Richtlinie zu informieren." }
      ],
    }
  ];

  const title = lang == 'de' ? 'Datenschutzhinweise' : 'Data Protection Notice';
  const subtitle = lang == 'de' ? 'Datenschutz' : 'Privacy Policy';
  const renderData = lang == 'de' ? termsConditionsGerman : termsConditions;
 

  return (
    <section className={`${styles.dpn} container`}>
      <div className={styles.dpnTitle}>
        <h1>{title}</h1>

        <p>{subtitle}</p>
      </div>

      <div className={styles.dpnWrapper}>
        {renderData.map((term) => (
          <div className={styles.dpnItem} key={term.id}>
            <h2>{`${term.id}. ${term.title}`}</h2>
            {term.clauses.map((clause) => (
              <p style={{paddingBottom: 20}} key={clause.id}>
                {`${clause.id} ${clause.clause}`}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default DataProtection