'use client';

import { useEffect, useState } from 'react';

import styles from "./Dashboard.module.scss"

export default function Dashboard() {
    const textToType = "Welcome to dashboard";
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [cursorIndex, setCursorIndex] = useState(0);
  
    useEffect(() => {
      let typingInterval;
      if (isTyping) {
        typingInterval = setInterval(() => {
          if (typedText.length < textToType.length) {
            setTypedText(textToType.substring(0, typedText.length + 1));
            setCursorIndex(typedText.length + 1);
          } else {
            setIsTyping(false);
            clearInterval(typingInterval);
          }
        }, 100);
      }
      return () => clearInterval(typingInterval);
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
            <p className={styles.body__section__text}>{typedText}<span className={styles.cursor}>|</span></p> 
        </section>
    </div>
  );
}