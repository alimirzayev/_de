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
import { sectionFade, sectionFadeLeft } from "@/animations";

const HomeSelf = ({
  data,
  data2,
  lang,
}: {
  data: any;
  data2: any;
  lang: string;
}) => {
  const selfTests = data[0]?.Tests;
  const { normalTitle, italicTitle, remainingTitle } = parseText(
    data[0]?.description
  );
  const {
    normalTitle: normalDesc,
    italicTitle: italicDesc,
    remainingTitle: remainingDesc,
  } = parseText(data[0]?.heading);

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

  const SeeAll = () => {
    return (
      <motion.div {...sectionFadeLeft}>
        <Link className={styles.homeSelfAll} href={data[0]?.seeAllURL}>
          {lang === "de" ? "Alle Produkte ansehen" : "See all products"}
          <i className={`${styles.homeSelfAllIcon} arrow-right-icon`} />
        </Link>
      </motion.div>
    );
  };

  return (
    <section id="hometests" className={`${styles.homeSelf} container`}>
      <div className={styles.homeSelfWrapper}>
        <motion.article className={styles.homeSelfContent} {...sectionFade}>
          <div className={styles.homeSelfText}>
            <p>{data[0]?.title}</p>
          </div>

          <div className={styles.homeSelfHeading}>
            <h3>
              {normalTitle}
              <i>{italicTitle}</i>
              {remainingTitle}
            </h3>
          </div>

          <div className={styles.homeSelfDesc}>
            <p>
              {normalDesc}
              <i>{italicDesc}</i>
              {remainingDesc}
            </p>
          </div>

          {device !== "mobile" && <SeeAll />}
        </motion.article>

        {device === "mobile" ? (
          <Swiper
            effect="slide"
            spaceBetween={15}
            slidesPerView={1.8}
            modules={[Pagination]}
            className={styles.HomeSelfSwiper}
          >
            {selfTests?.map((item: any, index: number) => {
              return (
                <SwiperSlide className={styles.SwiperSlide}>
                  <Link
                    href={item?.link}
                    key={index}
                    className={styles.homeSelfItem}
                  >
                    <div className={styles.homeSelfItemImg}>
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
              );
            })}
          </Swiper>
        ) : (
          <div className={styles.homeSelfContainer}>
            {selfTests?.map((item: any, index: number) => {
              return (
                <Link
                  href={item?.link}
                  key={index}
                  className={styles.homeSelfItem}
                >
                  <div className={styles.homeSelfItemImg}>
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

        {device === "mobile" && (
          <div className={styles.homeSelfMobileSeeAll}>
            <SeeAll />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSelf;
