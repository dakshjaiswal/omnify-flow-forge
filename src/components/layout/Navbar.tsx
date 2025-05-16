
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Builder', path: '/workflow-builder' },
    { name: 'Templates', path: '/templates' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="border-b border-dark-300/50 backdrop-blur-md bg-dark-500/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-gradient-teal flex items-center justify-center shadow-glow">
            <span className="text-white font-bold">O</span>
          </div>
          <span className="font-bold text-xl text-white">Omnify</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.path 
                  ? "text-teal bg-dark-400/50" 
                  : "text-gray-300 hover:text-teal hover:bg-dark-400/30"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="border-teal/30 text-teal hover:bg-teal/10">
            Log in
          </Button>
          <Button size="sm" className="bg-gradient-teal hover:opacity-90">
            Start Free
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 border-t border-dark-300/50 bg-dark-500/95 animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path 
                    ? "text-teal bg-dark-400/50" 
                    : "text-gray-300 hover:text-teal hover:bg-dark-400/30"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-2 mt-4">
            <Button variant="outline" size="sm" className="border-teal/30 text-teal hover:bg-teal/10 flex-1">
              Log in
            </Button>
            <Button size="sm" className="bg-gradient-teal hover:opacity-90 flex-1">
              Start Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
