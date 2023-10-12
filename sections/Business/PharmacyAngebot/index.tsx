"use client"
import { parseText } from '@/utils/helpers';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';
import circle1 from '../../../assets/image/circleorange1.png';
import circle2 from '../../../assets/image/circleorange2.png';
import circle3 from '../../../assets/image/circleorange3.png';
import circle4 from '../../../assets/image/circleorange4.png';
import { useModal } from '@/hooks/useModal';
import Modal from '@/layouts/Modal';

const PharmacyAngebot = ({ data }: { data: any }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const title = data?.title;
  const hugeTitle = data?.hugeTitle;

  const { normalTitle, italicTitle, remainingTitle } = parseText(title);
  const circles = [circle1, circle2, circle3, circle4];

  const {
    normalTitle: normalHugeTitle,
    italicTitle: italicHugeTitle,
    remainingTitle: remainingHugeTitle,
  } = parseText(hugeTitle);

  return (
    <section id='angebot' className={styles.pharmacyAngebot}>
      <div className="container">
        <div className={styles.pharmacyAngebotTitle}>
          <h4>{normalTitle} <i>{italicTitle}</i> {remainingTitle}</h4>
        </div>

        <div className={styles.pharmacyAngebotList}>
          {
            data?.rows && data?.rows.map((item, index) => {
              return (
                <div key={item.id} className={styles.pharmacyAngebotListItem}>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              )
            })
          }
        </div>

        <div className={styles.pharmacyAngebotHugeTitle}>
          <h4>{normalHugeTitle} <i>{italicHugeTitle}</i> {remainingHugeTitle}</h4>
        </div>

        <div className={styles.pharmacyAngebotCircles}>
          {
            data?.circles && data?.circles.map((item, index) => {
              return (
                <div className={styles.pharmacyAngebotCircle}>
                  <Image src={circles[index % circles.length]} alt={'circles'} />
                  <h5>{item?.title}</h5>
                </div>
              );
            })
          }
        </div>

        <div className={styles.pharmacyAngebotBtn} onClick={openModal}>
          <button>
            {data?.button?.name}
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </section>
  )
}

export default PharmacyAngebot