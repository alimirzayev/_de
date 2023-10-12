"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import Modal from "@/layouts/Modal";
import { motion } from "framer-motion";
import { sectionFade, sectionFadeUp } from "@/animations";

const BusinessFeatures = ({ data }: { data: any }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const isBrowser = () => typeof window !== "undefined";

  function scrollToBottom() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 1000, behavior: "smooth" });
  }
  return (
    <div id="features" style={{ position: "relative" }} className={styles.businessFeature}>
      <section className={`container`}>
        <div className={styles.businessFeatures}>
          <motion.div className={styles.businessFeaturesTitle} {...sectionFade}>
            <p>{data.text}</p>
          </motion.div>
          <div className={styles.businessFeaturesContainer}>
            {data?.items?.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className={styles.businessFeaturesCard}
                  {...sectionFadeUp}
                >
                  <div className={styles.businessFeaturesCardImage}>
                    <Image
                      src={
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}` +
                        item.image.url
                      }
                      alt={""}
                      width={item.image.width}
                      height={item.image.height}
                    />
                  </div>
                  <div className={styles.businessFeaturesCardTitle}>
                    <p>{item?.title}</p>
                  </div>
                  <motion.div
                    className={styles.businessFeaturesCardDesc}
                    {...sectionFade}
                  >
                    {item.checks.split("\n").map((check, i) =>
                      check?.length > 0 ? (
                        <div
                          key={i}
                          className={styles.businessFeaturesCardDescItem}
                        >
                          <p>{check}</p>
                        </div>
                      ) : null
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <div className={styles.businessFeaturesButton}>
            <button className={styles["btn-modal"]} onClick={openModal}>
              {data?.button?.name}
            </button>
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal} />
      </section>
    </div>
  );
};

export default BusinessFeatures;
