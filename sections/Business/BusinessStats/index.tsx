"use client"
import styles from "./styles.module.css";
import logo from "../../../assets/image/b/ecocare2.png";
import Image from "next/image";
import { parseText } from "@/utils/helpers";
import { sectionFade, sectionFadeLeft, sectionFadeRight, sectionFadeScale, sectionFadeUp } from "@/animations";
import { motion } from "framer-motion";

const BusinessStats = ({ data, about }: { data: any, about?: boolean }) => {
  const { normalTitle, italicTitle, remainingTitle } = parseText(data?.title);
  return (
    <section className={about ? styles.businessStatsNoPadding : styles.businessStats}>
      <div className={about ? "" : "container"}>
        <div className={styles.businessStatsWrapper}>
          <div className={styles.businessStatsContainer}>
            <div className={styles.businessStatsContainerLeft}>
              <div className={styles.businessStatsContainerLeftTop}>
                <motion.div
                  {...sectionFadeLeft}
                  className={styles.businessStatsContainerLeftLogo}
                >
                  <div className={styles.businessStatsItem}>
                    <Image
                      className={styles.businessStatsLogo}
                      src={logo}
                      alt={""}
                    />
                    <p className={styles.businessStatsLeftTitle}>
                      {normalTitle}
                      <i>{italicTitle}</i>
                      {remainingTitle}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...sectionFadeRight}
                  className={styles.businessStatsContainerLeftContent}
                >
                  <div className={styles.businessStatsItem}>
                    <h5>{data?.items[0]?.title}</h5>
                    <p>{data?.items[0]?.text}</p>
                  </div>
                </motion.div>
              </div>

              <motion.div className={styles.businessStatsContainerLeftBottom}>
                <motion.div
                  {...sectionFadeLeft}
                  className={styles.businessStatsItem}
                >
                  <h5>{data?.items[2]?.title}</h5>
                  <p>{data?.items[2]?.text}</p>
                </motion.div>
                <motion.div
                  {...sectionFadeUp}
                  className={styles.businessStatsItem}
                >
                  <h5>{data?.items[3]?.title}</h5>
                  <p>{data?.items[3]?.text}</p>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              {...sectionFadeUp}
              className={styles.businessStatsContainerRight}
            >
              <div className={styles.businessStatsItem}>
                <h5>{data?.items[1]?.title}</h5>
                <p>{data?.items[1]?.text}</p>
              </div>

              <motion.div
                {...sectionFadeUp}
                className={styles.businessStatsItem}
              >
                <h5>{data?.items[4]?.title}</h5>
                <p>{data?.items[4]?.text}</p>
              </motion.div>
            </motion.div>
          </div>
          <div className={styles.businessStatsFooter}>
            <motion.div
              {...sectionFadeLeft}
              className={styles.businessStatsItem}
            >
              <h5>{data?.items[5]?.title}</h5>
              <p>{data?.items[5]?.text}</p>
            </motion.div>
            <motion.div {...sectionFadeUp} className={styles.businessStatsItem}>
              <h5>{data?.items[6]?.title}</h5>
              <p>{data?.items[6]?.text}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
