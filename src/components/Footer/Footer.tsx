import React from 'react';
import styles from './Footer.module.scss'; // Importando os estilos SCSS modulares

export default function App() {
  return (
    <footer className={styles.footer}>
      <section className={styles.social}>
       {/*<div className={styles.socialText}>
          <span>Get connected with us on social networks:</span>
  </div>*/}

        <div className={styles.socialLinks}>
          <a href='https://www.facebook.com' className={styles.socialLink}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href='https://twitter.com' className={styles.socialLink}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href='https://www.google.com' className={styles.socialLink}>
            <i className="fab fa-google"></i>
          </a>
          <a href='https://www.instagram.com' className={styles.socialLink}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href='https://www.linkedin.com' className={styles.socialLink}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href='https://github.com' className={styles.socialLink}>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h6 className={styles.footerHeading}>
            Hiperion Serras
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h6 className={styles.footerHeading}>Produtos</h6>
          <p>
            <a href='#!' className={styles.footerLink}>
            Lâminas de Serra Fita
            </a>
          </p>
          <p>
            <a href='#!' className={styles.footerLink}>
            Serras Circulares
            </a>
          </p>
          <p>
            <a href='#!' className={styles.footerLink}>
              Máquinas e Equipamentos
            </a>
          </p>
          <p>
            <a href='#!' className={styles.footerLink}>
            Máquinas de corte
            </a>
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h6 className={styles.footerHeading}>Navegação</h6>
          <p>
            <a href='#!' className={styles.footerLink}>
              Inicio
            </a>
          </p>
          <p>
            <a href='#!' className={styles.footerLink}>
              Sobre
            </a>
          </p>
          <p>
            <a href='#!' className={styles.footerLink}>
              Serviços
            </a>
          </p>
          <p>
            <a href='#!' className={styles.footerLink}>
              Blog
            </a>
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h6 className={styles.footerHeading}>Contact</h6>
          <p>
            {/*<i className={`fas fa-home ${styles.footerIcon}`}></i>
                Hiperion Serras - SUMARÉ
            */}
            </p>

          <p>
          R. Bruno Penteado Ferraz de
                Campos
                Jardim Manchester
                Sumaré - SP
          </p>
          <p>
            <i className={`fas fa-envelope ${styles.footerIcon}`}></i> vendas@hiperionserras.com.br
          </p>
          <p>
            <i className={`fas fa-phone ${styles.footerIcon}`}></i> +55 (19) 99414-2300

          </p>
          {/*<p>
            <i className={`fas fa-print ${styles.footerIcon}`}></i> + 01 234 567 89
</p>*/}
        </div>
      </section>

      <div className={styles.copyRight}>
        © 2021 Copyright:
        <a className={styles.footerLink} href=''>
          Hiperion Serras
        </a>
      </div>
    </footer>
  );
}
