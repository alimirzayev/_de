"use client"
import { Logo } from '@/assets/svg/Logo';
import { useModal } from '@/hooks/useModal';
import Modal from '@/layouts/Modal';
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'

const PharmacyHeader = ({ lang, data }: { lang: "en" | "de", data: any }) => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerContainer}>
                    <Link href={'/en/pharmacy'}>
                        <Logo />
                    </Link>

                    <div className={styles.headerRight}>
                        <nav className={styles.headerNav}>
                            <ul>
                                {data && data[0]?.attributes?.items?.data?.map((item, index) => {
                                    return (
                                        <li key={index} style={{ order: item?.attributes?.order }}>
                                            <Link href={lang !== 'de' ? item?.attributes?.url : item?.attributes?.url_de} scroll={false}>
                                                {lang !== 'de' ? item?.attributes?.title : item?.attributes?.title_de}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className={styles.headerButtons}>
                            {/* <div
                                className={`${styles.headerTopRightItem} ${styles.headerLangItem}`}
                            >
                                <Link
                                    className={`${styles.headerLangItem}`}
                                    href={lang === 'en' ? "/en/pharmacy" : "/de/pharmacy"}
                                >
                                    {lang === 'en' ? "DE" : "EN"}
                                </Link>
                            </div> */}

                            <div className={styles.headerDemo} onClick={openModal}>
                                DEMO ANFORDERN
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Modal isOpen={isOpen} onClose={closeModal} />
        </header>
    )
}

export default PharmacyHeader