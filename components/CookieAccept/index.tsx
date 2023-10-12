"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
  lang: string;
}

const CookieAccept = ({ lang }: Props) => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("cookieConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("cookieConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className={styles["cookie-consent"]}>
      <div className={styles["content-wrap"]}>
        {lang === "de" ? (
          <span>
            ECOCARE COOKIE CONSENT - Dieses Tool hilft Ihnen, verschiedene Tags
            / Tracker / Analyse-Tools auf dieser Webseite auszuwählen und zu
            deaktivieren: - Notwendige Cookies - Marketing
          </span>
        ) : (
          <span>
            ECOCARE COOKIE CONSENT - This tool helps you to select and disable
            various tags / trackers / analysis tools on this website: -
            Necessary cookies - Marketing
          </span>
        )}

        <Link
          className={styles.link}
          href={lang === "de" ? '/de/cookies' : '/en/cookies'}
        >
          {lang === "de" ? "Details anzeigen" : "View Details"}
        </Link>
      </div>
      <div className={styles["btn-wrap"]}>
        {/* <button className={styles["btn-white"]} onClick={() => acceptCookie()}>
          {lang === "de" ? "Notwendig speichern" : "Save necessary"}
        </button> */}
        <button onClick={() => acceptCookie()}>
          {lang === "de" ? "Akzeptiere Alle" : "Accept All"}
        </button>
      </div>
    </div>
  );
};
export default CookieAccept;
