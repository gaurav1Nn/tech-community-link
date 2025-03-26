
import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Users, BookOpen, Calendar } from 'lucide-react';

const features = [
  {
    title: "College-Specific Network",
    description: "Connect with students, seniors, and alumni from your college who understand your specific academic environment.",
    icon: Users,
    color: "from-blue-700 to-blue-500",
  },
  {
    title: "Interview Experiences",
    description: "Access detailed interview experiences shared by seniors who've landed roles at top tech companies.",
    icon: MessageSquare,
    color: "from-emerald-700 to-emerald-500",
  },
  {
    title: "Tech Roadmaps",
    description: "Follow personalized tech roadmaps designed specifically for your college's placement patterns.",
    icon: BookOpen,
    color: "from-purple-700 to-purple-500",
  },
  {
    title: "Campus Events",
    description: "Discover and participate in hackathons, tech talks, and workshops happening right on your campus.",
    icon: Calendar,
    color: "from-amber-700 to-amber-500",
  }
];

const FeatureCard = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`feature-card transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } hover:scale-105 relative z-10 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl group`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" style={{ 
        background: `radial-gradient(circle at center, var(--${feature.color.split('-')[1]}-500) 0%, transparent 70%)` 
      }}></div>
      
      <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl mb-5 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon size={24} className="group-hover:animate-pulse" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
      
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
      
      {/* Subtle floating animation */}
      <div className="absolute -bottom-1 -right-1 w-20 h-20 rounded-full bg-gradient-to-tr opacity-10 blur-2xl animate-pulse-slow" style={{ 
        background: `radial-gradient(circle at center, var(--${feature.color.split('-')[1]}-500) 0%, transparent 70%)`,
        animationDuration: `${3 + index}s`
      }}></div>
    </div>
  );
};

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="features" className="py-32 bg-black/50 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      
      {/* Animated particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/5 animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 5}px`,
              height: `${Math.random() * 40 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
            Designed for your Campus Tech Journey
          </h2>
          <p className="text-xl text-gray-400">
            CampusConnect offers features specifically designed to enhance your college tech experience and boost placement opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
