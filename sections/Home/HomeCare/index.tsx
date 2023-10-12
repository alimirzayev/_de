"use client";
import { parseText } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { sectionFade, sectionFadeScale, sectionFadeUp } from "@/animations";

const HomeCare = ({
  data,
  data2,
  lang,
}: {
  data: any;
  data2: any;
  lang: string;
}) => {
  const careTests = data[1]?.Tests;
  const { normalTitle, italicTitle, remainingTitle } = parseText(
    data[1]?.description
  );
  const {
    normalTitle: normalDesc,
    italicTitle: italicDesc,
    remainingTitle: remainingDesc,
  } = parseText(data[1]?.heading);

  const [device, setDevice] = useState("");
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id={'carepoint'} className={`${styles.homeCare} container`}>
      <div className={styles.homeCareWrapper}>
        <motion.article {...sectionFadeUp} className={styles.homeCareContent}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className={styles.homeCareText}>
            <p>{data[1]?.title}</p>
          </div>
          </div>

          <div className={styles.homeCareHeading}>
            <h3>
              {normalDesc}
              <i>{italicDesc}</i>
              {remainingDesc}
            </h3>
          </div>

          <div className={styles.homeCareDesc}>
            <p>
              {normalTitle}
              <i>{italicTitle}</i>
              {remainingTitle}
            </p>
          </div>
        </motion.article>

        {device === "mobile" ? (
          <Swiper
            effect="slide"
            spaceBetween={15}
            slidesPerView={1.8}
            modules={[Pagination]}
            className={styles.HomeCareSwiper}
          >
            {careTests?.length > 0 &&
              careTests?.map((item: any, index: number) => (
                <SwiperSlide key={index} className={styles.SwiperSlide}>
                  <Link href={item?.link} className={styles.homeCareItem}>
                    <div className={styles.homeCareItemImg}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                        width={item?.image?.formats?.medium?.width}
                        height={item?.image?.formats?.medium?.height}
                        alt="product1"
                      />
                    </div>
                    <p>{item.title}</p>
                    <span>{`${item?.price}`}</span>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <div className={styles.homeCareContainer}>
            {careTests?.slice(0, 4)?.map((item: any, index: number) => {
              return (
                <Link
                  href={item?.link}
                  key={index}
                  className={styles.homeCareItem}
                >
                  <div className={styles.homeCareItemImg}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                      width={item?.image?.formats?.medium?.width}
                      height={item?.image?.formats?.medium?.height}
                      alt="product1"
                    />
                  </div>
                  <p>{item.title}</p>
                  <span>{`${item?.price}`}</span>
                </Link>
              );
            })}
          </div>
        )}

        <motion.div {...sectionFade}>
          <Link className={styles.homeCareAll} href={data[1]?.seeAllURL}>
            {lang === "de" ? "Alle Produkte ansehen" : "See all products"}
            <i className={`${styles.homeCareAllIcon} arrow-right-icon`} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCare;
