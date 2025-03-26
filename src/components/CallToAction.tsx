
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Build Your Tech Success Story
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto">
            Join CampusConnect today and tap into your college's tech ecosystem. Connect, learn, and grow with peers who understand your journey.
          </p>
          <Link 
            to="/register"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
