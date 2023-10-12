"use client";
import { sectionFadeScale } from "@/animations";
import { ILocation } from "@/models";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.css";

const HomeLocations = ({
  data,
  lang,
}: {
  data: ILocation;
  lang: "en" | "de";
}) => {
  return (
    <section className={`${styles.homeLocations}`}>
      <div className={styles.homeLocationsWrapper}>
        <div className="container" style={{ width: "100%" }}>
          <div className={styles.homeLocationsContainer}>
            {data.Locations.map((city, index) => {
              return (
                <motion.div
                  {...sectionFadeScale}
                  key={index}
                  className={styles.homeLocationsItem}
                >
                  <i className="location-top-icon" />
                  <Link href={city.link}>{city.name}</Link>
                </motion.div>
              );
            })}
          </div>

          <Link
            className={styles.homeLocationsLink}
            href={`${process.env.SHOP_BASE_URL}/web/locations`}
          >
            <button className={styles.homeLocationsButton}>
              {lang === "de" ? "Alle Standorte Sehen" : `See all locations`}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeLocations;
