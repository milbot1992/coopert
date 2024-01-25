import React, { useState } from 'react';
import CoopertLogo from '../assets/LogoSmall.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Styling/NavAppear.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useTransform, useScroll } from "framer-motion";

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [400, 600], [0, 1]);

  const handleLinkClick = (id) => {
      toggleMenu();
      const element = document.getElementById(id);

      if (element) {
          const offset = 150; 
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
              top: elementPosition,
              behavior: 'smooth',
          });

          closeMenu();
      }
  };

  return (
      <motion.div style={{ opacity }}>
          {menuOpen ? (
                  <CloseIcon className='menu-icon1' fontSize='large' onClick={toggleMenu} />
                  ) : (
                  <MenuIcon className='menu-icon1' fontSize='large' onClick={toggleMenu} />
                  )}
              <nav>
                  {menuOpen && (
                  <div className='popup-menu'>
                      <li className='menu-item' onClick={() => handleLinkClick('about')}>
                      MUSIC
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('calendar')}>
                      VIDEO
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('quotes')}>
                      LIVE
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('contact')}>
                      SHOP
                      </li>
                  </div>
                  )}
              <li>
                  <img src={CoopertLogo} className='nav-logo' onClick={() => handleLinkClick('background')}></img>
              </li>
                  <li className='nav-title' onClick={() => handleLinkClick('about')}>
                      MUSIC
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('calendar')}>
                      VIDEO
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('quotes')}>
                      LIVE
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('contact')}>
                      SHOP
                  </li>
              <li>
                  <a className='insta-icon' href="https://www.instagram.com/cooooper.t/" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                  </a>
              </li>
          </nav>
      </motion.div>
  );
}