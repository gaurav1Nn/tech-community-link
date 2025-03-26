
import { Check, MessageSquare, Users, BookOpen, Calendar } from 'lucide-react';

const features = [
  {
    title: "College-Specific Network",
    description: "Connect with students, seniors, and alumni from your college who understand your specific academic environment.",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Interview Experiences",
    description: "Access detailed interview experiences shared by seniors who've landed roles at top tech companies.",
    icon: MessageSquare,
    color: "bg-emerald-500",
  },
  {
    title: "Tech Roadmaps",
    description: "Follow personalized tech roadmaps designed specifically for your college's placement patterns.",
    icon: BookOpen,
    color: "bg-purple-500",
  },
  {
    title: "Campus Events",
    description: "Discover and participate in hackathons, tech talks, and workshops happening right on your campus.",
    icon: Calendar,
    color: "bg-amber-500",
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className="feature-card animate-fade-in" 
      style={{ animationDelay: `${index * 150 + 300}ms` }}
    >
      <div className={`${feature.color} w-12 h-12 rounded-xl mb-5 flex items-center justify-center text-white`}>
        <feature.icon size={22} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Designed for your Campus Tech Journey</h2>
          <p className="text-lg text-muted-foreground">
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
