"use client";
import styles from "./styles.module.css";
import image from "../../../assets/image/b/pointofcare.png";
import Image from "next/image";
import { parseText } from "@/utils/helpers";
import { motion } from "framer-motion";
import { sectionFade, sectionFadeLeft } from "@/animations";

const BusinessAdvanced = ({ data }: { data: any }) => {
  const { normalTitle, italicTitle, remainingTitle } = parseText(
    data?.blocks[0]?.title
  );

  return (
    <section id="Conduct" className={`${styles.businessAdvanced} container`}>
      <div className={styles.businessAdvancedWrapper}>
        <motion.div {...sectionFadeLeft} className={styles.businessAdvancedContent}>
          <h5 className={styles.businessAdvancedTitle}>
            {normalTitle}
            <span>{italicTitle}</span>
            {remainingTitle}
          </h5>

          <div className={styles.businessAdvancedList}>
            <ul>
              {data?.blocks[0]?.text
                ?.split("\n")
                ?.map((check, i) =>
                  check?.length > 0 ? <li key={i}>{check}</li> : null
                )}
            </ul>
          </div>

          <h5 className={styles.businessAdvancedTitle2}>
            {data?.blocks[1]?.title}
          </h5>

          <div className={styles.businessAdvancedList}>
            <ul>
              {data?.blocks[1]?.text
                ?.split("\n")
                ?.map((check, i) =>
                  check?.length > 0 ? <li key={i}>{check}</li> : null
                )}
            </ul>
          </div>
        </motion.div>

        <motion.div {...sectionFade} className={styles.businessAdvancedImage}>
          <Image src={image} alt={""} />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessAdvanced;
