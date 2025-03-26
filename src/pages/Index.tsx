
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll to top on page load and trigger animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add dark mode class to body
    document.documentElement.classList.add('dark');
    
    // Set loaded state after a small delay for entrance animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-40 -mr-40 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 -mb-40 -ml-40 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[60px]" />
      </div>
      
      <Navbar />
      <HeroSection isVisible={isLoaded} />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
