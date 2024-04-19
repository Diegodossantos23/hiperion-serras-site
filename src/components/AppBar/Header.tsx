import React from 'react';
import styles from './Header.module.scss'; // Estilo do header
import Logo from '../../assets/logo/hiperion-logo.svg'

const Header = () => {
  const navItems = ['Inicio', 'Sobre', 'Serviços', 'Blog', 'Contato'];

  return (
    <header className={styles.header}>
      {/* <img className={styles.logo} src={Logo} alt="Logo" /> */}
      <div className={styles.logo} >
      Logo aqui
      </div>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
