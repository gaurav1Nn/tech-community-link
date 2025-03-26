
import { useEffect, useState } from 'react';

const stats = [
  { value: 40, label: "Increase in student engagement" },
  { value: 350, label: "Interview experiences shared" },
  { value: 25, label: "Tech roadmaps created" },
  { value: 80, label: "Campus events organized" }
];

const StatsSection = () => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

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
      { threshold: 0.5 }
    );
    
    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasAnimated]);
  
  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t);
  
  return (
    <div id="stats-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-2">
                  <span className="text-4xl md:text-5xl font-display font-bold text-foreground inline-flex items-baseline">
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
