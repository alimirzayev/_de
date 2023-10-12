"use client";

import Recaptcha from "@/components/Recaptcha";
import { ISubscription } from "@/models";
import { getRegExp } from "@/utils/helpers";
import { useState } from "react";
import styles from "./styles.module.css";

async function newsletterSubscribe(email: string, token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_NDIDENT_API}/ident/public/newletter/subscribe/${email}?recaptcha_key=${token}`,
    {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
    }
  );
  return res.json();
}

const HomeNewsletter = ({
  data,
  lang,
  bg
}: {
  data: ISubscription;
  lang: string;
  bg: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleModal = () => {
    if (getRegExp("email").test(email)) {
      setOpenModal(true);
    } else {
      window.alert("Set a valid email address!");
    }
  };

  const handleSubscribe = async (token: string) => {
    const response = await newsletterSubscribe(email, token);
    if (response.ok) {
      console.log("Done");
    } else {
      window.alert("Error");
    }
  };

  return (
    <section>
      <div className={bg ? styles.newsletterWrapper : styles.newsletterWrapperNoBg}>
        <div className={styles.newsletterLeft}>
          <h4 className={styles.newsletterHeading}>{data?.title}</h4>
          <div>
            <p className={styles.newsletterText}>{data?.text}</p>
          </div>
        </div>

        <div className={styles.newsletterRight}>
          <input
            onChange={handleEmail}
            type="text"
            placeholder={lang === "de" ? "E-Mail" : "Email"}
            className={styles.newsletterInput}
          />
          <button className={styles.newsletterBtn} onClick={handleModal}>
            {lang === "de" ? "Jetzt abonnieren" : "Subscribe"}
          </button>
          <Recaptcha
            openModal={openModal}
            setOpenModal={(open) => setOpenModal(open)}
            callBack={(token) => handleSubscribe(token)}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;
