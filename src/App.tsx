import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import ContactPage from './pages/ContactPage';

import Lenis from 'lenis';

const App: React.FC = () => {
  useEffect(() => {
    // Lenis smooth scrolling initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Make lenis globally accessible
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/en" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/en/about" element={<AboutPage />} />


        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/en/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;