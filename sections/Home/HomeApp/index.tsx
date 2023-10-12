"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { IApp } from "@/models";
import { parseText } from "@/utils/helpers";
import { motion } from "framer-motion";
import { sectionFade } from "@/animations";

const HomeApp = ({ data }: { data: IApp }) => {
  const title = data?.Info.title;
  const { normalTitle, italicTitle, remainingTitle } = parseText(title);
  const mainImage = data?.image[0];
  const qrImage = data?.Info?.QR;

  return (
    <section className={`${styles.homeDigital} container`}>
      <div className={styles.homeDigitalWrapper}>
        <motion.div {...sectionFade} className={styles.homeDigitalContent}>
          <div className={styles.homeDigitalTitle}>
            <h6>
              {normalTitle}
              <i>{italicTitle}</i>
              {remainingTitle}
            </h6>
          </div>

          <p>{data?.Info?.text}</p>

          <div className={styles.homeDigitalApp}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${qrImage?.url}`}
              width={qrImage?.formats?.thumbnail?.width}
              height={qrImage?.formats?.thumbnail?.height}
              alt={"Mobile-qr"}
            />
          </div>
        </motion.div>

        <div className={styles.homeDigitalImage}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${mainImage?.url}`}
            width={mainImage?.formats?.small?.width}
            height={mainImage?.formats?.small?.height}
            alt="Mobile App"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeApp;
