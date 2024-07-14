'use client';

import styles from "./Auth.module.scss";
import { observer } from 'mobx-react-lite';
import authStore from '../../store/AuthStore';
import { useState } from 'react';

const Auth = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    if (email === '' || password === '') {
      authStore.error = 'Enter your data';
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      authStore.error = 'Incorrect email format';
      return;
    }
  
    await authStore.signin(email, password);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1500);
  };
  
  return (
    <div className={styles.body}>
        <section className={styles.body__section}>
        <h1>Sign in</h1>
          <form className={styles.body__section__form} onSubmit={handleSignIn}>
            <input 
              type="text" 
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
            {authStore.error && <p className={styles.error}>{authStore.error}</p>}
            <button type="submit">
              <span>Sign in</span>
            </button>
          </form>
        </section>
        {showSuccessMessage && authStore.isLoggedIn && <div className={styles.success}><p className={styles.success__text}>Auth success</p></div>}
    </div>
  );
});

export default Auth;