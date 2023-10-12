"use client"
import { parseText } from '@/utils/helpers';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import howorks from "../../../assets/image/howorks.png";
import { sectionFade } from "@/animations";
import { motion } from "framer-motion";

const DusseldorfHoworks = ({ data }: { data: any }) => {
    const [isMobile, setIsMobile] = useState("");
    const title = data?.title;
    const { normalTitle, italicTitle, remainingTitle } = parseText(title);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 750) {
                setIsMobile("mobile");
            } else if (window.innerWidth > 750 && window.innerWidth < 1150) {
                setIsMobile("tablet");
            } else {
                setIsMobile("desktop");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section id="howorks" className={`${styles.howWorks}`}>
            <motion.h5 {...sectionFade} className={styles.howWorksHeading}>
                {normalTitle}
                <span style={{ borderWidth: 1, borderColor: 'red' }}>{italicTitle}</span>
                {remainingTitle}
            </motion.h5>
            <div className={styles.howWorksWrapper}>
                {isMobile === "mobile" ? (
                    <div>
                        {data.Items.map((item, index) => {
                            return (
                                <div key={index} className={styles.howWorksItem}>
                                    <div className={styles.howWorksItemTop}>
                                        <div className={styles.howWorksItemTopNumber}>{index + 1}</div>
                                        <p>{item.title}</p>
                                    </div>
                                    <p className={styles.howWorksDesc}>{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <>
                        <div className={styles.howWorksItemContainer}>
                            {data.Items.map((item, index) => {
                                return (
                                    <div key={index} className={styles.howWorksItem}>
                                        <div className={styles.howWorksItemTop}>
                                            <div className={styles.howWorksItemTopNumber}>
                                                {index + 1}
                                            </div>
                                            <p>{item.title}</p>
                                        </div>
                                        <p className={styles.howWorksDesc}>{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.howWorksImage}>
                            <Image src={howorks} alt="how it works" />
                        </div>
                    </>
                )}

            </div>
        </section>
    )
}

export default DusseldorfHoworks