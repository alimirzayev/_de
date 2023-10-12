"use client"
import Accordion from '@/components/Accordion'
import { title } from 'process';
import styles from './styles.module.css'

const FAQSection = ({ lang, mvp}: { lang: 'en' | 'de', mvp?: boolean }) => {
    const isGerman = lang == 'de' ? true : false;

    const title = isGerman ? 'Unterstützung' : 'Support'

    const title1 = !isGerman ? "Why EcoCare?" : 'Warum EcoCare?';
    const title2 = !isGerman ? "Will my health insurance cover the cost?" : 'Erstattet meine Krankenkasse mir die Kosten?';
    const title3 = !isGerman ? "Why should I take a test at EcoCare ?" : 'Warum soll ich einen Test bei EcoCare machen und nicht bei meinem Hausarzt?';
    const title4 = !isGerman ? 'Can I discuss the results with a doctor?' : 'Kann ich die Ergebnisse mit einem Arzt besprechen?';
    const title5 = !isGerman ? 'What do my results say?' : 'Was sagen meine Ergebnisse aus?';
    const title6 = !isGerman ? 'Why should I, as a healthy person, take a blood test?' : 'Warum soll ich als gesunder Mensch einen Bluttest machen?';
    return (
        <section className={styles.faq}>
            <div className={styles.faqWrapper}>
                {!mvp && (
                    <div className={styles.faqContent}>
                    <div className={styles.faqTitle}>
                        <p>{title}</p>
                    </div>
                    <div className={styles.faqHeading}>
                        {!isGerman ?
                            <h1>Frequently Asked<br />
                                Questions</h1>
                            :
                            <h1>FHäufig gestellte<br />
                                Fragen</h1>}
                    </div>
                    <div className={styles.faqDescription}>
                        {
                            !isGerman ?
                                <p>Everything you need to know about our<br />services. Can’t find the answer you’re<br />looking for?</p>

                                :
                                <p>Alles, was Sie über unsere Dienste wissen<br />müssen
                                    Dienstleistungen. Sie finden nicht<br />die Antwort, die Sie
                                    die Sie suchen?</p>
                        }
                    </div>
                </div>
                )}
                <div style={{width: mvp ? '100%' : '65%', background: mvp ? '#F6F6F6' : 'white'}} className={styles.faqContainer}>
                    {mvp && <h6 style={{padding: '0.6em', fontSize: 28, fontWeight: 700, color: '#000', margin: '36px 0'}}>Frequently Asked Questions</h6>}
                    <Accordion mvp={mvp} title={title1}>
                        {!isGerman ?
                            <p style={{ paddingBottom: 10 }}>
                                We want to support you in taking your health into your own hands
                                and actively caring for your well-being. Most of the time you go to
                                the doctor when you already have issues. We want to support you in
                                taking preventive care of your body health and try to make this as
                                easy as possible through innovative technologies, simple blood tests
                                and online doctor consultations.</p>
                            :
                            <p style={{ paddingBottom: 10 }}>
                                Wir möchten Dich dabei unterstützen Deine Gesundheit in die eigenen Hände zu nehmen und aktiv für Dein Wohlbefinden zu sorgen. Meist geht man zum Arzt, wenn man bereits Beschwerden hat. Wir möchten Dich dabei unterstützen, dass Du Dich präventiv um Deine Körpergesundheit kümmerst und versuchen Dir das durch innovative Technologien, einfache Bluttests und online Arzt Konsultationen so einfach wie möglich zu machen.</p>}
                    </Accordion>
                    <Accordion mvp={mvp} title={title2}>
                        {!isGerman ?
                            <p style={{ paddingBottom: 10 }}>Unfortunately, this is not currently the case if you have public health
                                insurance. Privately insured people can submit EcoCare invoices.
                                However, we are currently working on being recognized by the
                                statutory health insurance companies and hope to be able to offer
                                this service soon.</p>
                            :
                            <p style={{ paddingBottom: 10 }}>Leider ist das aktuell nicht der Fall, wenn Du gesetzlich versichert bist. Privat Versicherte können die EcoCare Rechnungen einreichen. Wir arbeiten aber gerade daran, von den gesetzlichen Krankenkassen anerkannt zu werden und hoffen schon bald diesen Service anbieten zu können.</p>}
                    </Accordion>
                    <Accordion mvp={mvp} title={title3}>
                        {!isGerman ?
                            <p style={{ paddingBottom: 10 }}>Your family doctor also measures the biomarkers in your blood and
                                usually has the blood sample diagnosed by a laboratory. This is
                                subject to a fee and is paid by your health insurance. If you want to
                                do a blood test in the comfort of your own home, without having to
                                make an appointment, and want to check your values, then an
                                EcoCare test is ideal. We prepare your results quickly and easily
                                understandable online for you. In addition, you will receive concrete
                                recommendations for action and can then discuss your test results
                                with one of our doctors via video call. We support you in discovering
                                your deficits and getting to know your body better.</p>
                            :
                            <p style={{ paddingBottom: 10 }}>Dein Hausarzt misst auch die Biomarker in Deinem Blut und lässt die Blutprobe meist über ein Labor diagnostizieren. Das ist kostenpflichtig und zahlt Deine Krankenkasse. Wenn Du bequem zuhause einen Bluttest machen möchtest, ohne vorherige Terminabsprache und Deine Werte überprüfen. möchtest, dann ist ein EcoCare Test ideal. Deine Ergebnisse bereiten wir schnell und leicht verständlich online für Dich auf. Zusätzlich erhältst Du konkrete Handlungsempfehlungen und kannst im Anschluss Dein Testergebnis mit einem unserer Ärzte per Videocall besprechen. Wir unterstützen Dich dabei, Deine Defizite aufzudecken und Deinen Körper besser kennenzulernen.</p>}
                    </Accordion>
                    <Accordion mvp={mvp} title={title4}>
                        {!isGerman ?
                            <p style={{ paddingBottom: 10 }}>Of course, especially with values that are not in the normal range,
                                we would like to advise you to do so. You have the option of
                                conveniently arranging a video call with your doctor online at any
                                time and our team of doctors will advise you confidentially on all
                                questions relating to your blood values.</p>
                            :
                            <p style={{ paddingBottom: 10 }}>Natürlich, gerade bei Werten, die nicht im Normbereich sind, möchten wir Dir dazu raten. Du hast bei uns die Möglichkeit jederzeit bequem online ein Arztgespräch per Videocall zu vereinbaren und unser Ärzteteam wird Dich vertraulich in allen Fragen rund um Deine Blutwerte beraten.</p>}
                    </Accordion>
                    <Accordion mvp={mvp} title={title5}>
                        {!isGerman ?
                            <p style={{ paddingBottom: 10 }}>Use this scientific basis and have an overview of your values. We
                                show you exactly which of your values are within the normal range
                                and where you can possibly strive for improvement or where there
                                are deficits. You will receive easy-to-understand test results and
                                appropriate recommendations for action from us. Thanks to our
                                colored blood tuning speedometer you can see at first glance where
                                you stand. Many people take regular nutritional supplements
                                without knowing if they are even necessary. With our blood tests we
                                support you to promote your health and to know exactly where you
                                should start.</p>
                            :
                            <p style={{ paddingBottom: 10 }}>Nutze diese wissenschaftliche Basis und habe einen Überblick über Deine Werte. Wir zeigen Dir genau auf, welche Deiner Werte im Normbereich liegen und wo Du eventuell Verbesserungen anstreben kannst oder es Defizite gibt. Du erhältst leicht zu verstehende Testergebnisse und dazu passende Handlungsempfehlungen von uns. Dank unseres farbigen Bluttuning-Tachos erkennst Du auf den ersten Blick, wo Du stehst. Viele Menschen nehmen regelmäßige Nahrungsergänzungsmittel, ohne zu wissen, ob diese überhaupt nötig sind. Mit unseren Bluttests unterstützen wir Dich, dass Du Deine Gesundheit fördern kannst und genau weißt, wo Du ansetzen solltest.</p>}
                    </Accordion>
                    <Accordion mvp={mvp} title={title6}>
                        {!isGerman ?
                            <p style={{ paddingBottom: 10 }}>Your blood provides information about the nutrient supply of your
                                body and can help you to detect deficiencies at an early stage. This
                                gives you the opportunity to take countermeasures before
                                symptoms occur that can affect your daily life in the long term. In
                                this way, you take your health into your own hands.</p>
                            :
                            <p style={{ paddingBottom: 10 }}>Dein Blut gibt Aufschluss über die Nährstoffversorgung Deines Körpers und kann Dir helfen, Mängel frühzeitig aufzudecken. Dadurch hast Du direkt die Möglichkeit entgegenzuwirken, bevor Symptome auftreten, die Dich langfristig im Alltag beeinträchtigen können. So nimmst Du Deine Gesundheit selbst in die Hand.</p>
                        }

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQSection