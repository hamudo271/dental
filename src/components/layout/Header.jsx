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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Minish Logic: Header is transparent ONLY on Home when at top. 
  // Everywhere else (or when scrolled), it's white with a border.
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;
  
  const headerStyle = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    zIndex: 1000, 
    transition: 'all 0.4s ease',
    padding: isScrolled ? '1.2rem 0' : '2.5rem 0', // Minish has tall header initially
    backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: isTransparent ? 'none' : 'blur(10px)',
    borderBottom: isTransparent ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
    color: isTransparent ? '#fff' : '#000'
  };

  const logoStyle = {
    fontFamily: 'var(--font-main)', /* Minish uses Sans for Logo too */
    fontSize: '1.4rem', 
    letterSpacing: '0.05em', 
    fontWeight: '700',
    color: 'inherit',
    textDecoration: 'none'
  };

  const navLinkStyle = {
    fontSize: '0.95rem',
    fontWeight: 500, // Minish relies on clean medium weight
    color: 'inherit',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
    letterSpacing: '-0.01em',
    opacity: isTransparent ? 0.9 : 1
  };

  // Minish Menu Structure
  const menuItems = [
    { label: '특별함', path: '/', onClick: () => window.scrollTo(0,0) },
    { label: '의료진소개', path: '/about' },
    { label: '진료과목', path: '/services' },
    { label: '둘러보기', path: '/interior' },
    { label: '오시는길', path: '/contact' }
  ];

  return (
    <header className="header" style={headerStyle}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to="/" style={logoStyle}>
          IDEA DENTAL CLINIC
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{display: 'flex', gap: '3.5rem'}}>
          {menuItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.path} 
              style={navLinkStyle}
              onClick={item.onClick}
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
