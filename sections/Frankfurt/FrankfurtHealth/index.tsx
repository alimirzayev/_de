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
import { parseText } from '@/utils/helpers'
import MVPScrollBottom from '@/sections/MVP/MVPScrollBottom'

const FrankfurtHealth = ({ data, comingSoon }: any) => {
    const text = data?.description
    const {
        normalTitle: normalDesc,
        italicTitle: italicDesc,
        remainingTitle: remainingDesc,
    } = parseText(text);

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
            <MVPScrollBottom />
            <div className={styles.healthWrapper}>
                {comingSoon &&
                    <div className={styles.healthTitle}>
                        <h4>{data?.title}</h4>
                    </div>}
                <div className={styles.healthContent}>
                    <div className={styles.healthContentHeading}>
                        <p>{data?.heading}</p>
                    </div>
                    <div className={styles.healthContentText}>
                        <p>
                            {normalDesc}
                            <i>{italicDesc}</i>
                            {remainingDesc}
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
                        {data?.Tests?.map((item: any, index: number) => {
                            return (
                                <SwiperSlide key={index} className={styles.SwiperSlide}>
                                    <div
                                        key={index}
                                        className={styles.healthCard}
                                    >
                                        <div className={styles.healthCardImg}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                                                width={item?.image?.width}
                                                height={item?.image?.height}
                                                alt={"ecocare"}
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
                        {data?.Tests?.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.healthCard}
                                >
                                    <div className={styles.healthCardImg}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                                            width={item?.image?.width}
                                            height={item?.image?.height}
                                            alt={"ecocare"}
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

export default FrankfurtHealth