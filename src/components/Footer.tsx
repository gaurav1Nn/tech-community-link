
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/70 to-primary flex items-center justify-center shadow-md shadow-primary/20">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-foreground ml-2 font-display font-semibold text-lg">CampusConnect</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Connecting campus tech talent for better opportunities and growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Roadmap', 'Pricing', 'FAQ'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Terms', 'Privacy', 'Cookies', 'Licenses'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CampusConnect. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map(platform => (
              <Link key={platform} to="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
