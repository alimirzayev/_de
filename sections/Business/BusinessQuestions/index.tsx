"use client";
import { sectionFade } from "@/animations";
import { useModal } from "@/hooks/useModal";
import Modal from "@/layouts/Modal";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const BusinessQuestions = ({ data }: { data: any }) => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <section className={styles.businessQuestions}>
      <motion.div
        className={styles.businessQuestionsTitle}
        {...sectionFade}
      >
        <h5>{data?.title}</h5>
      </motion.div>

      <div className={styles.businessQuestionsButton}>
        <button onClick={openModal}>{data?.button?.name}</button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default BusinessQuestions;
