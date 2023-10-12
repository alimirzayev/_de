"use client";
import styles from "./styles.module.css";
import play from "../../../assets/image/video-play.png";
import Image from "next/image";
import { useRef, useState } from "react";

const BusinessVideo = ({ lang }: { lang: string }) => {
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(false);

  const playVideo = () => {
    setPlayed(true);
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  };
  //* besserer | Kunden Apotheker

  const title =
    lang === "en"
      ? "Empowering to take <i>better</i> care"
      : "Für eine <i>bessere</i> Gesundheitsvorsorge";
  const desc =
    lang === "en"
      ? "A quantum leap for the Healthcare, enhancing benefits for <i>customer</i> and <i>pharmacist</i> alike"
      : "Ein Quantensprung für das Gesundheitswesen, der den Nutzen für <i>Kunden</i> und <i>Apotheker</i> gleichermaßen erhöht";

  return (
    <section
      className={`${styles.businessVideo} ${
        played ? [styles.alignCenter] : ""
      } container`}
    >
      {!played && (
        <>
          <div className={styles.businessVideoHeading}>
            <h4 dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className={styles.businessVideoDesc}>
            <p dangerouslySetInnerHTML={{ __html: desc }} />
          </div>

          <div onClick={playVideo} className={styles.businessVideoButton}>
            <Image src={play} alt={"video-play"} />
            <div className="video-play" onClick={playVideo}>
              <span className="video-play-text" />
              <i className="video-play-icon" />
            </div>
          </div>
        </>
      )}
      <div style={{position: 'relative'}}>
        <video
          controls={true}
          muted={false}
          ref={videoRef}
          className={played ? styles.playing : styles.hidden}
        >
          <source src={lang === 'en' ? "../ecocare.mp4" : "../ecocare_de.mp4"} type="video/mp4" />
        </video>
        <svg
          className={played ? styles.videoCloseActive : styles.videoClose}
          onClick={() => {
            setPlayed(false);
            if (videoRef && videoRef.current) {
              videoRef.current.pause();
            }
          }}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24.4531"
            cy="23.6594"
            r="23.5156"
            transform="rotate(90 24.4531 23.6594)"
            fill="#0B1B5C"
          />
          <path
            d="M34.3354 14.5394L15.0469 33.8279"
            stroke="#E5E7E7"
            strokeWidth="2.4"
          />
          <path
            d="M15.0469 14.5394L34.3354 33.8279"
            stroke="#E5E7E7"
            strokeWidth="2.4"
          />
        </svg>
      </div>
    </section>
  );
};

export default BusinessVideo;
