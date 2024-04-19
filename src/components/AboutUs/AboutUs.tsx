import React from 'react';
import styles from './AboutUs.module.scss'; // Estilo do componente
import AboutUsImage from '../../assets/img/sobre.jpg'; // Importe a imagem desejada

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.textContainer}>
        <h2>Sobre a Hiperion Serras</h2>
        <p>
          Contamos com um time técnico com mais de 15 anos de experiência no segmento, 
          capacitado para acompanhar cada processo e implementar os produtos em linha, 
          para entregar solução adequada de acordo com a particularidade de cada necessidade.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={AboutUsImage} alt="Sobre Nós" />
      </div>
    </div>
  );
};

export default AboutUs;
