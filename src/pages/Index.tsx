import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
