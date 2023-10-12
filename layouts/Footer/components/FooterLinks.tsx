import Link from "next/link";
import styles from "../styles.module.css";

const FooterLinks = ({ linksData, oldUrl, isGerman }: {linksData: any, oldUrl: any, isGerman: any}) => {
  return (
    <div className={styles.footerLinks}>
      {linksData &&
        linksData?.data.map((item: any, index: number) => {
          return (
            <Link
              href={`${oldUrl}${
                !isGerman ? item?.attributes?.url : item?.attributes?.url_de
              }`}
              key={index}
              target={"_blank"}
            >
              {!isGerman ? item?.attributes?.title : item?.attributes?.title_de}
            </Link>
          );
        })}
    </div>
  );
};

export default FooterLinks;
