import { Logo } from "@/assets/svg/Logo";
import Logo2 from "@/assets/svg/Logo2";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styles from './style.module.css'

export default async function Instructions({ params }) {
  return (
    <section className={styles.instructions}>
        <div className="container">
            <div className={styles.heading}>
                <h1>Bitte aktiviere dein Testkit zuerst.</h1>

                <p>Nur aktivierte Testkits können vom Labor ausgewertet werden.</p>
            </div>

            <div className={styles.imageContainer}>
                <h2>Video-Anleitung demnächst verfügbar</h2>
                <Image src={require('./poster.png')} alt={'video_png'}/>
            </div>
        </div>
    </section>
  );
}
