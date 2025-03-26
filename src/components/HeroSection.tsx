
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Add floating animation to the hero image
  useEffect(() => {
    const interval = setInterval(() => {
      if (heroRef.current) {
        const image = heroRef.current.querySelector('.hero-image');
        if (image) {
          image.classList.toggle('translate-y-2');
        }
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden pt-32 pb-16 sm:pb-24 lg:pb-32 min-h-screen flex flex-col justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-background to-background/30" />
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 -mb-12 h-[400px] w-[400px] rounded-full bg-primary/15 blur-2xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full inline-block mb-6 backdrop-blur-sm">
              Connecting Campus Tech Talent
            </span>
          </div>
          
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6 text-balance transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Your College Tech Community,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">Reimagined</span>
          </h1>
          
          <p 
            className={`text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance transition-all duration-1000 delay-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Building bridges between students, seniors, and alumni to create a thriving tech ecosystem within your campus. Share experiences, discover opportunities, and grow together.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link to="/register" className="btn-primary shadow-xl shadow-primary/20 relative overflow-hidden group">
              <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              Join the Community
            </Link>
            <Link to="#features" className="btn-secondary relative overflow-hidden group">
              <span className="absolute top-0 left-0 w-full h-full bg-primary/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              Explore Features
            </Link>
          </div>
        </div>
        
        <div 
          className={`mt-16 md:mt-24 relative max-w-5xl mx-auto transition-all duration-1000 delay-1100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="relative z-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm hero-image transition-transform duration-1000 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" 
              alt="Campus Connect Platform" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Glowing elements */}
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
