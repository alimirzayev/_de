"use client";

import { sectionFade, sectionFadeRight, sectionFadeUp } from "@/animations";
import { parseText } from "@/utils/helpers";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const BusinessStart = ({ data }: { data: any }) => {
  const { normalTitle, italicTitle, remainingTitle } = parseText(data?.title);
  return (
    <section className={styles.businessStart}>
      <div className={styles.businessStartHeading}>
        <motion.h3 {...sectionFade}>
          {normalTitle}
          <br />
          <i>{italicTitle}</i> <br />
          {remainingTitle}
        </motion.h3>
        <p>{data?.text}</p>
      </div>

      <div className="container">
        <motion.div
          className={styles.businessStartContainer}
          {...sectionFadeUp}
        >
          {data?.items?.map((item, index) => {
            return (
              <div className={styles.businessStartCard} key={index}>
                <div className={styles.businessStartCardHeading}>
                  <p>{item?.title}</p>
                </div>

                <div className={styles.businessStartCardLine} />

                <div className={styles.businessStartCardText}>
                  <p>{item?.text}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessStart;
