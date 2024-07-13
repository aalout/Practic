'use client';

import styles from "./DashContent.module.scss"

export default function DashContent() {
  return (
    <div className={styles.body}>
        <section className={styles.body__section}>
            <p>———<br/>Dashboard<br/>———</p>
        </section>
    </div>
  );
}