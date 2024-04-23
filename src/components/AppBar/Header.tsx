// Header.js
import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/logo/hiperion-logo.svg';
import { Button } from '@mui/material';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);

  };

  const closeMenu = () => {
    setMenuOpen(false);
    console.log(menuOpen);

  };

  const navItems = ['Inicio', 'Sobre', 'Serviços', 'Parceiros e Clientes', 'Produtos', 'Testemunhas', 'Blog'];

  return (
    <header className={styles.header}>
      {/* <img className={styles.logo} src={'https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/C-C3-B3pia-de-Sem-nome-4198ecf5-cd7c09d2-81c8314f-512w.png'} alt="Logo" /> */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {menuOpen ?
        <section className={styles.menuContainer}>
          <div>

            <span className={styles.closeButton} onClick={closeMenu}>X</span>
          </div>
          <nav className={`${menuOpen ? styles.isToggleTrue : ''} `}>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>
        </section>
        :
        <section className={styles.section}>

          <nav className={`${menuOpen ? '' : styles.nav} `}>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>
          <button
            className={styles.button}
          >Contato</button>
        </section>
      }
    </header>
  );
};

export default Header;
