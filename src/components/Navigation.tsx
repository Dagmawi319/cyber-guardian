import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Tools', path: '/tools' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary animate-neon-flicker" />
            <span className="text-xl font-bold neon-text">Cyber Guardian</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant={isActivePath(item.path) ? "default" : "ghost"}
                  className={`cyber-glow transition-all duration-300 ${
                    isActivePath(item.path) 
                      ? 'bg-primary text-primary-foreground shadow-cyber' 
                      : 'text-foreground hover:text-primary hover:shadow-glow'
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-cyber-slide-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActivePath(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start cyber-glow ${
                      isActivePath(item.path) 
                        ? 'bg-primary text-primary-foreground shadow-cyber' 
                        : 'text-foreground hover:text-primary hover:shadow-glow'
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;