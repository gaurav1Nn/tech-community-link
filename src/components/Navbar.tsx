
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-center">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-foreground ml-2 font-display font-semibold text-xl tracking-tight relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary group-hover:after:w-full after:transition-all after:duration-300">CampusConnect</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="#features" className="nav-link relative overflow-hidden px-2 py-1">
            <span className="relative z-10">Features</span>
            <span className="absolute inset-0 bg-primary/10 transform -translate-y-full hover:translate-y-0 transition-transform duration-300 rounded"></span>
          </Link>
          <Link to="#testimonials" className="nav-link relative overflow-hidden px-2 py-1">
            <span className="relative z-10">Testimonials</span>
            <span className="absolute inset-0 bg-primary/10 transform -translate-y-full hover:translate-y-0 transition-transform duration-300 rounded"></span>
          </Link>
          <Link to="#about" className="nav-link relative overflow-hidden px-2 py-1">
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-primary/10 transform -translate-y-full hover:translate-y-0 transition-transform duration-300 rounded"></span>
          </Link>
          <Link to="#faq" className="nav-link relative overflow-hidden px-2 py-1">
            <span className="relative z-10">FAQ</span>
            <span className="absolute inset-0 bg-primary/10 transform -translate-y-full hover:translate-y-0 transition-transform duration-300 rounded"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="hidden sm:inline-flex font-medium text-sm text-primary hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
          >
            Sign in
          </Link>
          <Link 
            to="/register" 
            className="btn-primary text-sm shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-accent transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
