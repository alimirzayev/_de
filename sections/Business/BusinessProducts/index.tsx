"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.css";

const BusinessProducts = ({ data }: { data }) => {
  const [renderData, setRenderData] = useState(data[0]?.Tests);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index) => {
    if (index === 0) {
      setRenderData(data[0]?.Tests);
    } else {
      setRenderData(data[1]?.Tests);
    }
    setActiveIndex(index);
  };

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
    <section id="Tests" className={`${styles.businessProducts} container`}>
      <div className={styles.businessHeading}>
        <div
          className={`${styles.businessHeadingItem} ${
            activeIndex === 0 ? styles.businessHeadingItemActive : ""
          } }`}
          onClick={() => handleItemClick(0)}
        >
          <h5>{data[0]?.title}</h5>
        </div>

        <div
          className={`${styles.businessHeadingItem} ${
            activeIndex === 1 ? styles.businessHeadingItemActive : ""
          } }`}
          onClick={() => handleItemClick(1)}
        >
          <h5>{data[1]?.title}</h5>
        </div>
      </div>

      {device === "mobile" ? (
        <Swiper
          effect="slide"
          spaceBetween={15}
          slidesPerView={1.8}
          modules={[Pagination]}
          className={styles.BusinessSwiper}
        >
          {renderData?.map((item, index) => {
            return (
              <SwiperSlide key={index} className={styles.SwiperSlide}>
                <div className={styles.businessProductsItem1}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                    width={item?.image?.width}
                    height={item?.image?.height}
                    alt="product1"
                  />
                  {activeIndex === 0 && (
                    <div className={styles.businessProductsItem1Text}>
                      <p>{item?.title}</p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className={styles.businessProductsContainer}>
          {renderData?.map((item, index) => {
            return (
              <div className={styles.businessProductsItem1} key={index}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.image?.url}`}
                  width={item?.image?.width}
                  height={item?.image?.height}
                  alt="product1"
                />
                {activeIndex === 0 && (
                  <div className={styles.businessProductsItem1Text}>
                    <p>{item?.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default BusinessProducts;
