
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-display font-bold text-primary mb-6">404</h1>
        <p className="text-xl text-foreground mb-8">
          We couldn't find the page you're looking for.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
