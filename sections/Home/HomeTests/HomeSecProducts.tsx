"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const HomeSecProducts = ({ data }: { data: any }) => {
  const selfTests = data[0]?.Tests;
  const careTests = data[1]?.Tests;

  const [activeIndex, setActiveIndex] = useState(0);
  const [renderData, setRenderData] = useState(selfTests);
  const isBrowser = () => typeof window !== "undefined";

  useEffect(() => {
    if (!isBrowser()) return;
    if (window.location.href === `https://alpha.ecocare.care/#products`) {
      setRenderData(selfTests);
      setActiveIndex(0);
    } else if (
      window.location.href === `https://alpha.ecocare.care/#products-cpt`
    ) {
      setRenderData(careTests);
      setActiveIndex(1);
    }
  }, [isBrowser]);

  const handleItemClick = (index) => {
    if (index === 0) {
      setRenderData(selfTests);
    } else {
      setRenderData(careTests);
    }
    setActiveIndex(index);
  };

  const [slidesPerView, setSlidesPerView] = useState(3.5);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 400) {
        setSlidesPerView(1.5);
      } else if (window.innerWidth > 400 && window.innerWidth < 500) {
        setSlidesPerView(1.9);
      } else if (window.innerWidth > 500 && window.innerWidth < 650) {
        setSlidesPerView(2.3);
      } else if (window.innerWidth > 650 && window.innerWidth < 750) {
        setSlidesPerView(2.6);
      } else if (window.innerWidth > 750 && window.innerWidth < 850) {
        setSlidesPerView(3.2);
      } else if (window.innerWidth > 950 && window.innerWidth < 1050) {
        setSlidesPerView(3.7);
      } else if (window.innerWidth > 1050 && window.innerWidth < 1150) {
        setSlidesPerView(4.2);
      } else if (window.innerWidth > 1150 && window.innerWidth < 1360) {
        setSlidesPerView(2.2);
      } else if (window.innerWidth > 1360 && window.innerWidth < 1850) {
        setSlidesPerView(2.7);
      } else {
        setSlidesPerView(3.6);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.homeProductsWrapper}>
      <div className={styles.homeProductsLeft}>
        <div
          className={`${styles.homeProductsLeftItem} ${
            activeIndex === 0 ? styles.active : ""
          }`}
          onClick={() => handleItemClick(0)}
        >
          <p>{data[0]?.title}</p>
        </div>
        <div
          className={`${styles.homeProductsLeftItem} ${
            activeIndex === 1 ? styles.active : ""
          }`}
          onClick={() => handleItemClick(1)}
        >
          <p>{data[1]?.title}</p>
        </div>
      </div>
      <div className={styles.homeProductsRight}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          className={styles.mySwiper}
          style={{ paddingLeft: "30px" }}
        >
          {renderData.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <Link href={item?.link} className={styles.homeProductsItem}>
                  <div className={styles.homeProductsItemImg}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                      width={item?.image?.formats?.medium?.width}
                      height={item?.image?.formats?.medium?.height}
                      alt="product1"
                    />
                  </div>
                  <p>{item.title}</p>
                  <span>{`${item?.price} €`}</span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSecProducts;
