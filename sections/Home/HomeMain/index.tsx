"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { IHomeMain } from "@/models";
import { parseText } from "@/utils/helpers";
import mainimg from "../../../assets/image/business-main.png";
import { sectionFade, sectionFadeLeft, sectionFadeRight } from "@/animations";
import { motion } from "framer-motion";

const HomeMain = ({
  data,
  page,
  lang,
}: {
  data: IHomeMain;
  page?: string;
  lang?: string;
}) => {
  const title = data?.title;
  const text = data?.text;

  const { normalTitle, italicTitle, remainingTitle } = parseText(title);
  const {
    normalTitle: normalDesc,
    italicTitle: italicDesc,
    remainingTitle: remainingDesc,
  } = parseText(text);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToBottom() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 1000, behavior: "smooth" });
  }

  return (
    <main className={`${styles.homeMain} container`}>
      <div
        className={styles.homeMainWrapper}
        style={{ padding: page ? "3% 0" : "" }}
      >
        <article className={styles.homeMainContent}>
          <motion.div
            {...sectionFadeLeft}
            className={styles.homeMainContentHeading}
          >
            {page ? (
              <h1>
                {normalTitle}
                <br />
                <i>{italicTitle}</i> <br />
                {remainingTitle}
              </h1>
            ) : (
              <h1>
                {normalTitle}
                <i>{italicTitle}</i>
                <br />
                {remainingTitle}
              </h1>
            )}
          </motion.div>
          <motion.div
            {...sectionFadeRight}
            className={styles.homeMainContentDesc}
          >
            <p>
              {normalDesc}
              <i>{italicDesc}</i>
              {remainingDesc}
            </p>
          </motion.div>
          <div className={styles.homeMainContentButtons}>
            {!page && (
              <Link href="#video" scroll={false}>
                <button className={styles.homeMainContentExplore}>
                  {lang === "en" ? "Explore" : "Mehr erfahren"}
                </button>
              </Link>
            )}
            {page && (
              <button
                onClick={scrollToBottom}
                className={styles.homeMainContentExplore}
              >
                {data?.button?.name}
              </button>
            )}

            {!page && (
              <Link href="#video" scroll={false}>
                <i
                  className={`${styles.homeMainContentArrow} arrow-down-icon`}
                />
              </Link>
            )}
          </div>
        </article>
        <motion.div {...sectionFade} className={`${styles.homeMainImage}`}>
          {!page ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.image?.url}`}
              width={data?.image?.width}
              height={data?.image?.height}
              alt={"ecocare"}
              className={styles.homeMainImageTranslate}
            />
          ) : (
            <Image
              src={mainimg}
              style={{
                paddingRight: "10%",
              }}
              alt={"ecocare"}
              className={styles.homeMainImageCover}
            />
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default HomeMain;
