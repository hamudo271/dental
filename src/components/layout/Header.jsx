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
  // If we want to use the CSS classes fully, we might toggle a class on the header
  const headerClass = `header ${isHome && !isScrolled ? 'transparent' : 'scrolled'}`;

  // Minish Menu Structure with Submenus
  const menuItems = [
    { 
      label: '특별함', 
      path: '/', 
      subItems: [
        { label: '병원소개', path: '/about' },
        { label: '진료철학', path: '/philosophy' },
        { label: '오시는길', path: '/contact' }
      ]
    },
    { 
      label: '의료진소개', 
      path: '/about',
      subItems: [
        { label: '대표원장', path: '/about' },
        { label: '의료진', path: '/team' }
      ]
    },
    { 
      label: '진료과목', 
      path: '/services',
      subItems: [
        { label: '임플란트', path: '/services/implant' },
        { label: '심미보철', path: '/services/aesthetic' },
        { label: '치아교정', path: '/services/ortho' },
        { label: '일반진료', path: '/services/general' }
      ]
    },
    { 
      label: '둘러보기', 
      path: '/interior',
      subItems: [
        { label: '병원가이드', path: '/interior' },
        { label: '시설안내', path: '/facilities' }
      ]
    },
    { 
      label: '오시는길', 
      path: '/contact',
      subItems: [
          { label: '오시는길', path: '/contact' },
          { label: '진료시간', path: '/hours' }
      ]
    }
  ];

  return (
    <header className={headerClass}>
      <div className="gnb">
        <Link to="/" className="logo">
          IDEA DENTAL CLINIC
        </Link>
        
        {/* Desktop Nav */}
        <nav>
          <ul className="gnb-menu">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} onClick={() => window.scrollTo(0, 0)}>
                  {item.label}
                </Link>
                {item.subItems && (
                  <ul className="depth2">
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link to={sub.path}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
