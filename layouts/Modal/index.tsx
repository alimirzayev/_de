"use client"
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const Modal = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const page = pathname?.split("/")[1];
  const isGerman = page === "de";
  const modalRef = useRef();

  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    pharmacy: "",
    name: "",
    email: "",
    telephone: "",
    city: "",
    postalCode: "",
    street: "",
    message: "",
  });

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/public/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Server response:", data);
      if (!res.ok) {
        throw new Error(data);
      }
      setStatus({ success: true });
      return data;
    } catch (error) {
      setStatus({ error: true });
      console.error("An error occurred:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData();
    } catch (error) {
      console.error("An error occurred when submitting the form:", error);
    }
    onClose();
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const closeOnButtonClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  useEffect(() => {
    const keyPress = (e) => {
      e.key === "Escape" && onClose();
    };
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  }, [onClose]);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`${styles.modal} ${isOpen && styles.active}`}
      ref={modalRef}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div
            onClick={() => handleItemClick(0)}
            className={`${styles.modalItem} ${
              activeIndex === 0 ? styles.modalItemActive : ""
            }`}
          >
            <h2 className={styles.modalTitle}>
              {isGerman
                ? "EcoCare Plattform Demo anfordern"
                : "Request EcoCare platform demo"}
            </h2>
          </div>
          <div
            onClick={() => handleItemClick(1)}
            className={`${styles.modalItem} ${
              activeIndex === 1 ? styles.modalItemActive : ""
            }`}
          >
            <h2 className={styles.modalTitle}>
              {isGerman
                ? "Präsentationstermin vereinbaren"
                : "Schedule a presentation appointment"}
            </h2>
          </div>
          <span
            className={styles.modalCloseButton}
            onClick={closeOnButtonClick}
          >
            <i className="modal-close-icon" />
          </span>
        </div>
        {activeIndex === 0 ? (
          <form className={styles.modalForm} onSubmit={handleSubmit}>
            <input
              required
              className={styles.modalInput}
              type="text"
              placeholder={isGerman ? "Apotheke Name" : "Pharmacy"}
              name="pharmacy"
              onChange={handleInputChange}
            />
            <input
              required
              className={styles.modalInput}
              type="text"
              placeholder={isGerman ? "Dein Name" : "Full Name"}
              name="name"
              onChange={handleInputChange}
            />
            <input
              required
              className={styles.modalInput}
              type="text"
              placeholder={isGerman ? "E-Mail" : "Email"}
              name="email"
              onChange={handleInputChange}
            />
            <input
              required
              className={styles.modalInput}
              type="text"
              placeholder={isGerman ? "Rufnummer" : "Telephone"}
              name="telephone"
              onChange={handleInputChange}
            />
            <input
              required
              className={styles.modalInput}
              type="text"
              placeholder={isGerman ? "Straße" : "Street"}
              name="street"
              onChange={handleInputChange}
            />
            <input
              required
              className={styles.modalInput}
              type="text"
              placeholder={isGerman ? "Stadt" : "City"}
              name="city"
              onChange={handleInputChange}
            />
            <input
              required
              className={styles.modalInput}
              type="text"
              placeholder={isGerman ? "Postleitzahl" : "Postal Code"}
              name="postalCode"
              onChange={handleInputChange}
            />
            <textarea
              required
              className={styles.modalInput}
              placeholder={isGerman ? "Nachricht" : "Message"}
              name="message"
              onChange={handleInputChange}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "1%",
              }}
            >
              <button className={styles.modalSubmitButton} type="submit">
                {!isGerman ? 'Request' : 'Demo Anfordern'}
              </button>
            </div>
          </form>
        ) : (
          <iframe
            src="https://outlook.office365.com/owa/calendar/PharmacyAppointmentPage@ecolog-international.com/bookings/"
            scrolling="yes"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
