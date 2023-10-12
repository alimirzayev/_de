"use client";
import { FooterContact, FooterEnd, FooterLinks } from "./components";
import Logo2 from "@/assets/svg/Logo2";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerDetails, setFooterDetails] = useState(null);
  const [footerLinks, setFooterLinks] = useState(null);
  const pathname = usePathname();
  const page = pathname?.split("/")[1];
  const page2 = pathname?.split("/")[2];
  const isGerman = page === "de";

  const heading = footerDetails?.data?.title;
  const parts = heading?.split(/<<<|>>>/)?.filter((part) => part);
  const normalTitle = parts ? parts[0] : null;
  const italicTitle = parts ? parts[1] : null;
  const remaningTitle = parts ? parts[2] : null;

  const linksData = footerLinks?.data[0]?.attributes?.items;
  const oldUrl = "https://www.ecocare.center";

  useEffect(() => {
    async function fetchFooterData() {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_BASE_URL
        }/api/website-footer?populate=deep${page === "de" ? "&locale=de" : ""}`,
        {
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      setFooterDetails(data);
    }

    fetchFooterData();
  }, [page]);

  useEffect(() => {
    async function fetchFooterLinks() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/menus?populate=deep&filters[title][$eqi]=footer-main`,
        {
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      setFooterLinks(data);
    }
    fetchFooterLinks();
  }, []);

  const isPharmacy = page === "pharmacy" || page2 === "pharmacy";

  return (
    <footer id="footer" className={styles.footer}>
      <div className={`${styles.footerCont} container`}>
        <div className={styles.footerLogo}>
          <Logo2 />
        </div>

          <div className={styles.footerContainer}>
            <div className={styles.footerHeading}>
              <h6>
                {normalTitle}
                <span>{italicTitle}</span>
                {remaningTitle}
              </h6>
            </div>

            <FooterContact
              isPharmacy={isPharmacy}
              footerDetails={footerDetails}
              isGerman={isGerman}
              linksData={linksData}
              oldUrl={oldUrl}
            />
          </div>

        <hr />

        <FooterEnd
          footerDetails={footerDetails}
          isGerman={isGerman}
          isPharmacy={isPharmacy}
        />
      </div>
    </footer>
  );
};

export default Footer;
