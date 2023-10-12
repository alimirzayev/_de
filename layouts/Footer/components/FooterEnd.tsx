import Link from "next/link";
import FooterSocials from "./FooterSocials";
import styles from "../styles.module.css";

const FooterEnd = ({
  footerDetails,
  isGerman,
  isPharmacy,
}: {
  footerDetails: any;
  isGerman: any;
  isPharmacy: any;
}) => {
  return (
    <div className={styles.footerEnd}>
      <div className={styles.footerEndLeft}>
        <p>{footerDetails?.data?.copyright}</p>
      </div>

      <div className={styles.footerEndCenter}>
        <FooterSocials data={footerDetails?.data?.socials} />
      </div>
    </div>
  );
};

export default FooterEnd;
