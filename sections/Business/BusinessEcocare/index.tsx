"use client"
import styles from "./styles.module.css";
import logo from "../../../assets/image/b/ecocare.png";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import Modal from "@/layouts/Modal";

const BusinessEcocare = ({data}: {data: any}) => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <section id="about" className={styles.businessEco}>
      <div className={styles.businessEcoImage}>
        <Image src={logo} alt="ecocare" />
      </div>
      <div className={styles.businessEcoText}>
        <h5>
          {data?.text ?? 'EcoCare ist ein führender Anbieter ganzheitlicher Gesundheitsdienstleistungen.'}
        </h5>
      </div>

      <div className={styles.businessEcoButton} onClick={openModal}>
        <button>Demo anfordern</button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default BusinessEcocare;
