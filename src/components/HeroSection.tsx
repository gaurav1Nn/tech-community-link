
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden pt-32 pb-16 sm:pb-24 lg:pb-32 min-h-screen flex flex-col justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-background to-background/50" />
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 -mb-12 h-[400px] w-[400px] rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full inline-block mb-6">
              Connecting Campus Tech Talent
            </span>
          </div>
          
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6 text-balance transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Your College Tech Community,{' '}
            <span className="text-primary">Reimagined</span>
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
            <Link to="/register" className="btn-primary shadow-xl shadow-primary/20">
              Join the Community
            </Link>
            <Link to="#features" className="btn-secondary">
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
          <div className="relative z-0 rounded-2xl overflow-hidden border border-border shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" 
              alt="Campus Connect Platform" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
