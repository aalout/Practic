'use client';

import styles from "./Auth.module.scss";
import Link from "next/link";
import { observer } from 'mobx-react';
import authStore from '../../store/AuthStore';
import { useState } from 'react';

const Auth = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    await authStore.signin(email, password);
  }

  return (
    <div className={styles.body}>
        <section className={styles.body__section}>
        <h1>Sign in</h1>
          <form className={styles.body__section__form} onSubmit={handleSignIn}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              <span>Sign in</span>
            </button>
          </form>
        </section>
    </div>
  );
});

export default Auth;
