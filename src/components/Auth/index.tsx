'use client';

import styles from "./Auth.module.scss";
import { observer } from 'mobx-react-lite';
import authStore from '../../store/AuthStore';
import { useState } from 'react';

const Auth = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    if (email === '' || password === '') {
      authStore.error = 'Incorrect format';
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      authStore.error = 'Incorrect email format';
      return;
    }
  
    await authStore.signin(email, password);
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
    </div>
  );
});

export default Auth;
