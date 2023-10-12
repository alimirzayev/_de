"use client";
import styles from "./styles.module.css";
import bg from "../../../assets/image/b/platform-bg.png";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { sectionFade, sectionFadeScale } from "@/animations";
import { motion } from "framer-motion";

const BusinessPlatform = ({ data }: { data: any }) => {
  const [showButton, setShowButton] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (!isBrowser()) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <section id="DigitalPlatform" className={styles.businessPlatform}>
        <div className={styles.businessPlatformHeading}>
          <motion.h2 {...sectionFade}>{data?.title}</motion.h2>
          <p>{data?.text}</p>
        </div>
        <div className={styles.businessPlatformCenter}>
          <motion.div className={styles.businessPlatformWrapper}>
            <Image
              src={bg}
              alt={"businessPlatform"}
              className={styles.businessPlatformBg}
            />
          </motion.div>
          {data?.items?.map((item: any, index: number) => {
            return (
              <motion.div
                key={index}
                className={`${styles.businessPlatformItem} ${
                  styles[`businessPlatformItem${index + 1}`]
                }`}
                {...sectionFade}
              >
                <motion.div {...sectionFadeScale}>
                  <Image
                    src={
                      `${process.env.NEXT_PUBLIC_API_BASE_URL}` + item.image.url
                    }
                    width={item.image.width}
                    height={item.image.height}
                    alt={"businessTest"}
                  />
                </motion.div>
                <p>{item?.title}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      {showButton && (
        <svg
          id="scrollUpButton"
          onClick={scrollToTop}
          className={styles.businessPlatformScrollUp}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="50" rx="10" fill="#3128FF" />
          <path
            d="M20 20.4852L20.8909 21.3761L24.8553 17.4118L24.8553 35L26.1152 35L26.1152 17.4118L30.0795 21.3761L30.9704 20.4852L25.4852 15L20 20.4852Z"
            fill="white"
          />
        </svg>
      )}
    </Fragment>
  );
};

export default BusinessPlatform;
