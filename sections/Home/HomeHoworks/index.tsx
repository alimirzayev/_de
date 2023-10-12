"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import howorks from "../../../assets/image/howorks.png";
import howorks2 from "../../../assets/image/howorksdesktop.png";
import { useEffect, useState } from "react";
import { IHowItWorksItem } from "@/models";
import { parseText } from "@/utils/helpers";
import { sectionFade } from "@/animations";
import { motion } from "framer-motion";

const HomeHoworks = ({ data }: { data: IHowItWorksItem }) => {
  const [isMobile, setIsMobile] = useState("");
  const title = data?.title;
  const { normalTitle, italicTitle, remainingTitle } = parseText(title);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setIsMobile("mobile");
      } else if (window.innerWidth > 750 && window.innerWidth < 1150) {
        setIsMobile("tablet");
      } else {
        setIsMobile("desktop");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="howorks" className={`${styles.howWorks}`}>
      <motion.h5 {...sectionFade} className={styles.howWorksHeading}>
        {normalTitle}
        <span style={{borderWidth: 1,borderColor: 'red'}}>{italicTitle}</span>
        {remainingTitle}
      </motion.h5>
      <div className={styles.howWorksWrapper}>
        {isMobile === "mobile" && (
          <div>
            {data.Items.map((item, index) => {
              return (
                <div key={index} className={styles.howWorksItem}>
                  <div className={styles.howWorksItemTop}>
                    <div className={styles.howWorksItemTopNumber}>{index + 1}</div>
                    <p>{item.title}</p>
                  </div>
                  <p className={styles.howWorksDesc}>{item.text}</p>
                </div>
              );
            })}
          </div>
        )}

        {isMobile === "tablet" && (
          <>
            <div className={styles.howWorksItemContainer}>
              {data.Items.map((item, index) => {
                return (
                  <div key={index} className={styles.howWorksItem}>
                    <div className={styles.howWorksItemTop}>
                      <div className={styles.howWorksItemTopNumber}>
                        {index + 1}
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <p className={styles.howWorksDesc}>{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.howWorksImage}>
              <Image src={howorks} alt="how it works" />
            </div>
          </>
        )}

        {isMobile === "desktop" && (
          <div className={styles.howWorksDesktop}>
            {data.Items.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.howWorksDesktopItem} ${
                    styles[`howWorksDesktopItem${index + 1}`]
                  }`}
                >
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              );
            })}
            <Image
              src={howorks2}
              alt="how it works"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeHoworks;
