"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { sectionFade } from "@/animations";

const BusinessDigital = ({ data }: { data: any }) => {
  return (
    <section id="Digitalpf" className={`${styles.businessDigital} container`}>
      <div className={styles.businessDigitalContainer}>
        <motion.div {...sectionFade} className={styles.businessDigitalImage}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.[0]?.image?.url}`}
            width={data?.[0]?.image?.width}
            height={data?.[0]?.image?.height}
            alt="Digital"
          />
        </motion.div>
        {data[0]?.textSection?.map((item: any, index: number) => {
          return (
            <motion.div
              key={index}
              {...sectionFade}
              className={styles.businessDigitalText}
            >
              <h5>{item?.title}</h5>
              <ul className={styles.businessDigitalList}>
                {item?.text
                  .split("\n")
                  .map((check, i) =>
                    check?.length > 0 ? <li key={i}>{check}</li> : null
                  )}
              </ul>
            </motion.div>
          );
        })}

        {data[1]?.textSection?.map((item: any, index: number) => {
          return (
            <motion.div
              key={index}
              {...sectionFade}
              className={styles.businessDigitalText}
            >
              <h5>{item?.title}</h5>
              <ul className={styles.businessDigitalList}>
                {item?.text
                  .split("\n")
                  .map((check, i) =>
                    check?.length > 0 ? <li key={i}>{check}</li> : null
                  )}
              </ul>
            </motion.div>
          );
        })}
        <motion.div {...sectionFade} className={styles.businessDigitalImage}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.[1]?.image?.url}`}
            width={data?.[1]?.image?.width}
            height={data?.[1]?.image?.height}
            alt="Digital"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessDigital;
