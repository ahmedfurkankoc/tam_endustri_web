import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
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