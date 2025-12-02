import React, { useState, useEffect } from 'react';
import './navigation.css';
import logo from './assets/logo-classic-red-background.png';
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoTwitter, logoVimeo, search} from "ionicons/icons";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo-container">
            <img src={logo} alt="Fast Food logo" className="nav-logo" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Main Navigation and Social Icons Container */}
          <div className="nav-right-container">
            {/* Navigation Links */}
            <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
              <li className="home"><a href="#home" className="nav-link " onClick={() => setIsMenuOpen(false)}>HOME</a></li>
              <li><a href="#pages" className="nav-link" onClick={() => setIsMenuOpen(false)}>PAGES</a></li>
              <li><a href="#offer" className="nav-link" onClick={() => setIsMenuOpen(false)}>OUR OFFER</a></li>
              <li><a href="#galleries" className="nav-link" onClick={() => setIsMenuOpen(false)}>GALLERIES</a></li>
              <li><a href="#blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>BLOG</a></li>
              <li><a href="#shop" className="nav-link" onClick={() => setIsMenuOpen(false)}>SHOP</a></li>
            </ul>

            {/* Social Icons */}
            <div className="topBarInMenuCell">
              <button className="icon-btn">
                <IonIcon icon={logoFacebook} />
    </button>

    <button className="icon-btn">
      <IonIcon icon={logoTwitter} />
    </button>
    <button className="icon-btn">
      <IonIcon icon={logoVimeo} />
    </button>
    <button className="icon-btn">
      <IonIcon icon={search} />
    </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-tagline">
          <span className="tagline-main">Fast Food Burgers</span>
        </div>
        <h1 className="title-line-2">BEST BURGERS</h1>
        <h1 className="title-line-3">IN GALAXY</h1>
        <button className="menu-button">
          OUR MENU
        </button>
      </div>
    </>
  );
};

export default Navigation;