import Link from 'next/link';
import styles from './styles.module.css';

const TermsAndConditions = ({ lang }: { lang: 'en' | 'de' }) => {
  const isGerman = lang == 'de' ? true : false;
  const termsConditionsEnglish = [
    {
      id: 1,
      title: "General provisions and subject matter of the contract",
      clauses: [
        { id: 1.1, clause: "Ecolog Deutschland GmbH In der Steele, 1440599 Düsseldorf represented by the executive director (Geschäftsführer) Mr Fisnik Demiri (hereinafter: “Ecolog”), provides the services defined below to potential users (hereinafter: “Cus-tomers”) free of charge on the basis of these Standard Terms and Conditions of Use." },
        { id: 1.2, clause: "These Terms and Conditions of Use shall form part of every licence agreement and shall apply also to future contracts without any requirement for Ecolog to provide a corresponding notification in individual cases. These Terms and Conditions of Use shall be deemed approved by the User, at the latest, when the User begins using the services." },
        { id: 1.3, clause: "All declarations that the User issues to Ecolog, including – in particular and by way of example – declarations of termination, must, as a minimum, be issued in text form within the meaning of section 126b of the German Civil Code (Bürgerliches Ge-setzbuch, BGB) (for the avoidance of doubt: a simple email shall suffice)." },
        { id: 1.4, clause: "The subject matter of this contract comprises the use of the software offered to the Customer free of charge for the purposes of COVID-19 test management (“Applica-tions”)." },
        { id: 1.5, clause: "On the basis of the licence agreement established in accordance with these Terms and Conditions of Use, Ecolog grants the Customer a non-transferable, non-sublicensable licence to use the Applications solely for private purposes and solely in accordance with these Terms and Conditions of Use." },
        { id: 1.6, clause: "Ecolog shall give the Customers sufficient advance notice of any changes or modifica-tions to the Applications." }
      ],
    },
    {
      id: 2,
      title: "Registration and contract conclusion",
      clauses: [
        { id: 2.1, clause: "Use of the Applications shall require prior registration by the Customer. As a precondi-tion for registration, the User must first give an express declaration of consent, declar-ing that he/she wishes to use the Applications, and agrees to these Terms and Condi-tions of Use and the separate Privacy Policy, which can be accessed during the regis-tration process." },
        { id: 2.2, clause: "At the final confirmation stage, the Customer will have the opportunity to identify any data input errors made during the registration process and correct these using the de-lete and change function before submitting the registration application." },
        { id: 2.3, clause: "Upon completion of the registration process, an email containing an activation link will be sent to the Customer’s specified email address; this link will be valid for 24 hours." },
        { id: 2.4, clause: "The licence agreement will enter into effect when the Customer clicks on the activation link." },
        { id: 2.5, clause: "During the registration process, the Customer will also be asked to give his/her con-sent to allow Ecolog to send him/her additional information – insofar as this is permis-sible under data protection law – including a newsletter and details of other services provided by the service provider. The specific details are set out in a separate Privacy Policy." },
      ],
    },
    {
      id: 3,
      title: "Obligations of the Customer",
      clauses: [
        { id: 3.1, clause: "This Customer must store his/her username and password securely against access by unauthorised third parties and must not divulge this information to third parties." },
        { id: 3.2, clause: "It is possible to change the password at any time. Moreover, the Customer under-takes to change his/her password at regular intervals (at least every 3 months). The Customer must change his/her password immediately if there is reason to suspect that an unauthorised person has acquired the username and password." },
        { id: 3.3, clause: "The Customer must ensure that the information he/she has provided is always up-to-date and accurate. In particular, the Customer must inform Ecolog immediately in the event of a suspected security breach or suspected misuse of the Applications." },
        { id: 3.4, clause: "The Customer may use the Applications only within the described scope and solely in accordance with these Terms and Conditions of Use. In any event, the Customer is prohibited from selling the Applications or using them for his/her own economic pur-poses (in the broadest sense), unless Ecolog has given its prior written consent to this." },
        { id: 3.5, clause: "In this respect, the Customer warrants that he/she will use the Applications in a man-ner compliant with the applicable laws and regulations." },
        { id: 3.6, clause: "In addition, the Customer acknowledges that he/she is solely responsible for (i) his/her technical equipment and its security as well as for any risks arising therefrom, and (ii) for all data and/or content that he/she uploads. To this extent, the Customer shall in-demnify Ecolog against any claims that may be asserted against Ecolog in this con-nection by third parties." },
      ],
    },
    {
      id: 4,
      title: "Term, termination and access blocking",
      clauses: [
        { id: 4.1, clause: "Upon its entry into effect in accordance with section 2.4, the licence agreement shall run for an indefinite term." },
        { id: 4.2, clause: "The Customer or Ecolog may terminate the licence agreement at any time, subject to a notice period of 14 days." },
        { id: 4.3, clause: "If there is good cause for doing so, Ecolog shall be entitled to block the Customer’s access to the Applications without notice, on either a temporary or permanent basis, and/or to terminate the licence agreement. In particular, good cause shall be deemed to exist if the Customer or an unauthorised third party misuses the customer portal, or if the Customer persistently violates relevant statutory provisions or breaches these Terms and Conditions of Use." },
      ],
    },
    {
      id: 5,
      title: "Notice of the right to withdraw upon registration",
      clauses: [
        { id: 5.1, clause: "The declaration given for the purposes of using the Customer portal may be withdrawn within 14 days in text form (e.g. letter, fax or email), without having to state reasons. The withdrawal period shall run for 14 days from the date of the Customer’s registra-tion on the Customer portal." },
        { id: 5.2, clause: "For this purpose, the Customer may use the Withdrawal Declaration or another unam-biguous declaration." },
        { id: 5.3, clause: "For the purposes of compliance with the withdrawal period, it shall be sufficient if the Customer sends off the notification that he/she is exercising the right to withdraw be-fore the expiry of the withdrawal period." },
        { id: 5.4, clause: "5.4 The withdrawal must be sent to:Ecolog Deutschland GmbHIn der Steele, 1440599 DüsseldorfEmail: stornierung@ecocare.center" },
      ],
    },
    {
      id: 6,
      title: "Limitation of liability",
      clauses: [
        { id: 6.1, clause: "Ecolog shall bear unlimited liability for injury to the Customer’s life, body or health caused by Ecolog or its vicarious agents. Ecolog shall furthermore bear unlimited liabil-ity for losses or damage caused intentionally or through gross negligence by Ecolog or its vicarious agents." },
        { id: 6.2, clause: "In all other respects, Ecolog shall be liable only for culpable breaches of essential con-tractual obligations. Essential contractual obligations means those obligations whose fulfilment is essential for the proper execution of the licence agreement and upon which the User can reasonably be expected to rely and regularly does so. However, claims for damages based on breaches of essential contractual obligations resulting from ordinary negligence shall be limited to the foreseeable losses or damage that are typical for the type of contract." },
        { id: 6.3, clause: "6.3 Insofar as permitted by law and subject to the provisions in sections 6.1 and 6.2, liabil-ity is excluded for losses or damage resulting from breaches of obligations that are not essential contractual obligations and which were caused through ordinary negligence on the part of Ecolog or its vicarious agents." },
        { id: 6.4, clause: "Ecolog shall not be liable for the constant and uninterrupted availability of the Applica-tions or the uninterrupted contact communications as, given the current technological state of the art, the data connection via the internet cannot be guaranteed to operate without faults and/or to be available at all times." },
        { id: 6.5, clause: "Liability on the part of Ecolog for losses or damage caused by misuse of the password and incorrect entries in the customer portal is excluded. The Customer must check all data that he/she enters for completeness and accuracy and shall therefore be re-sponsible for the data that he/she has entered." },
      ],
    },
    {
      id: 7,
      title: "Data protection",
      clauses: [
        { id: 7.1, clause: "All personal data entered in the customer portal will be collected, processed and used in accordance with the statutory provisions on the protection of personal data from time to time in force and only to the extent necessary for fulfilment of the contractual subject matter." },
        { id: 7.2, clause: "If the Customer has given his/her separate consent, the Customer’s personal data may also be used additionally in order to provide the Customer with additional infor-mation about the services offered by the service provider and the use of personal da-ta." },
        { id: 7.3, clause: "During the registration process, the Customer will be informed about the nature, scope and purpose of the collection, processing, use and transfers of personal data in a separate Privacy Policy." },
      ],
    },
    {
      id: 8,
      title: "Amendments to these Terms and Conditions of Use",
      clauses: [
        { id: 8.1, clause: "These Terms and Conditions of Use apply to the exclusion of all other terms and con-ditions. Deviating, conflicting or supplementary standard terms and conditions will only form part of a licence agreement if, and to the extent that, Ecolog has agreed to them in writing." },
        { id: 8.2, clause: "Ecolog shall be entitled to adjust these Terms and Conditions of Use with effect for the future. The Customer shall be informed of any adjustments made in this respect by email sent 4 weeks prior to their effective date." },
        { id: 8.3, clause: "The Customer may object to the adjustment prior to the effective date. If the Customer does not object to an adjustment in good time, the adjustment shall be deemed ac-cepted by the Customer." },
      ],
    },
    {
      id: 9,
      title: "Rights of access and withdrawal",
      clauses: [
        { id: 9.1, clause: "The Customer shall be entitled to receive, at any time, free of charge and without hav-ing to give reasons, information regarding his/her data that are stored by Ecolog." },
        { id: 9.2, clause: "The Customer may, at any time, obtain restriction of access to, or rectification or erasure of, his/her data that have been provided to Ecolog, provided that no statutory or official regulations prevent this; in the latter case, Ecolog shall inform the Customer of any such statutory or official regulations." },
        { id: 9.3, clause: "The Customer may furthermore, at any time and without having to give reasons, with-draw consent he/she has given to the data collection and use. Such notice of with-drawal can be sent, using a withdrawal declaration that has been provided for this pur-pose or by means of another unambiguous declaration, to the contact address speci-fied in section 5.4. Further questions relating to the data protection notices and the processing of the Customer’s personal data may be sent to the contact points speci-fied in section 5.4 at any time." },
      ],
    },
    {
      id: 10,
      title: "Final provisions",
      clauses: [
        { id: 10.1, clause: "The licence agreement, including these Terms and Conditions of Use, constitutes the entire agreement with respect to the contractual subject matter and supersedes all earlier written or oral agreements." },
        { id: 10.2, clause: "If a provision of the licence agreement, including these Terms and Conditions of Use, should be or become invalid or void, in whole or in part, this shall not affect the validity of the remaining provisions. In such case, the invalid or void provision shall be re-placed by a provision that most closely reflects what the parties would have agreed upon, in a manner permitted by law, based on the spirit and purpose of the original provision and the licence agreement, if they have been aware that the original provi-sion was invalid or void. The foregoing shall apply also to any provisions that the Par-ties may have unintentionally omitted from the licence agreement, including these Terms and Conditions of Use. If a provision of these Standard Terms and Conditions of Use should be invalid, this shall not affect the remaining provisions." },
        { id: 10.3, clause: "Amendments or supplements to a licence agreement must be executed in writing. The same shall apply also to a waiver of this written-form requirement.10.4 All licence agreements and any disputes arising out of them shall be subject to the laws of the country of the User’s habitual place of residence. In all other respects, the law of the Federal Republic of Germany shall apply. The United Nations Convention on Contracts for the International Sale of Goods (CISG) shall not apply.10.5 The European Commission operates an Online Dispute Resolution platform, which can be accessed via this link. Ecolog excludes this route as Ecolog is under no obligation to submit itself to this dispute resolution process." },
      ],
    },
  ];

  const termsConditionsGerman = [
    {
      id: 1,
      title: "Allgemeine Bestimmungen und Vertragsgegenstand",
      clauses: [
        { id: 1.1, clause: "Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf vertreten durch den Geschäftsführer Herrn Fisnik Demiri (im Folgenden: „Ecolog“), stellt potentiellen Nutzern (im Folgenden: „Kunden“) auf der Grundlage dieser Allgemeinen Nutzungsbedingungen die nachstehend definierten Dienste kostenfrei zur Verfügung." },
        { id: 1.2, clause: "Diese Nutzungsbedingungen werden Bestandteil jedes Nutzungsvertrages und gelten auch für künftige Verträge, ohne dass im Einzelfall ein entsprechender Hinweis seitens der Ecolog erforderlich ist." },
        { id: 1.3, clause: "Alle Erklärungen, die der Nutzer gegenüber Ecolog abgibt – das gilt insbesondere für bspw. Kündigungserklärungen, sind mindestens in Textform im Sinne von § 126b BGB abzugeben (zur Klarstellung: eine einfache E-Mail ist ausreichend)." },
        { id: 1.4, clause: "Gegenstand dieses Vertrages ist die dem Kunden kostenfrei angebotene Nutzung der Software zum COVID-19 Testmanagement („Anwendungen“)." },
        { id: 1.5, clause: "Auf Basis des nach Maßgabe dieser Nutzungsbedingungen zustande gekommenen Nutzungsvertrages gewährt gewährt Ecolog dem Kunden ein nicht übertragbares, nicht unterlizenzierbares Recht, die Anwendungen ausschließlich zu privaten Zwecken sowie ausschließlich nach Maßgabe dieser Nutzungsbedingungen zu nutzen." },
        { id: 1.6, clause: "Ecolog wird die Kunden über Veränderungen oder Modifzierungen der Anwendungen rechtzeitig im Voraus informieren." }
      ],
    },
    {
      id: 2,
      title: "Registrierung und Vertragsschluss",
      clauses: [
        { id: 2.1, clause: "Die Nutzung der Anwendungen bedarf einer vorherigen Registrierung des Kunden. Voraussetzung für die Registrierung ist die ausdrückliche Einverständniserklärung des Kunden, dass er die Anwendungen in Anspruch nehmen möchte sowie diese Nutzungsbedingungen und die gesonderte Datenschutzerklärung, die bei Registrierung aufgerufen werden kann, akzeptiert." },
        { id: 2.2, clause: "Etwaige Eingabefehler während der Registrierung kann der Kunde bei der abschließenden Bestätigung erkennen und mit Hilfe der Lösch- und Änderungsfunktion vor Absendung des Registrierungsantrages korrigieren." },
        { id: 2.3, clause: "Nach Abschluss der Registrierung erhält der Kunde eine E-Mail mit einem Aktivierungslink an die angegebene E-Mail-Adresse, der für 24 Stunden gültig ist." },
        { id: 2.4, clause: "Nach Betätigung des Aktivierungslinks ist Nutzungsvertrag zustande gekommen." },
        { id: 2.5, clause: "Zudem wird der Kunde bei Registrierung um sein Einverständnis gebeten, dass ihm durch Ecolog weitere ihm – soweit datenschutzrechtlich zulässig – auch Informationen Newsletter sowie über weitergehende Dienstleistungen durch den Dienstleister zur übermittelt werden dürfen. Die Einzelheiten sind in der separat aufgeführten Datenschutzerklärung geregelt." },
      ],
    },
    {
      id: 3,
      title: "Pflichten des Kunden",
      clauses: [
        { id: 3.1, clause: "Der Kunde ist verpflichtet, seinen Benutzernamen und das Passwort vor dem Zugriff durch unberechtigte Dritte geschützt aufzubewahren und diese Angaben nicht an Dritte weiterzugeben." },
        { id: 3.2, clause: "Es besteht jederzeit die Möglichkeit der Änderung des Passworts. Zugleich verpflichtet sich der Kunde, von dieser Möglichkeit in regelmäßigen Abständen (mindestens alle 3 Monate) Gebrauch zu machen. Der Kunde hat sein Passwort unverzüglich zu ändern, wenn der Verdacht besteht, dass ein Unbefugter in den Besitz von Benutzernamen und Passwort gekommen ist." },
        { id: 3.3, clause: "Der Kunde hat sicherzustellen, dass die von ihm hinterlegten Informationen stets aktuell und richtig sind. Insbesondere hat der Kunde die Ecolog im Falle einer vermuteten Sicherheitsverletzung oder eines Missbrauchs der Anwendungen unverzüglich zu informieren." },
        { id: 3.4, clause: "Der Kunde darf die Anwendungen nur in dem beschriebenen Umfang sowie ausschließlich im Einklang mit diesen Nutzungsbedingungen nutzen. Es ist dem Kunden in jedem Falle untersagt, die Anwendungen – ohne vorherige schriftliche Zustimmung der Ecolog – zu verkaufen oder im weitesten Sinne für eigene wirtschaftliche Zwecke zu nutzen." },
        { id: 3.5, clause: "Dabei gewährleistet der Kunde, dass er die Anwendungen im Rahmen der geltenden Gesetze und Vorschriften nutzt." },
        { id: 3.6, clause: "Zudem erkennt der Kunde an, dass ausschließlich er für (i) seine technische Ausstattung, deren Sicherheit sowie eventuell davon ausgehende Risiken und (ii) für alle durch ihn hochgeladenen Daten und/oder Inhalte verantwortlich ist. In diesem Umfang stellt der Kunde die Ecolog von jeglichen Ansprüchen Dritter, die in diesem Zusammenhang gegenüber der Ecolog geltend gemacht werden, frei." },
      ],
    },
    {
      id: 4,
      title: "Laufzeit, Kündigung und Sperrung",
      clauses: [
        { id: 4.1, clause: "Nach Zustandekommen gemäß Ziffer 2.4 läuft der Nutzungsvertrag mit unbestimmter Laufzeit" },
        { id: 4.2, clause: "Der Kunde oder Ecolog können den Nutzungsvertrag jederzeit mit einer Frist von 14 Tagen kündigen." },
        { id: 4.3, clause: "Bei Vorliegen eines wichtigen Grundes ist Ecolog berechtigt, den Zugang eines Kunden zu den Anwendungen vorübergehend oder dauerhaft fristlos zu sperren und/oder zu kündigen. Ein wichtiger Grund liegt insbesondere vor, wenn der Kunde oder ein unbefugter Dritter das Kundenprotal missbräuchlich nutzen oder wenn der Kunde nachhaltig gegen einschlägige gesetzliche Vorschriften oder die vorliegenden Nutzungsbedingungen verstößt." },
      ],
    },
    {
      id: 5,
      title: "Widerrufsbelehrung bei Registrierung",
      clauses: [
        { id: 5.1, clause: "Die Erklärung zur Nutzung des Kundenportals kann innerhalb von 14 Tagen ohne Angaben von Gründen in Textform (z.B. Brief, Fax, E-Mail) widerrufen werden. Die Widerrufsfrist beträgt 14 Tage ab dem Zeitpunkt, an dem sich der Kunde auf dem Kundenportal registriert hat." },
        { id: 5.2, clause: "Der Kunde kann dafür die Widerrufserklärung verwenden oder eine andere eindeutige Erklärung." },
        { id: 5.3, clause: "Zur Wahrung der Widerrufsfrist reicht es aus, dass der Kunde die Mitteilung über die Ausübung des Widerrufs vor Ablauf der Widerrufsfrist absendet." },
        { id: 5.4, clause: "Der Widerruf ist zu richten an: Ecolog Deutschland GmbH, In der Steele 14, 40599 Düsseldorf, E-Mail: stornierung@ecocare.center" },
      ],
    },
    {
      id: 6,
      title: "Haftungsbeschränkung",
      clauses: [
        { id: 6.1, clause: "Ecolog haftet unbeschränkt für die durch Ecolog oder deren Erfüllungsgehilfen herbeigeführte Verletzung des Lebens, des Körpers oder der Gesundheit des Kunden. Ecolog haftet zudem unbeschränkt für die durch Ecolog oder deren Erfüllungsgehilfen vorsätzlich oder grob fahrlässig verursachten Schäden." },
        { id: 6.2, clause: "Im Übrigen haftet Ecolog nur wegen der schuldhaften Verletzung wesentlicher Vertragspflichten. Wesentliche Vertragspflichten sind solche Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Nutzungsvertrages erst ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertraut und vertrauen darf. Der Schadensersatzanspruch für die leicht fahrlässig verursachte Verletzung wesentlicher Vertragspflichten ist jedoch auf den vertragstypischen vorhersehbaren Schaden begrenzt." },
        { id: 6.3, clause: "Soweit gesetzlich zulässig und vorbehaltlich der Regelungen in Ziffern 6.1 und 6.2 ist eine Haftung für leicht fahrlässig durch Ecolog oder deren Erfüllungsgehilfen verursachte Schäden aus der Verletzung von Pflichten, die keine wesentlichen Vertragspflichten darstellen, ausgeschlossen." },
        { id: 6.4, clause: "Ecolog haftet nicht für die ständige und ununterbrochene Verfügbarkeit der Anwendungen oder die ununterbrochene Kontaktübermittlung, weil die Datenverbindung über das Internet nach dem derzeitigen Stand der Technik nicht fehlerfrei und / oder jederzeit verfügbar gewährleistet werden kann." },
        { id: 6.5, clause: "Eine Haftung der Ecolog für Schäden, die durch den Missbrauch des Passwortes und durch fehlerhafte Eingabe im Kundenportal verursacht werden, ist ausgeschlossen. Der Kunde hat alle von ihm eingegebenen Daten auf Vollständigkeit und Richtigkeit zu prüfen und trägt daher die Verantwortung für die von ihm eingegebenen Daten." },
      ],
    },
    {
      id: 7,
      title: "Datenschutz",
      clauses: [
        { id: 7.1, clause: "Alle im Kundenportal hinterlegten und / oder entstehenden personenbezogenen Daten werden im Rahmen der jeweils geltenden gesetzlichen Vorschriften für den Schutz personenbezogener Daten nur erhoben, verarbeitet und genutzt, soweit dies für die Erfüllung des Vertragsgegenstandes erforderlich ist." },
        { id: 7.2, clause: "Bei Vorliegen einer gesonderten Einwilligung des Kunden können personenbezogene Daten des Kunden darüber hinaus auch genutzt werden, um die Kunden über weitere Informationen zum Dienstleistungsangebot der Dienstleister und zur Verwendung persönlicher Daten zu informieren." },
        { id: 7.3, clause: "Der Kunde wird bei der Registrierung über Art, Umfang und Zweck der Erhebung, Verarbeitung, Nutzung und Übermittlung personenbezogener Daten in einer gesonderten Datenschutzerklärung unterrichtet." },
      ],
    },
    {
      id: 8,
      title: "Änderung dieser Nutzungsbedingungen",
      clauses: [
        { id: 8.1, clause: "Diese Nutzungsbedingungen gelten unter Ausschluss aller anderen Bedingungen. Abweichende, widersprechende oder ergänzende allgemeine Geschäftsbedingungen werden nur Bestandteil eines Nutzungsvertrages, wenn und soweit Ecolog diesen schriftlich zugestimmt hat." },
        { id: 8.2, clause: "Änderungen dieser Nutzungsbedingungen werden Ihnen spätestens sechs (6) Wochen vor dem vorgeschlagenen Zeitpunkt ihres Wirksamwerdens in Textform angeboten." },
        { id: 8.3, clause: "Der Kunde kann der Anpassung vor dem Zeitpunkt des Inkrafttretens widersprechen. Widerspricht der Kunde einer Anpassung nicht rechtzeitig, so gilt die Anpassung als vom Kunden akzeptiert." },
      ],
    },
    {
      id: 9,
      title: "Auskunft- und Widerrufsrecht",
      clauses: [
        { id: 9.1, clause: "Der Kunde erhält jederzeit ohne Angabe von Gründen kostenfrei Auskunft über seine bei der Ecolog gespeicherten Daten." },
        { id: 9.2, clause: "Der Kunde kann jederzeit seine bei der Ecolog hinterlegten Daten sperren, berichtigen oder löschen lassen, soweit keine gesetzliche oder behördliche Vorschrift dem entgegensteht; im letzteren Falle wird Ecolog den Kunden über eine solche gesetzliche oder behördliche Vorschrift informieren." },
        { id: 9.3, clause: "Weiterhin kann der Kunde jederzeit eine erteilte Einwilligung zur Datenerhebung und Verwendung ohne Angaben von Gründen widerrufen. Dies kann durch eine dafür vorgesehene Widerrufserklärung oder eine andere eindeutige Erklärung, die an die in Ziffer 5.4 genannte Kontaktadresse erfolgen. Weitergehende Fragen zu den Hinweisen zum Datenschutz und zur Verarbeitung der persönlichen Daten der Kunden können jederzeit über die in Ziffer 5.4 genannte Kontaktmöglichkeit adressiert werden." },
      ],
    },
    {
      id: 10,
      title: "Schlussbestimmungen",
      clauses: [
        { id: 10.1, clause: "Der Nutzungsvertrag einschließlich dieser Nutzungsbedingungen stellt die vollständige Vereinbarung in Bezug auf den Vertragsgegenstand dar und ersetzt alle früheren schriftlichen oder mündlichen Vereinbarungen." },
        { id: 10.2, clause: "Sollte eine Regelung des Nutzungsvertrages einschließlich dieser Nutzungsbedingungen, ganz oder teilweise unwirksam oder nichtig sein oder werden, so wird die Wirksamkeit der übrigen Regelungen davon nicht berührt. An die Stelle der unwirksamen oder nichtigen Regelung tritt in diesem Fall eine Regelung, die dem am nächsten kommt, was die Parteien nach dem Sinn und Zweck der ursprünglichen Regelung und des Nutzungsvertrages in gesetzlich zulässiger Weise vereinbart hätten, wenn sie die Unwirksamkeit oder Nichtigkeit der ursprünglichen Regelung erkannt hätten. Gleiches gilt auch für eine etwaige von den Parteien nicht beabsichtigte Regelungslücke in dem Nutzungsvertrag einschließlich dieser Nutzungsbedingungen. Sofern eine Bestimmung dieser Allgemeinen Nutzungsbedingungen unwirksam ist, bleiben die übrigen Bestimmungen davon unberührt." },
        { id: 10.3, clause: "Jeder Nutzungsvertrag sowie eventuell daraus resultierende Streitigkeiten, unterliegen dem Recht des Staates, in dem der Nutzer seinen gewöhnlichen Wohnsitz. Im Übrigen gilt das Recht der Bundesrepublik Deutschland. Das Übereinkommen der Vereinten Nationen über Verträge über den internationalen Warenkauf (CISG) findet keine Anwendung." },
      ],
    },
  ];

  const termsConditions = isGerman ? termsConditionsGerman : termsConditionsEnglish

  const terms103 = isGerman ? 'Jeder Nutzungsvertrag sowie eventuell daraus resultierende Streitigkeiten, unterliegen dem Recht des Staates, in dem der Nutzer seinen gewöhnlichen Wohnsitz. Im Übrigen gilt das Recht der Bundesrepublik Deutschland. Das Übereinkommen der Vereinten Nationen über Verträge über den internationalen Warenkauf (CISG) findet keine Anwendung.' : 'Amendments or supplements to a licence agreement must be executed in writing. The same shall apply also to a waiver of this written-form requirement.';


  return (
    <section className={`${styles.tac} container`}>
      <div className={styles.tacTitle}>
        {isGerman
          ?
          <h1>Allgemeine<br />Nutzungsbedingungen für<br />Ecolog Deutschland GmbH
          </h1>
          :
          <h1>Standard Terms and Conditions<br />of Use for Ecolog Deutschland<br />GmbH
          </h1>
        }
      </div>

      <div className={styles.tacWrapper}>
        {termsConditions.map((term) => (
          <div className={styles.tacItem} key={term.id}>
            <h2>{`${term.id}. ${term.title}`}</h2>
            {term.clauses.map((clause) => (
              <p key={clause.id} style={{ fontWeight: 'normal', marginBottom: 15 }}>
                {clause.id === 10.3 ? (
                  <>
                    10.3 {terms103}<br />
                    <br />
                    {
                      isGerman ?
                        <>
                          10.4 Ecolog ist verpflichtet, Sie darüber zu informieren, dass im Hinblick auf die sog. Online-Streitbeilegung seitens der Europäischen Kommission eine entsprechende Online-Plattform bereitgehalten wird. Diese Plattform können Sie unter folgendem Link abrufen: https://ec.europa.eu/consumers/odr/. In diesem Zusammenhang sind wir darüber hinaus verpflichtet, Ihnen unsere E-Mail-Adresse mitzuteilen. Diese lautet: info@ecolog-international.com. Ecolog bemüht sich stets, etwaige Unstimmigkeiten mit dem Kunden im Hinblick auf bestehende Verträge einvernehmlich zu klären. Wir möchten Sie jedoch darauf hinweisen, dass Ecolog zu keiner Teilnahme an einem Verbraucherschlichtungsverfahren (nach VSBG) verpflichtet ist und Ihnen die Teilnahme an einem solchen Verfahren leider auch nicht anbietet.
                        </>
                        :
                        <>
                          10.4 All licence agreements and any disputes arising out of them shall be subject to the laws of the country of the User’s habitual place of residence.
                          In all other respects, the law of the Federal Republic of Germany shall apply.
                          The United Nations Convention on Contracts for the International Sale of Goods (CISG) shall not apply.<br />
                          <br />
                          10.5 The European Commission operates an Online Dispute Resolution platform,
                          which can be accessed via{' '}
                          <Link href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage" className='link' target={'_blank'}>
                            this link
                          </Link>
                          . Ecolog excludes this route as Ecolog is under no obligation to submit itself to this dispute resolution process.
                        </>
                    }
                  </>
                ) : (
                  `${clause.id} ${clause.clause}`
                )}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TermsAndConditions