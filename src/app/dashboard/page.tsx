'use client';
import { useState, useEffect } from 'react';
import AuthStore from '@/store/AuthStore';
import Unauthorized from '@/components/Unauthorized';
import DashContent from '@/components/DashContent';

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
        <DashContent/>
      )}
      {!AuthStore.isLoggedIn && (
        <Unauthorized/>
      )}
    </div>
  );
}
