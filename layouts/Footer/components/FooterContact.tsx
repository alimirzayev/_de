import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "../styles.module.css";

const FooterContact = ({
  footerDetails,
  linksData,
  oldUrl,
  isGerman,
  isPharmacy,
}: {
  footerDetails: any;
  linksData: any;
  oldUrl: any;
  isGerman: any;
  isPharmacy: any;
}) => {
  const pathname = usePathname();
  const params = useSearchParams();
  const page = pathname?.split("/")[1];
  const page2 = pathname?.split("/")[2];
  const isFrankfurt = page === "frankfurt" || page2 === "frankfurt" || params.get('p') == 'frankfurt';
  const isDusseldorf = page === 'dusseldorf' || page2 === "dusseldorf" || params.get('p') == 'dusseldorf';

  return (
    <div className={styles.footerDetails}>
      <div className={styles.footerDetailsItem}>
        <p>{isGerman ? "Informationen" : "Content"}</p>
        {linksData &&
         linksData?.data?.slice(0, 4)?.map((item: any, index: number) => {
            return (
              <div className={styles.linkItem} key={index}>
                {
                  isDusseldorf || isFrankfurt ?
                    <Link
                      href={{
                        pathname: `${!isGerman ? item?.attributes?.url : item?.attributes?.url_de}`,
                        query: { p: isFrankfurt ? 'frankfurt' : isDusseldorf ? 'dusseldorf' : '' },
                      }}
                      key={index}
                    >
                      {!isGerman
                        ? item?.attributes?.title
                        : item?.attributes?.title_de}
                    </Link>
                    :
                    <Link
                      href={{
                        pathname: `${!isGerman ? item?.attributes?.url : item?.attributes?.url_de}`
                      }}
                      key={index}
                    >
                      {!isGerman
                        ? item?.attributes?.title
                        : item?.attributes?.title_de}
                    </Link>
                }
              </div>
            );
          })}
      </div>
      <div className={styles.footerDetailsItem}>
        <p></p>
        {linksData &&
          linksData?.data?.slice(4, 7)?.map((item: any, index: number) => {
            return (
              <div className={styles.linkItem} key={index}>
                {
                  isDusseldorf || isFrankfurt ?
                    <Link
                      href={{
                        pathname: `${!isGerman ? item?.attributes?.url : item?.attributes?.url_de}`,
                        query: { p: isFrankfurt ? 'frankfurt' : isDusseldorf ? 'dusseldorf' : '' },
                      }}
                      key={index}
                    >
                      {!isGerman
                        ? item?.attributes?.title
                        : item?.attributes?.title_de}
                    </Link>
                    :
                    <Link
                      href={{
                        pathname: `${!isGerman ? item?.attributes?.url : item?.attributes?.url_de}`
                      }}
                      key={index}
                    >
                      {!isGerman
                        ? item?.attributes?.title
                        : item?.attributes?.title_de}
                    </Link>
                }
              </div>
            );
          })}
      </div>
      <div className={styles.footerDetailsItem}>
        <p>{footerDetails?.data?.contactTitle}</p>
        <span>{isPharmacy ? 'sales@ecocare.de' : footerDetails?.data?.email}</span>
        <br />
        <span>
          {footerDetails?.data?.contactPhone[0]?.title}:{" "}
          {isPharmacy ? '+49 21141872902' : footerDetails?.data?.contactPhone[0]?.phone}
        </span>
        <div className={styles.addressInfo}>
          <span>Address:<br />{
            isPharmacy ? 'EcoCare GmbH, Kolbergerstr. 7,\n40599 Düsseldorf Germany' : footerDetails?.data?.addressInfo
          }</span>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
