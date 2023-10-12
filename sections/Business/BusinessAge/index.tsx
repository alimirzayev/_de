"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import older from "../../../assets/image/b/older.png";
import { parseText } from "@/utils/helpers";
import { sectionFade } from "@/animations";
import { motion } from "framer-motion";

const BusinessAge = ({ data }: { data: any }) => {
  const { normalTitle, italicTitle, remainingTitle } = parseText(data?.title);

  return (
    <section className={styles.businessAge}>
      <div id="video" className={styles.businessAgeWrapper}>
        <motion.div {...sectionFade} className={styles.businessAgeImage}>
          <Image src={older} alt={""} />
        </motion.div>

        <div className={styles.businessAgeContent}>
          <div className={styles.businessAgeTitle}>
            <h5>
              <span>{normalTitle}</span> <br />
              {italicTitle}
              {remainingTitle}
            </h5>
          </div>

          {data?.items?.map((item: any, index: number) => {
            return (
              <div key={index}>
                <motion.div className={styles.businessAgeText} {...sectionFade}>
                  <p className={styles.businessAgeTextHeading}>{item?.title}</p>
                  {item.checks.split("\n").map((check, i) =>
                    check?.length > 0 ? (
                      <div className={styles.businessAgeTextList} key={i}>
                        <i className="green-tick-icon" />
                        <p>{check}</p>
                      </div>
                    ) : null
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessAge;
