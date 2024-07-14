'use client';

import { useEffect, useState, useRef } from 'react';

import styles from "./Dashboard.module.scss"

export default function Dashboard() {
    const textToType = "Welcome to dashboard";
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [cursorIndex, setCursorIndex] = useState(0);
    const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (isTyping) {
        typingIntervalRef.current = setInterval(() => {
          if (typedText.length < textToType.length) {
            setTypedText(textToType.substring(0, typedText.length + 1));
            setCursorIndex(typedText.length + 1);
          } else {
            setIsTyping(false);
            clearInterval(typingIntervalRef.current!);
          }
        }, 100);
      } else if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current!);
        typingIntervalRef.current = null;
      }

      return () => {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current!);
        }
      };
    }, [typedText, isTyping]);

    const startTyping = () => {
      setIsTyping(true);
    };

    useEffect(() => {
      startTyping();
    }, []);

  return (
    <div className={styles.body}>
        <section className={styles.body__section}>
            <p className={styles.bodysectiontext}>{typedText}<span className={styles.cursor}>|</span></p> 
        </section>
    </div>
  );
}
