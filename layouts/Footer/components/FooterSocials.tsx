import Link from "next/link";
import React, { Fragment } from "react";
import styles from '../styles.module.css'

const FooterSocials = ({ data }: { data: any }) => {
  return (
    <Fragment>
      {data ? (
        <div className={styles.footerSocials}>
          <Link target={"_blank"} href={data?.facebook}>
            <i className="facebook-icon" />
          </Link>

          <Link target={"_blank"} href={data?.twitter}>
            <i className="twitter-icon" />
          </Link>

          <Link target={"_blank"} href={data?.linkedIn}>
            <i className="linkedin-icon" />
          </Link>

          <Link target={"_blank"} href={data?.instagram}>
            <i className="instagram-icon" />
          </Link>

          <Link target={"_blank"} href={data?.youtube}>
            <i className="youtube-icon" />
          </Link>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FooterSocials;
