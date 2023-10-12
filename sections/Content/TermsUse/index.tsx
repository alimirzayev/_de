import Link from 'next/link';
import styles from './styles.module.css';

const TermsUse = ({ lang }: { lang: 'en' | 'de' }) => {
    const isGerman = lang === 'de' ? true : false;
    const termsConditionsEnglish = [
        {
            id: 1,
            title: "General provisions, scope of application",
            clauses: [
                { id: '', clause: "The website, www.ecocare.center (hereinafter the “Ecocare Website”) and the Ecocare Application (hereinafter: “Ecocare App”) is provided by Ecolog Deutschland GmbH (“Ecolog”), which offers analyses to check for the presence of an infection with the SARS-CoV-2 virus (“corona virus”) by means of the COVID-19 rapid antigen test or PCR tests (both referred to as a “Test”) as well as issuance of a test certificate for video-monitored antigen self-tests for lay use (so-called self-tests)." },
                { id: '', clause: "The following general terms and conditions apply to the testing of (swab) samples taken at Ecolog's testing centers and to video-monitored antigen self-tests for lay use with subsequent issuance of a certificate on the test result." },
            ],
        },
        {
            id: 2,
            title: "Conclusion of a contract",
            clauses: [
                { id: 2.1, clause: "On the Ecocare Website or the Ecocare App, the Customer can select the specific product, i.e., the type of corona virus test, booking a online – certificate etc. from the Provider’s product range. Upon acceptance of Ecolog’s Standard Terms and Conditions and giving the data protection consent and the consent for a sample to be taken from the nose and throat region (nasopharyngeal zone), the Customer, by clicking on the “Book now” button, submits a legally binding offer to conclude a contract for the relevant service. The invoice can be retrieved in the Ecocare App as soon as the test result is available." },
                { id: 2.2, clause: "A contract between the Customer and Ecolog is formed only if Ecolog has sent the Customer an order confirmation by email to the confirmed email address." },
            ],
        },
        {
            id: 3,
            title: "Description of services",
            clauses: [
                { id: 3.1, clause: "Our products are different types of corona virus tests for the detection of a potential infection with the corona virus." },
                { id: 3.2, clause: "All our products are diagnostic procedures. The provided corona virus tests comply with legal requirements and certifications." },
                { id: 3.3, clause: "Even while complying with all regulations it cannot be excluded that test results may be incorrect or need to be repeated. This may be the case for example when insufficient biomass is available in a sampling despite sample was conducted in accordance with the respective regulations. Against this background, we recommend to book tests sufficient time for a possible second test. This applies in particular if the presentation of negative corona-virus test is required for further purposes (e.g. travel, attendance of and participation in events)." },
                { id: 3.4, clause: "The time until the test result is available varies depending on the product. The times indicated for the products RT PCR Test ≈ 3h, RT PCR Test ≈ 1.5h and RT PCR Test ≈ 30 min. are empirical values for your orientation. In exceptional cases, especially in case of capacity bottlenecks due to the dynamic development of the Corona pandemic, it may not be possible for us to meet the time indicated in the test name. We are required by law to provide a latest performance date for each product. Should the following performance times per product be exceeded, you will generally have the statutory rights available to you." },
            ],
        }
    ];
    const termsConditionsGerman = [
        {
            id: 1,
            title: "Allgemeines, Geltungsbereich",
            clauses: [
                { id: '', clause: "Die Webseite www.ecocare.center (im Folgenden „Ecocare-Website“) bzw. die Ecocare Application (im Folgenden: „Ecocare-App“) wird von der Ecolog Deutschland GmbH („Ecolog“) zur Verfügung gestellt, welche die Analyse auf das Vorliegen einer Infektion mit dem SARS-CoV-2-Virus („Corona-Virus“) anhand des COVID-19 Antigen Schnelltests oder PCR-Tests (beide „Test“ genannt) sowie videoüberwachte Antigentests zur Eigenanwendung (sog. Selbsttests) mit anschließender Zertifikatausstellung über das Testergebnis anbietet." },
                { id: '', clause: "Die nachfolgenden allgemeinen Geschäftsbedingungen gelten für den Test von (Abstrich-) Proben, welche an den Teststationen der Ecolog genommen werden und für die videoüberwachten Antigentests zur Eigenanwendung mit anschließender Zertifikatausstellung über das Testergebnis." },
            ],
        },
        {
            id: 2,
            title: "Vertragsschluss",
            clauses: [
                { id: 2.1, clause: "Der Kunde kann auf der Ecocare-Website bzw. der Ecocare-App aus dem Sortiment des Anbieters das konkrete Produkt, d.h. die Variante des Corona-Tests, Online – Zertifikat, usw. auswählen. Nach Akzeptieren der AGB des Ecolog, der Einwilligung zum Datenschutz und der Einwilligung zur Probenentnahme aus dem Nasen-Rachenraum, gibt der Kunde durch Anklicken des Buttons „Buchen“ ein rechtsverbindliches Angebot auf Abschluss eines Vertrages über die jeweilige Leistung ab. Die Rechnung kann in der Ecocare – App abgerufen werden, sobald das Testergebnis verfügbar ist." },
                { id: 2.2, clause: "Ein Vertrag zwischen dem Kunden und Ecolog kommt erst zustande, wenn Ecolog dem Kunden eine Auftragsbestätigung per E-Mail an die bestätigte E-Mail-Adresse zugesandt hat." },
            ],
        },
        {
            id: 3,
            title: "Leistungsbeschreibung",
            clauses: [
                { id: 3.1, clause: "Bei den angebotenen Produkten handelt es sich um unterschiedliche Testverfahren zur Ermittlung einer möglichen Infektion mit dem Corona-Virus." },
                { id: 3.2, clause: "Den verschiedenen Produkten ist gemein, dass es sich um diagnostische Verfahren handelt. Die angewendeten Verfahren entsprechen den gesetzlichen Vorgaben und Zertifizierungen." },
                { id: 3.3, clause: "Testergebnisse können unrichtig sein. Zudem kann es vorkommen, dass Tests wiederholt werden müssen. Dies ist beispielsweise der Fall, wenn trotz vorschriftsmäßiger Probeentnahme eine hinreichende Biomasse nicht vorhanden ist. Vor diesem Hintergrund empfehlen wir, Tests mit ausreichender Zeit für einen möglicherweise erforderlichen zweiten Test zu buchen. Dies gilt insbesondere dann, wenn die Vorlage eines Negativnachweises für bestimmte Zwecke erforderlich ist (beispielsweise Antritt von Reisen; Besuch von Veranstaltungen, Partizipation an Veranstaltungen)." },
                { id: 3.4, clause: "Die Zeit bis zur Bereitstellung des Testergebnisses variiert je nach Produkt. Bei den zeitlichen Angaben bei den Produkten RT PCR Test ≈ 3h, RT PCR Test ≈ 1.5h und RT PCR Test ≈ 30 min. handelt es sich um Erfahrungswerte, die zu Ihrer Orientierung dienen. Insbesondere bei Kapazitätsengpässen aufgrund der dynamischen Entwicklung rund um die Corona-Pandemie kann es sein, dass die beworbenen Bereitstellungszeiten ausnahmsweise nicht einhalten können. Wir sind gesetzlich dazu verpflichtet, für jedes Produkt einen spätesten Leistungszeitpunkt mitzuteilen. Sollten die nachfolgenden Leistungszeitpunkte je Produkt überschritten werden, stehen Ihnen grundsätzlich die gesetzlichen Rechte zur Verfügung." },
            ],
        }
    ];

    const termsConditions = isGerman ? termsConditionsGerman : termsConditionsEnglish;

    const termsConditions2English = [
        {
            id: 4,
            title: "Statutory right of cancellation",
            clauses: [
                { id: 4.1, clause: "Notification of the right to cancel" },
            ],
        },
        {
            id: '',
            title: "Right to cancel",
            clauses: [
                { id: '', clause: "You have the right to cancel this contract within fourteen days, without having to state reasons." },
                { id: '', clause: "The cancellation period runs for fourteen days from the date of concluding the contract." },
                { id: '', clause: "In order to exercise this right of cancellation, you must inform us (Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Germany, email: stornierung@ecocare.center, tel.: +49 211 387 895 73) of your decision to cancel this contract by means of a clear declaration (e.g. a letter sent by post, telefax or email). You may use the attached model cancellation form in order to do so, but its use is not compulsory." },
                { id: '', clause: "For the purposes of compliance with the cancellation period, it shall be sufficient if you send off the notification that you are exercising your right to cancel before expiry of the cancellation period." },
            ],
        },
        {
            id: "",
            title: "Consequences of cancellation",
            clauses: [
                { id: '', clause: "If you cancel this contract, we shall refund you for all payments that we have received from you, including delivery costs (except for the additional costs incurred as a result of selecting a type of delivery other than the cheapest standard delivery we have offered), without delay and, at the latest, within fourteen days of the date on which we received your contract cancellation notice. In order to effect this refund, we will use the same payment method that you used for the original transaction, unless a different method has been expressly agreed with you; under no circumstances will you be charged a fee for this repayment." },
                { id: '', clause: "You may wish both parties to perform this contract before you exercise your right of cancellation as set out in this contract. You are aware that by exercising this option, the right of cancellation will expire prematurely if, at your express request, both parties perform the contract in full before you have exercised your right of cancellation. You are also aware that you are obliged to pay compensation for the performance rendered up to the time of cancellation and that this may result in me still having to fulfil the contractual payment obligations for the period up to the time of cancellation." },
            ],
        },
        {
            id: '',
            title: "",
            clauses: [
                { id: 4.2, clause: "Model cancellation form" },
            ],
        },
        {
            id: '',
            title: "Model cancellation form",
            clauses: [
                { id: '', clause: "(Please complete and return this form if you wish to cancel the contract.)" },
                { id: '*', clause: "To: Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Deutschland, email: stornierung@ecocare.center" },
                { id: '*', clause: "I/we (*) hereby cancel the contract that I/we (*) have entered into for the purchase of the following goods (*)/provision of the following services (*)" },
                { id: '*', clause: "Name and place of the Ecolog test centre" },
                { id: '*', clause: "Booked on (*)/received on (*)" },
                { id: '*', clause: "Name of the customer" },
                { id: '*', clause: "Address of the customer" },
                { id: '*', clause: "Email of the customer" },
                { id: '*', clause: "Signature of the customer (for a paper notification only)" },
                { id: '(*)', clause: "Delete as applicable." },
            ],
        },
        {
            id: 5,
            title: "Cancellation terms",
            clauses: [
                { id: "", clause: "Upon expiry of the aforementioned cancellation period (14 days upon booking of the product), Ecolog’s cancellation terms are as follows:" },
                { id: "*", clause: "50% of the test price shall be retained:" },
                { id: "", clause: "After 14 days from the date of booking the appointment and prior to performance of the test; and" },
                { id: "*", clause: "100% of the test price shall be retained:" },
                { id: "", clause: "If the test has not been performed within 3 months of booking the appointment and the customer has not cancelled it within this time." },
                { id: "", clause: "The cancellation terms according to this clause do not apply to the booking of the “Online-Certificate”." }
            ],
        },
        {
            id: 6,
            title: "Payments",
            clauses: [
                { id: 6.1, clause: "All prices displayed on the Ecocare Website and the Ecocare App are inclusive of statutory VAT at the rate from time to time in force." },
                { id: 6.2, clause: "The Customer may make the payment by credit card. Payment shall be due immediately upon conclusion of the contract." },
                { id: 6.3, clause: `You hereby agree to receive any (re-)payments or possible credits that may be due on our part in electronic form (and not in cash). This shall not affect any right you may have to receive the repayment due upon cancellation by the same payment method that you used for the original transaction (see section 3.1 above). The repayment of the amount will be made no later than 14 days after receipt of the revocation notice to the Customer.` },
            ],
        },
        {
            id: 7,
            title: "Vouchers",
            clauses: [
                { id: 7.1, clause: "The voucher purchased by the customer through cooperation partners of the provider or by the provider itself, can be redeemed in the course of ordering a product. Only one voucher can be redeemed per order." },
                { id: 7.2, clause: "The price for the ordered services must be at least equal to the amount of the voucher. Any remaining credit will not be refunded. Voucher credit shall neither be paid out in cash nor shall interest be paid on it." },
                { id: 7.3, clause: `The voucher will not be refunded if the customer does not make use of the services paid for in full or in part with the voucher within the scope of his statutory right of revocation.` },
            ],
        },
        {
            id: 8,
            title: "Liability",
            clauses: [
                { id: 8.1, clause: "Ecolog shall bear unlimited liability for loss or damage resulting from injury to life, body or health that has been caused intentionally or through negligence by Ecolog itself or its vicarious agents. Ecolog shall also bear unlimited liability for other losses or damage based on an intentional or grossly negligent breach of obligation committed by Ecolog or its vicarious agents." },
                { id: 8.2, clause: "In the case of property damage and financial losses based on a breach of essential contractual obligations resulting from ordinary negligence on the part of Ecolog, liability shall be limited to the losses or damage that were foreseeable at the time of entry into the contract and typical for the type of contract; essential contractual obligations are obligations in respect of which fulfilment of the said obligations goes to the heart of the contract and the Customer can reasonably be expected to rely upon their fulfilment." },
                { id: 8.3, clause: "Liability is excluded in all other respects." },
                { id: 8.4, clause: "Insofar as liability on the part of Ecolog has been limited or excluded, the limitations or exclusions shall apply also to the personal liability of its employees, legal representatives and vicarious agents." },
                { id: 8.5, clause: "The liability limitations and exclusions under this section 8 do not affect liability under the mandatory statutory provisions of the German Product Liability Act (Produkthaftungsgesetz), or due to fraudulent concealment of a defect, or based on an issued guarantee." },
            ],
        },
        {
            id: 9,
            title: "Certification of test results of self-tests (Online-Certificate)",
            clauses: [
                { id: 9.1, clause: "The Customer may also order test certification of a video-monitored self-test (online-certificate). Issuing an online certificate is only possible for rapid tests for lay use that have been approved and validated by the Federal Institute for Drugs and Medical Devices (BfArM) and the Paul Ehrlich Institute. The list can be found at antigentest.bfarm.de/ords/f." },
                { id: 9.2, clause: `After conclusion of the contract, the customer must log in to his app account and click on the purchased product "Online Certificate". This will start the process of online certification.` },
                { id: 9.3, clause: "In order to carry out certification, the customer needs, in addition to a antigen self- test for lay use as defined in paragraph, a good Internet connection and his own valid identification document (ID card or passport). Identity documents from many countries are accepted." },
                { id: 9.4, clause: "The residence and nationality of the customer are irrelevant for the use of online certification." },
                { id: 9.5, clause: "The certification process starts with the verification of the identification document." },
                { id: 9.6, clause: "After successful verification, the customer performs the quick test in a video recording according to the instructions of Ecocare and the instruction leaf of the self-test kit. The steps listed therein must be followed exactly and the room must be sufficiently illuminated. Otherwise, the certification cannot be completed successfully. Errors in the execution of the test will result in an invalid test result and forfeiture of the acquired certification authorization." },
                { id: 9.7, clause: "If the certification process is interrupted due to technical problems on the part of the customer (e.g. interruption of the Internet connection, insufficient memory capacity of the terminal device used, or similar), the certification authorization shall expire and the test cannot be repeated with the quick test used in the process." },
                { id: 9.8, clause: "After error-free completion of the certification process, the customer will receive a medical test certificate about the test result in PDF format by e-mail within 2 hours." },
                { id: 9.9, clause: "The certificate will be dated to the time when the test result is available. The certificate is valid for 24h." },
                { id: '9.10', clause: "The provider operates test centers, which are authorized service providers according to § 6 Abs. 1 S.1 Nr. 2 Coronavirus Test Regulation (“TestV”). Thus, the customer can take advantage of PoC antigen tests and monitoring of antigen tests for self-testing at the provider's premises free of charge in one of its test centers. If the customer makes use of the service of a video-monitored antigen test for self-testing with subsequent issuance of a certificate on the test result, this service is not subject to the TestV and is therefore not free of charge. Please clarify for yourself whether the test certificate (due to the video-monitored antigen test for self-testing) issued by us is recognized by the respective institutions and in your respective federal state or district or municipality in the context of the purposes envisaged by you (travel, restaurant visit, visit to public institutions, etc.). Due to the large number of different regulations, we cannot assume any liability for this." },
                { id: 9.11, clause: "In the event of a positive test result, the provider may be required by law or by the authorities to forward the test result to the relevant health authority. In addition, the provider advises the customer that in the event of a positive test result, the behavioral obligations are to be observed, which is presented in the information sheet of the provider on the behavior in the event of positive SARS-CoV-2 PoC antigen test according to the Federal Institute for Drugs and Medical Devices." },
            ],
        },
        {
            id: 10,
            title: "Final provisions",
            clauses: [
                { id: 10.1, clause: "Ecolog is obliged to inform you that the European Commission provides an online platform as part of its Online Dispute Resolution facility. This platform can be accessed via the following link: https://ec.europa.eu/consumers/odr/. In this regard, we are also required to inform you of our email address. This is: info@ecolog-international.com." },
                { id: 10.2, clause: "Ecolog always strives to find an amicable solution to any disputes with Customers in relation to existing contracts. However, we would like to inform you that Ecolog is in no way obliged to participate in consumer conciliation procedures (according to the German Act on Alternative Dispute Resolution in Consumer Matters (Verbraucherstreitbeilegungsgesetz, VSBG)) and unfortunately does not offer you the possibility to participate in such proceedings." }
            ],
        }
    ]

    const termsConditions2German = [
        {
            id: 4,
            title: "Gesetzliches Widerrufsrecht",
            clauses: [
                { id: 4.1, clause: "Widerrufsbelehrung" },
            ],
        },
        {
            id: '',
            title: "Widerrufsrecht",
            clauses: [
                { id: '', clause: "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen." },
                { id: '', clause: "Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses." },
                { id: '', clause: "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Deutschland, E-Mail: stornierung@ecocare.center, Tel.: +49 211 387 895 73) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist." },
                { id: '', clause: "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden." },
            ],
        },
        {
            id: "",
            title: "Folgen des Widerrufs",
            clauses: [
                { id: '', clause: "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet." },
                { id: '', clause: "Sie können wünschen, dass beide Parteien diesen Vertrag schon vor Ausübung des in diesem Vertrag genannten Widerrufsrecht erfüllen. Ihnen ist bewusst, dass mit Ausübung dieser Möglichkeit das Widerrufsrecht vorzeitig erlischt, wenn auf Ihren ausdrücklichen Wunsch beide Parteien den Vertrag vollständig erfüllen, bevor Sie Ihr Widerrufsrecht ausgeübt habe. Ihnen ist auch bewusst, dass Sie zur Zahlung von Wertersatz für die bis zum Widerruf erbrachte Leistung verpflichtet sind und dies dazu führen kann, dass ich die vertraglichen Zahlungsverpflichtungen für den Zeitraum bis zum Widerruf noch erfüllen muss." },
            ],
        },
        {
            id: '',
            title: "",
            clauses: [
                { id: 4.2, clause: "Muster-Widerrufsformular" },
            ],
        },
        {
            id: '',
            title: "Muster-Widerrufsformular",
            clauses: [
                { id: '', clause: "(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)" },
                { id: '*', clause: "To: Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Deutschland, E-Mail:: stornierung@ecocare.center" },
                { id: '*', clause: "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)" },
                { id: '*', clause: "Name und Ort des Ecolog Testcenters " },
                { id: '*', clause: "Bestellt am (*)/erhalten am (*)" },
                { id: '*', clause: "Name des/der Verbraucher(s)" },
                { id: '*', clause: "Anschrift und E-Mail Adresse des/der Verbraucher(s)" },
                { id: '*', clause: "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)" },
                { id: '*', clause: "Datum" },
                { id: '(*)', clause: "Unzutreffendes streichen." },
            ],
        },
        {
            id: 5,
            title: "Stornobedingungen",
            clauses: [
                { id: "", clause: "Es gelten folgende Stornobedingungen der Ecolog nach Ablauf der Widerrufsfrist:" },
                { id: "*", clause: "Einbehalt 50% des Testpreises" },
                { id: "", clause: "Nach 14 Tagen nach Buchung des Termins und vor Durchführung des Tests" },
                { id: "*", clause: "Einbehalt 100% des Testpreises" },
                { id: "", clause: "Wenn der Test nicht innerhalb von 3 Monaten nach Buchung des Termins durchgeführt wird und Sie ihn nicht rechtzeitig abgesagt haben" },
                { id: "", clause: "Die Stornobedingungen gem. dieser Klausel gelten nicht im Falle der Buchung des Online-Zertifikats." }
            ],
        },
        {
            id: 6,
            title: "Zahlungen",
            clauses: [
                { id: 6.1, clause: "Alle Preise, die auf der Ecocare-Website bzw. der Ecocare-App angegeben sind, verstehen sich einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer." },
                { id: 6.2, clause: "Der Kunde kann die Zahlung per Kreditkarte vornehmen. Die Zahlung ist unmittelbar mit Vertragsschluss fällig." },
                { id: 6.3, clause: `Sie sind damit einverstanden, dass Sie eventuell fällige (Rück-) Zahlungen sowie mögliche Gutschriften unsererseits in elektronischer Form (und nicht in bar) erhalten. Ihr möglicherweise bestehendes Recht, nach einem Widerruf die Rückzahlung über dasselbe Zahlungsmittel zurückzuerhalten, das Sie bei der ursprünglichen Transaktion eingesetzt haben (s.o. Ziffer 3.1), bleibt hiervon unberührt. Die Rückzahlung des Betrages erfolgt spätestens 14 Tage nach Zugang der Widerrufserklärung an den Kunden.` },
            ],
        },
        {
            id: 7,
            title: "Gutscheine",
            clauses: [
                { id: 7.1, clause: "Der vom Kunden erworbener Gutschein über Kooperationspartner des Anbieters oder durch den Anbieter selber, kann im Zuge der Bestellung von einem Produkt eingelöst werden. Pro Bestellung ist nur ein Gutschein einlösbar." },
                { id: 7.2, clause: "Der Preis für die bestellten Leistungen muss mindestens dem Betrag des Gutscheins entsprechen. Etwaiges Restguthaben wird nicht erstattet. Gutschein-Guthaben wird weder in Bargeld ausgezahlt noch verzinst." },
                { id: 7.3, clause: `Der Gutschein wird nicht erstattet, wenn der Kunde die mit dem Gutschein ganz oder teilweise bezahlten Leistungen im Rahmen seines gesetzlichen Widerrufsrechts nicht in Anspruch nimmt.` },
            ],
        },
        {
            id: 8,
            title: "Haftung",
            clauses: [
                { id: 8.1, clause: "Ecolog haftet unbeschränkt für vorsätzlich oder fahrlässig durch sie selbst oder ihre Erfüllungsgehilfen verursachte Schäden, die aus der Verletzung des Lebens, des Körpers oder der Gesundheit resultieren. Ecolog haftet auch für sonstige Schäden unbegrenzt, die auf einer vorsätzlichen oder einer grob fahrlässigen Pflichtverletzung ihrerseits oder ihrer Erfüllungsgehilfen beruhen." },
                { id: 8.2, clause: "Für Sach- und Vermögensschäden, die auf einer einfach fahrlässigen Verletzung wesentlicher Vertragspflichten durch Ecolog beruhen, ist die Haftung auf den bei Vertragsschluss vorhersehbaren und für den Vertrag typischen Schaden begrenzt; wesentliche Vertragspflichten sind solche, deren Erfüllung den Vertrag prägen und auf deren Einhaltung der Kunde vertrauen darf." },
                { id: 8.3, clause: "Im Übrigen ist die Haftung ausgeschlossen." },
                { id: 8.4, clause: "Soweit die Haftung der Ecolog beschränkt oder ausgeschlossen ist, gelten die Beschränkungen oder Ausschlüsse auch für die persönliche Haftung ihrer Arbeitnehmer, gesetzlichen Vertreter und Erfüllungsgehilfen. " },
                { id: 8.5, clause: "Die Haftungsbeschränkungen und -ausschlüsse nach dieser Ziffer 8 berühren nicht die Haftung nach den zwingenden gesetzlichen Vorschriften des Produkthaftungsgesetzes, wegen arglistigen Verschweigens eines Mangels sowie der Übernahme einer Garantie." },
            ],
        },
        {
            id: 9,
            title: "Zertifizierung von Testergebnissen von Selbsttests",
            clauses: [
                { id: 9.1, clause: "Der Kunde kann aus dem Sortiment der vom Anbieter angebotenen Produkte auch nur die Zertifizierung von einem Selbsttests bestellen. Das Ausstellen eines Online-Zertifikats ist nur für Schnelltests für Laien möglich, die durch das Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM) und das Paul-Ehrlich-Institut geprüft und validiert wurden. Die Liste finden Sie unter https://antigentest.bfarm.de/ords/f?p=ANTIGENTESTS-AUF-SARS-COV-2:TESTS-ZUR-EIGENANWENDUNG-DURCH-LAIEN:5409994830299:::::&tz=1:00." },
                { id: 9.2, clause: `Nach Vertragsschluss muss sich der Kunde in seinem App-Account einloggen und auf das gekaufte Produkt „Online Certificate“ klicken. Damit fängt der Prozess der Online-Zertifizierung.` },
                { id: 9.3, clause: "Um eine Zertifizierung durchzuführen, benötigt der Kunde neben einem Schnelltest im Sinne von Absatz eine gute Internetverbindung und ein eigenes gültiges Ausweisdokument (Personalausweis oder Reisepass). Es werden Ausweisdokumente von vielen Ländern akzeptiert." },
                { id: 9.4, clause: "Der Wohnsitz und die Staatsangehörigkeit des Kunden sind irrelevant für die Inanspruchnahme der Online-Zertifizierung." },
                { id: 9.5, clause: "Die Zertifizierung beginnt mit der Verifizierung des Ausweisdokumentes." },
                { id: 9.6, clause: "Nach erfolgreicher Verifizierung führt der Kunde den Schnelltest im Rahmen einer Videoaufzeichnung nach der dem Schnelltest beiliegenden Anleitung aus. Die darin aufgeführten Schritte sind exakt einzuhalten und der Raum muss ausreichend beleuchtet sein. Anderenfalls kann die Zertifizierung nicht erfolgreich abgeschlossen werden. Fehler bei der Ausführung des Tests führen zu einem ungültigen Testergebnis und einem Verfall der erworbenen Zertifizierungsberechtigung." },
                { id: 9.7, clause: "Bei Abbruch des Zertifizierungsprozesses aufgrund technischer Probleme auf Seiten des Kunden (z.B. Abbruch der Internetverbindung, unzureichende Speicherkapazität des verwendeten Endgerätes, o.ä.) verfällt die Zertifizierungsberechtigung und der Test kann mit dem dabei genutzten Schnelltest nicht wiederholt werden." },
                { id: 9.8, clause: "Nach fehlerfreiem Abschluss des Zertifizierungsprozesses erhält der Kunde ein medizinisches Testzertifikat über das Testergebnis im PDF-Format per E-Mail innerhalb von 2 Stunden zugesandt." },
                { id: 9.9, clause: "Das Zertifikat wird auf den Zeitpunkt datiert, an dem das Testergebnis vorliegt. Das Zertifikat ist 24h gültig." },
                { id: '9.10', clause: "Der Anbieter betreibt Testzentren, die beauftragte Leistungserbringer gemäß § 6 Abs. 1 S.1 Nr. 2 TestV sind. Der Kunde kann also PoC-Antigentests und die Überwachung von Antigentests zur Eigenanwendung bei dem Anbieter vor Ort kostenfrei in einer seiner Testzentren in Anspruch nehmen. Wenn der Kunde den Service eines videoüberwachten Antigentests zur Eigenanwendung mit anschließender Zertifikatausstellung über das Testergebnis in Anspruch nimmt, ist diese Leistung nicht Gegenstand der TestV und deswegen auch nicht kostenfrei. Ob das von uns ausgestellte Testzertifikat nach einem telemedizinisch überwachten Antigen-Test zur Eigenanwendung im Rahmen der von Ihnen damit beabsichtigten Zwecke (Reise, Restaurantbesuch, Besuch öffentlicher Einrichtungen etc.) von den jeweiligen Institutionen und in Ihrem jeweiligen Bundesland bzw. Kreis bzw. Kommune anerkannt werden, klären Sie bitte selbst. Wegen der Vielzahl unterschiedlicher Regelungen können wir hierfür keine Gewähr übernehmen." },
                { id: 9.11, clause: "Im Fall eines positiven Testergebnisses kann der Anbieter gesetzlich oder behördlich verpflichtet sein, das Testergebnis an das zuständige Gesundheitsamt weiterzuleiten. Zusätzlich weist der Anbieter den Kunden darauf hin, dass bei einem positiven Testergebnis die Verhaltenspflichten zu beachten sind, die im Informationsblatt des Anbieters über das Verhalten bei positiven SARS-CoV-2 PoC-Antigentest gemäß Bundesinstitut für Arzneimittel und Medizinprodukte dargestellt ist." },
            ],
        },
        {
            id: 10,
            title: "Schlussbestimmungen",
            clauses: [
                { id: 10.1, clause: "Ecolog ist verpflichtet, Sie darüber zu informieren, dass im Hinblick auf die sog. Online-Streitbeilegung seitens der Europäischen Kommission eine entsprechende Online-Plattform bereitgehalten wird. Diese Plattform können Sie unter folgendem Link abrufen: https://ec.europa.eu/consumers/odr/. In diesem Zusammenhang sind wir darüber hinaus verpflichtet, Ihnen unsere E-Mail-Adresse mitzuteilen. Diese lautet: info@ecolog-international.com." },
                { id: 10.2, clause: "Ecolog bemüht sich stets, etwaige Unstimmigkeiten mit dem Kunden im Hinblick auf bestehende Verträge einvernehmlich zu klären. Wir möchten Sie jedoch darauf hinweisen, dass Ecolog zu keiner Teilnahme an einem Verbraucherschlichtungsverfahren (nach VSBG) verpflichtet ist und Ihnen die Teilnahme an einem solchen Verfahren leider auch nicht anbietet." }
            ],
        }
    ]

    const termsConditions2 = isGerman ? termsConditions2German : termsConditions2English;

    return (
        <section className={`${styles.tou} container`}>
            <div className={styles.touTitle}>
                {
                    isGerman ?
                        <h1>
                            Allgemeine<br />Geschäftsbedingungen
                        </h1>
                        :
                        <h1>General<br />
                            Terms and Conditions
                        </h1>
                }
            </div>
            <div className={styles.touFirst}>
                <h2>Ecolog Deutschland GmbH</h2>
                {isGerman
                    ?
                    <p>
                        Allgemeine Geschäftsbedingungen der Ecolog Deutschland GmbH im Rahmen von Verträgen, die über die Webseite <Link className='link' href={'https://www.ecocare.center'} target={'_blank'}>www.ecocare.center</Link> (im Folgenden „Ecocare-Website“) bzw. über die Ecocare Applikation (im Folgenden: „Ecocare-App“) zwischen Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, eingetragen im Handelsregister des Amtsgerichts Düsseldorf unter HRB 65967, (im Folgenden: „Anbieter“) und den in Punkt 2 bezeichneten Kunden (im Folgenden: „Kunde“) geschlossen werden.
                    </p>
                    :
                    <p>
                        Standard Terms and Conditions of Ecolog Deutschland GmbH in connection with contracts entered into via the website <Link className='link' href={'https://www.ecocare.center'} target={'_blank'}>www.ecocare.center</Link> (hereinafter the “Ecocare Website”) or via the Ecocare Application (hereinafter: “Ecocare App”) between Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, registered in the Commercial Register of the Local Court (Amtsgericht) in Düsseldorf under the number HRB 65967, (hereinafter: the “Provider”) and the customer referred to in section 2 (hereinafter: “Customer”).
                    </p>
                }

            </div>
            <div className={styles.touWrapper}>
                {termsConditions.map((term) => (
                    <div className={styles.dpnItem} key={term.id}>
                        <h2>{`${term.id}${term.id !== 0 ? `.` : ""} ${term.title}`}</h2>
                        {term.clauses.map((clause) => (
                            <p key={clause.id} style={{ fontWeight: 'normal' }}>
                                {`${clause.id} ${clause.clause}`}
                            </p>
                        ))}
                    </div>
                ))}

                <table border={1}>
                    <thead>
                        {isGerman
                            ?
                            <tr>
                                <th>Produktname</th>
                                <th>Spätester Zeitpunkt der Erfüllung</th>
                            </tr>
                            :
                            <tr>
                                <th>Product<br />Name</th>
                                <th>Latest date of performance</th>
                            </tr>
                        }

                    </thead>
                    <tbody>
                        <tr>
                            <td>{isGerman ? 'PoC-Antigen-Test' : 'PoC Antigen Test'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 30 Min. nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be made available to you no later than 30 min after the time sample was collected.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'PoC-Antikörper-Test' : 'PoC Antibody Test'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 30 Min. nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be provided to you no later than 30 min. after the time sample was collected.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'RT PCR Test 24 - 48h' : 'RT PCR Test 24h - 48h'}</td>
                            <td>{isGerman ? 'Aufgrund der teilweise erheblichen Unterschiede in der Lage und logistischen Anbindung der Apotheken an die jeweils auswertenden Laboren lässt sich das Zeitfenster zu Bereitstellung der Testergebnisse hier nicht weiter eingrenzen. Das Testergebnis wird Ihnen spätestens 48h nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'Due to the sometimes considerable differences in the location and logistical connection of the pharmacies to the respective evaluating laboratories, the time window for providing the test results cannot be narrowed down further here. The test result will be made available to you no later than 48 hours after the time of sample collection.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'RT PCR Test 24h' : 'RT PCR Test 24h'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 24h nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be provided to you no later than 24h after the time sample was collected.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'RT PCR Test 12h' : 'RT PCR Test 12h'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 12h nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be provided to you no later than 12h after the time sample was collected.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'RT PCR Test 6h' : 'RT PCR Test 6h'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 6h nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be provided to you no later than 6h after the time sample was collected.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'RT PCR Test ≈3h' : 'RT PCR Test ≈3h'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 4h nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be provided to you no later than 4h after the time sample was collected.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'RT PCR Test ≈1,5h' : 'RT PCR Test ≈1,5h'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 2h nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be provided to you no later than 2h after the time sample was collected.'}</td>
                        </tr>
                        <tr>
                            <td>{isGerman ? 'RT PCR Test ≈30min' : 'RT PCR Test ≈30min'}</td>
                            <td>{isGerman ? 'Das Testergebnis wird Ihnen spätestens 40 Min. nach dem Zeitpunkt der Probeentnahme zur Verfügung gestellt.' : 'The test result will be provided to you no later than 40 min. after the time sample was collected.'}</td>
                        </tr>
                    </tbody>
                </table>

                {termsConditions2.map((term) => (
                    <div className={styles.dpnItem} key={term.id}>
                        <h2>{`${term.id}${term.id !== '' ? `.` : ""} ${term.title}`}</h2>
                        {term.clauses.map((clause) => (
                            <p key={clause.id} style={{ fontWeight: 'normal' }}>
                                {`${clause.id} ${clause.clause}`}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TermsUse