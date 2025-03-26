
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
          ? 'bg-white/80 backdrop-blur border-b border-gray-200/80 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
        >
          <div className="relative flex items-center">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/70 to-primary flex items-center justify-center shadow-md shadow-primary/20">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-foreground ml-2 font-display font-semibold text-xl tracking-tight">CampusConnect</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="#features" className="nav-link">Features</Link>
          <Link to="#testimonials" className="nav-link">Testimonials</Link>
          <Link to="#about" className="nav-link">About</Link>
          <Link to="#faq" className="nav-link">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="hidden sm:inline-flex font-medium text-sm text-primary hover:text-primary/90 transition-colors"
          >
            Sign in
          </Link>
          <Link 
            to="/register" 
            className="btn-primary text-sm shadow-lg shadow-primary/20"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
