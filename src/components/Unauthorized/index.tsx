'use client';

import styles from "./Unauthorized.module.scss"
import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className={styles.body}>
        <section className={styles.body__section}>
            <p>To access this page, you need to <Link className={styles.body__section__link} href="/auth">sign in</Link></p>
        </section>
    </div>
  );
}