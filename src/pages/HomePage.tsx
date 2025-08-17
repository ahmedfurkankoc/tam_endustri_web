import React from 'react';
import HeaderNew from '../components/Header';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Services from '../components/Services';
import DesignManufacturing from '../components/DesignManufacturing';
import TrainingServices from '../components/TrainingServices';
import BusinessConsulting from '../components/BusinessConsulting';
import Testimonial from '../components/Testimonial';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeaderNew />
      <Hero />
      <Challenges />
      <Services />
      <DesignManufacturing />
      <TrainingServices />
      <BusinessConsulting />
      <Testimonial />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage; 