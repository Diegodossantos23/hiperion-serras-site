import React from 'react';
import styles from './Hero.module.scss';
// import video from '../../assets/videos/video1.mp4';
const Hero = () => {
  const video = '../../assets/videos/video1.mp4';

  return (
    <div className={styles.hero}>
      {/* Conteúdo sobreposto */}
      <div className={styles.content}>
        <h1>Serras para alto desempenho</h1>
        <p>Conheça nossos produtos e serviços de alta qualidade.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Nossos produtos
            <i className="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i>
          </button>
          <button>Fale conosco
            <i className="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
