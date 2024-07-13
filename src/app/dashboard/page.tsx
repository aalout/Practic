'use client';
import { useState, useEffect } from 'react';
import AuthStore from '@/store/AuthStore';

export default function Dash() {
  const [showAuthMessage, setShowAuthMessage] = useState(false);

  useEffect(() => {
    if (!AuthStore.isLoggedIn) { 
      setShowAuthMessage(true);
    } 
  }, []);

  return (
    <div>
      {AuthStore.isLoggedIn && (
        <div>
          sasasas 
        </div>
      )}
      {!AuthStore.isLoggedIn && (
        <p>Для доступа к этой странице вам необходимо авторизоваться.</p>
      )}
    </div>
  );
}
