"use client"
import { sectionFade } from "@/animations";
import { IOneClick } from "@/models";
import { parseText } from "@/utils/helpers";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const HomeDoctor = ({ data, lang, comingSoon }: { data: IOneClick; lang: string; comingSoon?: boolean | undefined }) => {
  const title = data?.title;
  const { normalTitle, italicTitle, remainingTitle } = parseText(title);

  return (
    <section id="video" className={`${styles.homeDoctor} container`}>
      <div className={styles.homeDoctorWrapper}>
        <motion.div {...sectionFade} className={styles.homeDoctorContent}>
          <div className={styles.homeDoctorContentHeading}>
            <p>{data?.sideTitle}</p>
          </div>

          <div className={styles.homeDoctorContentArea}>
            <h3>
              {normalTitle}
              <i>{italicTitle}</i>
              {remainingTitle}
            </h3>
            <p>{data?.text}</p>
            <div className={styles.homeDoctorContentBtn}>
              {comingSoon ? <button disabled={true}>
                <Link
                  href={
                    `${process.env.SHOP_BASE_URL}/web/products?account_number=0000005579&group_id=104`
                  }
                >
                  Coming Soon
                </Link>
              </button> : <button>
                <Link
                  href={
                    `${process.env.SHOP_BASE_URL}/web/products?account_number=0000005579&group_id=104`
                  }
                >
                  {data?.bookAppointment}
                </Link>
              </button>}

            </div>
          </div>
        </motion.div>

        <motion.div {...sectionFade} className={styles.homeDoctorImg}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.image?.url}`}
            width={data?.image?.formats?.medium?.width}
            height={data?.image?.formats?.small?.height}
            alt={"doctor"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeDoctor;
