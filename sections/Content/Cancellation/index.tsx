import styles from './styles.module.css';

const Cancellation = ({ lang }: { lang: 'en' | 'de' }) => {
    const isGerman = lang == 'en' ? false : true;

    const dataDe = [
        {
            title: 'Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.',
            desc: 'Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Deutschland, E-Mail: stornierung@ecocare.center, Fax: +49 (0) 211 622 750 199) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.'
        },
        {
            title: 'Folgen des Widerrufs',
            desc: 'Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.'
        }
    ];

    const dataEn = [
        {
            title: 'Right to cancel the contract',
            desc: 'You have the right to cancel this contract within fourteen days, without having to state reasons.The cancellation period runs for fourteen days from the date of concluding the contract.In order to exercise this right of cancellation, you must inform us (Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Germany, email: stornierung@ecocare.center, fax: +49 (0) 211 622 750 199) of your decision to cancel this contract by means of a clear declaration (e.g. a letter sent by post, telefax or email). You may use the attached model cancellation form in order to do so, but its use is not compulsory. For the purposes of compliance with the cancellation period, it shall be sufficient if you send off the notification that you are exercising your right to cancel before expiry of the cancellation period.'
        },
        {
            title: 'Consequences of cancellation',
            desc: 'If you cancel this contract, we shall refund you for all payments that we have received from you, including delivery costs (except for the additional costs incurred as a result of selecting a type of delivery other than the cheapest standard delivery we have offered), without delay and, at the latest, within fourteen days of the date on which we received your contract cancellation notice. In order to effect this refund, we will use the same payment method that you used for the original transaction, unless a different method has been expressly agreed with you; under no circumstances will you be charged a fee for this repayment.If you have asked for provision of the services to commence during the cancellation period, you shall pay us an appropriate amount that reflects the portion of the services, compared to the total scope of the services provided for under the contract, that have already been provided up until the date on which you notify us that you are exercising your right to cancel this contract.'
        }
    ];

    const data = isGerman ? dataDe : dataEn;

    const data2De = [
        {
            id: 1,
            title: "Model cancellation form",
            clauses: [
                { id: '', clause: "To: Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Deutschland, E-Mail:: stornierung@ecocare.center" },
                { id: '', clause: "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)" },
                { id: '', clause: "Name und Ort des Ecolog Testcenters " },
                { id: '', clause: "Bestellt am (*)/erhalten am (*)" },
                { id: '', clause: "Name des/der Verbraucher(s)" },
                { id: '', clause: "Anschrift und E-Mail Adresse des/der Verbraucher(s)" },
                { id: '', clause: "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)" },
                { id: '', clause: "Datum" },
            ],
        },
    ]

    const data2En = [
        {
            id: 1,
            title: "Model cancellation form",
            clauses: [
                { id: '', clause: "To: Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, Deutschland, email: stornierung@ecocare.center" },
                { id: '', clause: "I/we (*) hereby cancel the contract that I/we (*) have entered into for the purchase of the following goods (*)/provision of the following services (*)" },
                { id: '', clause: "Name and place of the Ecolog test centre" },
                { id: '', clause: "Booked on (*)/received on (*)" },
                { id: '', clause: "Name of the custome" },
                { id: '', clause: "Address of the customer" },
                { id: '', clause: "Signature of the customer (for a paper notification only)" },
                { id: '', clause: "Date" },
            ],
        },
    ]

    const data2 = isGerman ? data2De : data2En;

    const title = isGerman ? 'Widerrufsbelehrung' : 'Cancellation Policy'
    return (
        <section className={`${styles.cancellation} container`}>
            <div className={styles.cancellationTitle}>
                <h1>{title}</h1>
            </div>

            <div className="cancellationWrapper">
                {data?.map((item, index) => {
                    return (
                        <div className={styles.cancellationItem}>
                            <h3 className={styles.cancellationItemTitle}>{item?.title}</h3>
                            <p className={styles.cancellationItemDesc}>{item?.desc}</p>
                        </div>
                    )
                })}
                {data2.map((term) => (
                    <ul className={styles.cancellationListItem} key={term.id}>
                        <h3 className={styles.cancellationItemTitle}>{term.title}</h3>
                        <p className={styles.cancellationItemDesc}>({isGerman ? 'Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.' : 'Please complete and return this form if you wish to cancel the contract.'})</p>
                        {term.clauses.map((clause) => (
                            <li className={styles.cancellationItemDesc} key={clause.id} style={{ marginLeft: 20 }}>
                                {`${clause.id} ${clause.clause}`}
                            </li>
                        ))}
                        <p className={styles.cancellationItemDesc}>(*) {isGerman ? 'Unzutreffendes streichen.' : 'Delete as applicable'}</p>
                    </ul>
                ))}
                <div className={styles.cancellationItem}>
                    <h3 className={styles.cancellationItemTitle}>{isGerman ? 'Stornobedingungen' : 'Cancellation terms'}</h3>
                    <p className={styles.cancellationItemDesc}>{isGerman ? 'Es gelten folgende Stornobedingungen der Ecolog nach Ablauf der Widerrufsfrist:' : 'Upon expiry of the cancellation period, Ecolog’s cancellation terms are as follows:'}</p>
                    <li className={styles.cancellationItemDesc}>{isGerman ? 'Einbehalt 50% des Testpreises' : '50% of the test price shall be retained'}</li>
                    <li className={styles.cancellationItemDesc} style={{ marginLeft: 25 }}>{isGerman ? 'Nach 14 Tagen nach Buchung des Termins und vor Durchführung des Tests' : 'After 14 days from the date of booking the appointment and prior to performance of the test.'}</li>
                    <li className={styles.cancellationItemDesc}>{isGerman ? 'Einbehalt 100% des Testpreises' : '100% of the test price shall be retained'}</li>
                    <li className={styles.cancellationItemDesc} style={{ marginLeft: 25 }}>{isGerman ? 'Wenn der Test nicht innerhalb von 3 Monaten nach Buchung des Termins durchgeführt wird und Sie ihn nicht rechtzeitig abgesagt haben' : 'If the test has not been performed within 3 months of booking the appointment and you have not cancelled it in good time.'}</li>
                </div>
            </div>
        </section>
    )
}

export default Cancellation