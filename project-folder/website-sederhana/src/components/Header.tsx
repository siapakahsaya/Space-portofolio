import React, { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <Coffee className={`h-8 w-8 ${isScrolled ? 'text-coffee-dark' : 'text-white'}`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-coffee-dark' : 'text-white'}`}>
            Caffeine Culture
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-coffee-dark hover:text-coffee-medium' : 'text-white hover:text-cream'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-coffee-dark' : 'bg-white'} ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-coffee-dark' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-coffee-dark' : 'bg-white'} ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="container-custom space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block font-medium text-coffee-dark hover:text-coffee-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;