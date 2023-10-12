import Image from "next/image";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-modal";
import RecaptchaLogo from "../../assets/RecaptchaLogo.webp";
import styles from "./styles.module.css";

interface Props {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  callBack: (token: string) => void;
}

export default function Recaptcha({
  openModal,
  setOpenModal,
  callBack,
}: Props) {
  const captchaRef = useRef(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding:"40px",
    },
  };

  const handleSubmit = () => {
    let token = captchaRef.current.getValue();
    captchaRef.current.reset();
    if (token) {
      callBack(token);
      setOpenModal(false);
    } else {
      window.alert("Sorry!! Verify you are not a bot");
    }
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      style={customStyles}
    >
      <div className={styles.wrapper}>
        <Image src={RecaptchaLogo} width={150} height={150} alt="Recaptcha" style={{marginBottom:"10px"}} />
        <ReCAPTCHA
          className="recaptcha"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ref={captchaRef}
        />
        <button className={styles.btn} onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </Modal>
  );
}
