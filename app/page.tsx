'use client';

import { useState } from 'react';
import LoginPage from '@/components/login-page';
import ResultsPage from '@/components/results-page';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (enrollmentNumber: string, password: string) => {
    // Hard-coded authentication
    const validEnrollmentNumber = '202502626010076';
    const validPassword = 'Jasmit@1234';

    if (enrollmentNumber === validEnrollmentNumber && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid enrollment number or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <ResultsPage onLogout={handleLogout} />
      )}
    </main>
  );
}
