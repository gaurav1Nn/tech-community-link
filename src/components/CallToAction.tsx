
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Animated particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20 animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-white mb-6 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Build Your Tech Success Story
          </h2>
          <p className={`text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join CampusConnect today and tap into your college's tech ecosystem. Connect, learn, and grow with peers who understand your journey.
          </p>
          <div className={`transition-all duration-700 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link 
              to="/register"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg relative overflow-hidden inline-block"
            >
              <span className="relative z-10">Start Your Journey</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-white/90 transform scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
