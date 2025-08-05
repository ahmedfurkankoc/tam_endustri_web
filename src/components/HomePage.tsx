import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProblemStatement from './ProblemStatement';
import Services from './Services';
import RegulatoryPower from './RegulatoryPower';
import GlobalApprovals from './GlobalApprovals';
import ConceptValidators from './ConceptValidators';
import Testimonial from './Testimonial';
import CTA from './CTA';
import Footer from './Footer';

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