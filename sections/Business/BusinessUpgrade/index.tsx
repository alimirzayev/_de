"use client"
import { sectionFade } from "@/animations";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const BusinessUpgrade = ({data}: {data: any}) => {
  return (
    <section className={`${styles.businessUpgrade} container`}>
      <div className={styles.businessUpgradeWrapper}>
        <div className={styles.businessUpgradeTitle}>
          <motion.h4 {...sectionFade}>
            {data?.title}
          </motion.h4>
        </div>

        <div className={styles.businessUpgradeContainer}>
          {data?.items?.map((item: any, index: number) => {
            return (
              <div key={index} className={styles.businessUpgradeItem}>
                <h5>{item?.title}</h5>
                <p>{item?.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessUpgrade;
