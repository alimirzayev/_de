import { Logo } from "@/assets/svg/Logo";
import Logo2 from "@/assets/svg/Logo2";
import Link from "next/link";
import { Fragment } from "react";
import styles from './style.module.css'

export default async function Activation({ params }) {
  return (
    <section className={styles.activation}>
      <Logo2 />

      <div className={styles.activationHeading}>
        <h1>Bitte <span>AKTIVIERE</span><br />deinen Text vor der Durchführung!</h1>

        <p>Aktiviere zuerst deinen Text<br />bevor du ihn durchführst.</p>
      </div>

      <div className={styles.activationButtons}>
        <Link href={'/instruction'} className={styles.activationButtonFirst}>
          Anleitung
        </Link>

        <div>
          <Link href={"https://web.dev.ecocare.health/web/login?web=true&account_number=000000557"} passHref={true} className={styles.activationButtonSecond}>
            Test aktivieren

            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2781 12.7072C20.066 12.9193 19.8538 12.99 19.571 12.99L5.42886 12.99C4.86318 12.99 4.43891 12.5658 4.43891 12.0001C4.43891 11.4344 4.86318 11.0101 5.42886 11.0101L19.571 11.0101C20.1367 11.0101 20.5609 11.4344 20.5609 12.0001C20.5609 12.2829 20.4902 12.4951 20.2781 12.7072Z" fill="white" />
              <path d="M20.278 12.7072L13.914 19.0712C13.4897 19.4954 12.924 19.4954 12.4998 19.0712C12.0755 18.6469 12.0755 18.0812 12.4998 17.6569L18.1566 12.0001L12.4998 6.34324C12.0755 5.91897 12.0755 5.35329 12.4998 4.92902C12.924 4.50476 13.4897 4.50476 13.914 4.92902L20.278 11.293C20.7022 11.7172 20.7022 12.2829 20.278 12.7072Z" fill="white" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
