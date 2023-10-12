"use client";
import { sectionFade } from "@/animations";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const BusinessHow = ({ data }: { data: any }) => {
  return (
    <section id="howItWorks" className={`${styles.businessHow} container`}>
      <div className={styles.businessHowTitle}>
        <motion.h5 {...sectionFade}>{data?.title}</motion.h5>
      </div>

      <div className={styles.businessHowContainer}>
        {data?.items?.map((step, index) => (
          <div className={styles.businessHowItem} key={index}>
            <motion.div {...sectionFade}>
              <i>0{index + 1}</i>
              <h5>{step.title}</h5>
              <p>{step.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessHow;
