import styles from "./styles.module.css";
import circle1 from "../../../assets/image/b/circle1.png";
import circle2 from "../../../assets/image/b/circle2.png";
import circle3 from "../../../assets/image/b/circle3.png";
import circle4 from "../../../assets/image/b/circle4.png";
import Image from "next/image";

const BusinessOffer = ({ data }: { data: any }) => {
  return (
    <section className={styles.businessOffer}>
      <div className={"container"}>
        <div className={styles.businessOfferTitle}>
          <h4>{data?.title}</h4>
        </div>

        <div className={styles.businessOfferContainer}>
          <div className={styles.businessOfferItem}>
            <Image src={circle1} alt={""} />
            <p>{data?.items[0]?.title}</p>
          </div>
          <div className={styles.businessOfferItem}>
            <Image src={circle2} alt={""} />
            <p>
            {data?.items[1]?.title}
            </p>
          </div>
          <div className={styles.businessOfferItem}>
            <Image src={circle3} alt={""} />
            <p>
            {data?.items[2]?.title}
            </p>
          </div>
          <div className={styles.businessOfferItem}>
            <Image src={circle4} alt={""} />
            <p>
            {data?.items[3]?.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOffer;
