import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import Services from '../components/Services';
import RegulatoryPower from '../components/RegulatoryPower';
import GlobalApprovals from '../components/GlobalApprovals';
import ConceptValidators from '../components/ConceptValidators';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemStatement />
      <Services />
      <RegulatoryPower />
      <GlobalApprovals />
      <ConceptValidators />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage; 