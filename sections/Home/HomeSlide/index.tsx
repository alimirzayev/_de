"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import slide1 from "../../../assets/image/slide1.webp";
import slide2 from "../../../assets/image/slide2.webp";
import slide3 from "../../../assets/image/slide3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { parseText } from "@/utils/helpers";
import { sectionFade } from "@/animations";

const HomeSlide = ({ lang, data }: { lang: string; data: any }) => {
  const first = data[0];
  const second = data[1];
  const third = data[2];

  const { normalTitle, italicTitle, remainingTitle } = parseText(first?.title);
  const {
    normalTitle: secondNormalTitle,
    italicTitle: secondItalicTitle,
    remainingTitle: secondRemaningTitle,
  } = parseText(second?.title);
  const {
    normalTitle: thirdNormalTitle,
    italicTitle: thirdItalicTitle,
    remainingTitle: thirdRemaningTitle,
  } = parseText(third?.title);

  const {
    normalTitle: normalDesc,
    italicTitle: italicDesc,
    remainingTitle: remainingDesc,
  } = parseText(first?.text);

  const {
    normalTitle: secondNormalDesc,
    italicTitle: secondItalicDesc,
    remainingTitle: secondRemainingDesc,
  } = parseText(second?.text);

  const {
    normalTitle: thirdNormalDesc,
    italicTitle: thirdItalicDesc,
    remainingTitle: thirdRemainingDesc,
  } = parseText(third?.text);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToBottom() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 1000, behavior: "smooth" });
  }

  return (
    <main className={`${styles.homeMain} container`}>
      <Swiper
        effect="slide"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.homeMainSwiper}
      >
        <SwiperSlide>
          <div className={styles.homeMainItem}>
            <article className={styles.homeMainContent}>
              <div className={styles.homeMainContentHeading}>
                <h1>
                  {normalTitle}
                  <i>{italicTitle}</i>
                  {remainingTitle}
                </h1>
              </div>

              <div className={styles.homeMainContentDesc}>
                <p>
                  {normalDesc}
                  <i>{italicDesc}</i>
                  {remainingDesc}
                </p>
              </div>

              <div className={styles.homeMainContentButtons}>
                <Link href={first?.url} scroll={false}>
                  <button className={styles.homeMainContentExplore}>
                    {first?.buttonText}
                  </button>
                </Link>
                <i
                  onClick={scrollToBottom}
                  className={`${styles.homeMainContentArrow} arrow-down-icon`}
                />
              </div>
            </article>

            <motion.div {...sectionFade} className={`${styles.homeMainImage}`}>
              <Image
                src={slide1}
                alt="ecocare"
                className={styles.homeMainImageTranslate}
              />
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.homeMainItem}>
            <article className={styles.homeMainContent}>
              <div className={styles.homeMainContentHeading}>
                <h1>
                  {secondNormalTitle}
                  <i>{secondItalicTitle}</i>
                  {secondRemaningTitle}
                </h1>
              </div>

              <div className={styles.homeMainContentDesc}>
                <p>
                  {secondNormalDesc}
                  <i>{secondItalicDesc}</i>
                  {secondRemainingDesc}
                </p>
              </div>

              <div className={styles.homeMainContentButtons}>
                <Link href={second?.url} scroll={false}>
                  <button className={styles.homeMainContentExplore}>
                    {second?.buttonText}
                  </button>
                </Link>
                <i
                  onClick={scrollToBottom}
                  className={`${styles.homeMainContentArrow} arrow-down-icon`}
                />
              </div>
            </article>

            <motion.div {...sectionFade} className={`${styles.homeMainImage}`}>
              <Image
                src={slide2}
                alt="ecocare"
                className={styles.homeMainImageTranslate}
              />
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.homeMainItem}>
            <article className={styles.homeMainContent}>
              <div className={styles.homeMainContentHeading}>
                <h1>
                  {thirdNormalTitle}
                  <i>{thirdItalicTitle}</i>
                  {thirdRemaningTitle}
                </h1>
              </div>

              <div className={styles.homeMainContentDesc}>
                <p>
                  {thirdNormalDesc}
                  <i>{thirdItalicDesc}</i>
                  {thirdRemainingDesc}
                </p>
              </div>

              <div className={styles.homeMainContentButtons}>
                <Link href={third?.url} scroll={false}>
                  <button className={styles.homeMainContentExplore}>
                    {third?.buttonText}
                  </button>
                </Link>
                <i
                  onClick={scrollToBottom}
                  className={`${styles.homeMainContentArrow} arrow-down-icon`}
                />
              </div>
            </article>

            <motion.div {...sectionFade} className={`${styles.homeMainImage}`}>
              <Image
                src={slide3}
                alt="ecocare"
                className={styles.homeMainImageTranslate}
              />
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className={styles.homeSlideArrowDown} onClick={scrollToBottom}>
        <ArrowDownIcon />
      </div> */}
    </main>
  );
};

export default HomeSlide;
