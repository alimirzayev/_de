"use client"
import styles from './styles.module.css'
import img1 from '../../../assets/dusseldorf-health-1.png'
import img2 from '../../../assets/dusseldorf-health-2.png'
import img3 from '../../../assets/dusseldorf-health-3.png'
import img4 from '../../../assets/dusseldorf-health-4.png'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react'

const DusseldorfHealth = ({data}: {data:any}) => {
    const [device, setDevice] = useState("");
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 750) {
                setDevice("mobile");
            } else {
                setDevice("desktop");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <section id='health' className={`${styles.health} container`}>
            <div className={styles.healthWrapper}>
                <div className={styles.healthTitle}>
                    <h4>Coming Soon</h4>
                </div>

                <div className={styles.healthContent}>
                    <div className={styles.healthContentHeading}>
                        <p>Health Tests</p>
                    </div>
                    <div className={styles.healthContentText}>
                        <p>
                            Get to know yourself with a rapid blood test. Proactively discover your<br />body biomarkers without the need for a doctor's appointment.<br />
                            Get you results within <i>15 minutes</i>.
                        </p>
                    </div>
                </div>

                {device === 'mobile' ? (
                    <Swiper
                        effect="slide"
                        spaceBetween={15}
                        slidesPerView={1.8}
                        modules={[Pagination]}
                        className={styles.HomeCareSwiper}
                    >
                        {data?.map((item: any, index: number) => {
                            return (
                                <SwiperSlide key={index} className={styles.SwiperSlide}>
                                    <div
                                        key={index}
                                        className={styles.healthCard}
                                    >
                                        <div className={styles.healthCardImg}>
                                            <Image
                                                src={item.img}
                                                alt="product1"
                                            />
                                        </div>
                                        <p>{item.title}</p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    <div className={styles.healthContanier}>
                        {data?.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.healthCard}
                                >
                                    <div className={styles.healthCardImg}>
                                        <Image
                                            src={item.img}
                                            alt="product1"
                                        />
                                    </div>
                                    <p>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                )}


            </div>
        </section>
    )
}

export default DusseldorfHealth