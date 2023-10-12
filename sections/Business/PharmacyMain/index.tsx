import { parseText } from "@/utils/helpers";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import mainimg from "../../../assets/image/business-main.png";
import Link from "next/link";

const PharmacyMain = ({ data, lang }: { data: any; lang: "en" | "de" }) => {
  const title = data?.title;
  const text = data?.text;

  const { normalTitle, italicTitle, remainingTitle } = parseText(title);
  const {
    normalTitle: normalDesc,
    italicTitle: italicDesc,
    remainingTitle: remainingDesc,
  } = parseText(text);
  return (
    <main className={`${styles.pharmacyMain} container`}>
      <div className={styles.pharmacyMainWrapper}>
        <article className={styles.pharmacyMainContent}>
          <div className={styles.pharmacyMainContentHeading}>
            <h1>
              {normalTitle}
              <i>{italicTitle}</i>
              {remainingTitle}
            </h1>
          </div>
          <div className={styles.pharmacyMainContentDesc}>
            <p>
              {normalDesc}
              <i>{italicDesc}</i>
              {remainingDesc}
            </p>
          </div>
          <div className={styles.pharmacyMainContentButtons}>
            <Link href="#video" scroll={false}>
              <button className={styles.pharmacyMainContentExplore}>
                {lang === "en" ? "Explore" : "Mehr erfahren"}
              </button>
            </Link>
          </div>
        </article>

        <div className={styles.pharmacyMainImage}>
          <Image
            src={mainimg}
            alt={"ecocare"}
            className={styles.pharmacyMainImageCover}
          />
        </div>
      </div>
    </main>
  );
};

export default PharmacyMain;
