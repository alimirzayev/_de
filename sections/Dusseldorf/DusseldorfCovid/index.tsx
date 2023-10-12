"use client"
import Link from 'next/link'
import styles from './styles.module.css'
import img1 from '../../../assets/dusseldorf-covid-1.png'
import img3 from '../../../assets/dusseldorf-covid-3.png'
import img4 from '../../../assets/dusseldorf-covid-4.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const DusseldorfCovid = ({data}: {data:any}) => {
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
        <section id='covid' className={`${styles.covid} container`}>
            <div className={styles.covidTitle}>
                <h3><span>COVID-19</span> Tests</h3>
            </div>


            <div className={styles.covidContent}>
                <div className={styles.covidText}>
                    <p>Book your covid test at Dusseldorf Airport now:<br />Fast, reliable and affordable.</p>
                </div>

                {device === 'desktop' && (
                    <Link href={'https://web.dev.ecocare.health/web/products?account_number=0000008480'} className={styles.covidContentSeeAll}>
                        <p>See all products</p>
                        <i className={`${styles.covidContentSeeAllIcon} arrow-right-icon`} />
                    </Link>
                )}
            </div>

            {device === 'mobile' ? (
                <Swiper
                    effect="slide"
                    spaceBetween={15}
                    slidesPerView={1.8}
                    modules={[Pagination]}
                    className={styles.HomeSelfSwiper}
                >
                    {data?.map((item: any, index: number) => {
                        return (
                            <SwiperSlide className={styles.SwiperSlide}>
                                <Link
                                    href={item?.link}
                                    key={index}
                                    className={styles.covidCard}
                                >
                                    <div className={styles.covidCardImg}>
                                        <Image
                                            src={item.img}
                                            alt="product1"
                                        />
                                        {item?.duration && (
                                            <div className={styles.covidCardImgDuration}>
                                                <i className={`${styles.covidCardIcon} airport-clock-icon`} />
                                                <p>{item?.duration}</p>
                                            </div>
                                        )}
                                    </div>
                                    <p>{item.title}</p>
                                    <span>{`${item?.price}`}</span>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            ) : (
                <div className={styles.covidContanier}>
                    {data?.map((item: any, index: number) => {
                        return (
                            <Link
                                href={item?.link}
                                key={index}
                                className={styles.covidCard}
                            >
                                <div className={styles.covidCardImg}>
                                    <Image
                                        src={item.img}
                                        alt="product1"
                                    />
                                    {item?.duration && (
                                        <div className={styles.covidCardImgDuration}>
                                            <i className={`${styles.covidCardIcon} airport-clock-icon`} />
                                            <p>{item?.duration}</p>
                                        </div>
                                    )}
                                </div>
                                <p>{item.title}</p>
                                <span>{`${item?.price}`}</span>
                            </Link>
                        );
                    })}
                </div>
            )}

            {device === 'mobile' && (
                <Link href={'/'} className={styles.covidContentSeeAllMobile}>
                    <p>See all products</p>
                    <i className={`${styles.covidContentSeeAllIcon} arrow-right-icon`} />
                </Link>
            )}

        </section>
    )
}

export default DusseldorfCovid