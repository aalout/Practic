'use client';

import styles from "./Header.module.scss"
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
        <nav className={styles.header__nav}>
            <Link href="/auth" className={styles.header__nav__link}>
                <div className={styles.header__nav__link__con__1}>
                    <p>Sign in</p>
                </div>
            </Link>
            <Link href="/" className={styles.header__nav__link}>
                <div className={styles.header__nav__link__con__3}>
                    <p>Home</p>
                </div>
            </Link>
            <Link href="/dashboard" className={styles.header__nav__link}>
                <div className={styles.header__nav__link__con__2}>
                    <p>Dashboard</p>
                </div>
            </Link>
        </nav>
    </div>
  );
}