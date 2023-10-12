"use client"
import { Logo } from '@/assets/svg/Logo';
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'

const Header = ({ lang, data }: { lang: "en" | "de", data: any }) => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerContainer}>
                    <Link href={'/'}>
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

                        <div className={styles.headerTopRight}>
                            <div className={styles.headerTopRightItem}>
                                <Link
                                    href={
                                        `${process.env.SHOP_BASE_URL}/web/login?web=true&account_number=000000557`
                                    }
                                >
                                    {lang === 'de' ? "Anmelden" : "Log In"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header