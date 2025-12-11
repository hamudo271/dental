import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Layout.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on homepage
  const isHome = location.pathname === '/';
  
  // Header state logic
  const isTransparent = isHome && !isScrolled;
  
  const headerStyle = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    zIndex: 1000, 
    transition: 'all 0.4s ease',
    padding: isScrolled ? '1rem 0' : '2rem 0',
    backgroundColor: isTransparent ? 'transparent' : '#fff',
    borderBottom: isTransparent ? 'none' : '1px solid rgba(0,0,0,0.05)',
    color: isTransparent ? '#fff' : '#000'
  };

  const logoStyle = {
    fontFamily: 'var(--font-serif)', 
    fontSize: '1.5rem', 
    letterSpacing: '0.1em', 
    fontWeight: 'bold',
    color: 'inherit',
    textDecoration: 'none'
  };

  const navLinkStyle = {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: 'inherit',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
    letterSpacing: '-0.02em' // Korean font spacing
  };

  // Idea Dental Exact Menu
  const menuItems = [
    { label: '특별함', path: '/' }, // Specialty -> Home
    { label: '의료진소개', path: '/about' }, // Medical Staff
    { label: '진료과목', path: '/services' }, // Services
    { label: '둘러보기', path: '/interior' }, // Interior (New)
    { label: '오시는길', path: '/contact' } // Location
  ];

  return (
    <header className="header" style={headerStyle}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to="/" style={logoStyle}>
          IDEA DENTAL
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{display: 'flex', gap: '2.5rem'}}>
          {menuItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.path} 
              style={navLinkStyle}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: 'inherit', 
            display: 'none' 
          }} 
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
