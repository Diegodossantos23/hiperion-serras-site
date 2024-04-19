import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './Footer.module.scss'; // Estilo do rodapé
import Logo from '../../assets/logo/hiperion-logo.svg';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.infoContainer}>
                    <div className={styles.logoContainer}>
                        <img src={Logo} alt="Logo" className={styles.logo} />
                    </div>
                    <div className={styles.location}>
                        <h3>Localização 1</h3>
                        <div>
                            <p>Hiperion Serras - SUMARÉ</p>
                            <p>R. Bruno Penteado Ferraz de Campos</p>
                            <p>Jardim Manchester</p>
                            <p>Sumaré - SP</p>
                        </div>
                        <h3>Localização 2</h3>

                        <div>
                            <p>Hiperion Serras - SÃO PAULO</p>
                            <p>Avenida Pde Arlindo Vieira 1719</p>
                            <p>Jardim Vergueiro (Sacoma)</p>
                            <p>São Paulo SP</p>
                        </div>
                    </div>
                    {/* <div className={styles.contact}>
            <h3>Contato</h3>
            <p>vendas@hiperionserras.com.br</p>
            <p>www.hiperionserras.com.br</p>
          </div> */}
                 
                </div>
                <div className={styles.navLinks}>
                    <h3>Links</h3>
                    <a href="/">Início</a>
                    <a href="/about">Sobre</a>
                    <a href="/services">Serviços</a>
                    <a href="/products">Produtos</a>
                    <a href="/partners">Parceiros</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contato</a>
                    <div className={styles.services}>
                        <h3>Serviços</h3>
                        <p>Serviço 1</p>
                        <p>Serviço 2</p>
                        <p>Serviço 3</p>
                        <p>Serviço 4</p>
                    </div>
                </div>
                <div className={styles.socialIcons}>
          <a href="https://www.facebook.com"><IoLogoFacebook /></a>
          <a href="https://www.twitter.com"><IoLogoTwitter /></a>
          <a href="https://www.instagram.com"><IoLogoInstagram /></a>
          <a href="mailto:example@example.com"><IoMdMail /></a>
        </div>
                <div className={styles.scrollTop} onClick={scrollToTop}>
                    <IoIosArrowUp />
                </div>
            </div>
            <div className={styles.copyRight}>
                <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
