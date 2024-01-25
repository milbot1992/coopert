import React, { useState } from 'react';
import CoopertLogo from '../assets/LogoSmall.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import spotifyIcon from '@iconify-icons/mdi/spotify';
import { Icon } from '@iconify/react';
import '../Styling/NavInitial.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useTransform, useScroll } from "framer-motion";

export default function Nav2() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [30, 60], [1, 0]);

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
                  <CloseIcon className='menu-icon-initial hidden' fontSize='large' onClick={toggleMenu} />
                  ) : (
                  <MenuIcon className='menu-icon-initial hidden' fontSize='large' onClick={toggleMenu} />
                  )}
              <nav className='nav2'>
                  {menuOpen && (
                  <div className='popup-menu'>
                      <li className='menu-item' onClick={() => handleLinkClick('music')}>
                      MUSIC
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('video')}>
                      VIDEO
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('live')}>
                      LIVE
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('shop')}>
                      SHOP
                      </li>
                  </div>
                  )}
              <li>
                  <img src={CoopertLogo} className='nav-logo' onClick={() => handleLinkClick('nav-initial')}></img>
              </li>
                  <li className='nav-title' onClick={() => handleLinkClick('music')}>
                      MUSIC
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('video')}>
                      VIDEO
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('live')}>
                      LIVE
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('shop')}>
                      SHOP
                  </li>
              <li>
                <div className='social-icons-grid'>
                  <a className='insta-icon' href="https://www.instagram.com/cooooper.t/" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                  </a>
                  <a className='insta-icon' href="https://www.youtube.com/@coopertv1124" target="_blank" rel="noopener noreferrer">
                      <YouTubeIcon />
                  </a>
                  <a className='insta-icon' href="https://open.spotify.com/artist/7t6usUnb0OZ2r0pi3nvdmB" target="_blank" rel="noopener noreferrer">
                    <Icon className='spotify-icon' style={{ fontSize: '24px' }} icon={spotifyIcon} />
                </a>
                  <a className='insta-icon' href="https://www.facebook.com/cooooper.t/?locale=en_GB%C3%A5" target="_blank" rel="noopener noreferrer">
                      <FacebookIcon />
                  </a>
                </div>
              </li>
          </nav>
      </motion.div>
  );
}