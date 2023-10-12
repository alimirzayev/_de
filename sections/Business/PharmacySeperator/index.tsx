"use client";
import { useModal } from "@/hooks/useModal";
import Modal from "@/layouts/Modal";
import { parseText } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const PharmacySeperator = ({ data }: { data }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const { normalTitle, italicTitle, remainingTitle } = parseText(data?.title);

  return (
    <section className={styles.pharmacySeperator}>
      <div className="container">
        <div className={styles.pharmacySeperatorWrapper}>
          <div className={styles.pharmacySeperatorContent}>
            <div className={styles.pharmacySeperatorTitle}>
              <h4>
                {normalTitle}
                <i>{italicTitle}</i>
                {remainingTitle}
              </h4>
            </div>

            <div className={styles.pharmacySeperatorText}>
              <p>{data?.text}</p>
            </div>

            <div className={styles.pharmacySeperatorButton} onClick={openModal}>
              <button>{data?.button?.name}</button>
            </div>
          </div>

          <div className={styles.pharmacySeperatorImage}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.image?.url}`}
              //   width={data?.image?.formats?.medium?.width}
              //   height={data?.image?.formats?.medium?.height}
              alt={"text"}
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default PharmacySeperator;
