"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { IDHProfile } from "@/models";
import { parseText } from "@/utils/helpers";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionFade, sectionFadeLeft } from "@/animations";

const HomeDigital = ({ data, lang }: { data: IDHProfile; lang: string }) => {
  const title = data?.title;
  const text = data?.Info?.title;
  const long_desc = data?.Info?.text;

  const { normalTitle, italicTitle, remainingTitle } = parseText(title);
  const {
    normalTitle: normalText,
    italicTitle: italicText,
    remainingTitle: remainingText,
  } = parseText(text);

  return (
    <section id="dhp" className={styles.myHealth}>
      <div className="container">
        <div className={styles.myHealthWrapper}>
          <motion.div {...sectionFade} className={styles.myHealthImage}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.image[0]?.url}`}
              alt={"my-health-profile"}
              width={data?.image[0]?.width}
              height={data?.image[0]?.height}
            />
          </motion.div>
          <div className={styles.myHealthContent}>
            <motion.h5 {...sectionFade} className={styles.myHealthHeading}>
              {normalTitle}
              <i>{italicTitle}</i>
              {remainingTitle}
            </motion.h5>
            
            <motion.h6 {...sectionFade}>
              {normalText}
              <i>{italicText}</i>
              {remainingText}
            </motion.h6>
            <motion.p {...sectionFadeLeft}>{long_desc}</motion.p>

            <button>
              <Link href={`${process.env.SHOP_BASE_URL}/web/sign-up`}>
                {lang === "en" ? "Register Now" : "Jetzt registrieren"}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDigital;
