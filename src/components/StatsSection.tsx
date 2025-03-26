
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 40, label: "Increase in student engagement", icon: "📈" },
  { value: 350, label: "Interview experiences shared", icon: "💼" },
  { value: 25, label: "Tech roadmaps created", icon: "🗺️" },
  { value: 80, label: "Campus events organized", icon: "🎓" }
];

const StatsSection = () => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2000; // animation duration in ms
            const frameDuration = 1000 / 60; // 60fps
            const totalFrames = Math.round(duration / frameDuration);
            let frame = 0;
            
            const timer = setInterval(() => {
              frame++;
              const progress = frame / totalFrames;
              const currentValue = Math.round(easeOutQuad(progress) * stat.value);
              
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = currentValue;
                return newCounters;
              });
              
              if (frame === totalFrames) {
                clearInterval(timer);
              }
            }, frameDuration);
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);
  
  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t);
  
  return (
    <div id="stats-section" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-700 backdrop-blur-sm rounded-2xl p-6 border border-white/5 bg-white/5 hover:bg-white/10 hover:scale-105 ${
                  hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="text-3xl bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center">
                    <span>{stat.icon}</span>
                  </div>
                </div>
                <div className="relative mb-2">
                  <span className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-flex items-baseline">
                    {counters[index]}
                    {stat.label.includes("Increase") && <span className="text-primary ml-1">%</span>}
                    {stat.label.includes("events") && <span className="text-primary ml-1">+</span>}
                  </span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground max-w-[180px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
