import { ITestingOption } from "@/models";
import styles from "./styles.module.css";

const HomeFeatures = ({data}: {data: ITestingOption[]}) => {
  return (
    <section className={`${styles.homeServices} container`}>
      <div className={styles.homeServicesWrapper}>
        {data &&
          data?.map((item, index) => {
            return (
              <div key={index} className={styles.homeServicesCard}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default HomeFeatures;
