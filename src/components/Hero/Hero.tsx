import React from 'react';
import styles from './Hero.module.scss'; // Estilo do conteúdo inicial
// import videoSerras from '../../assets/videos/machine-video.mp4'; 

const Hero = () => {

  const video = '../../assets/videos/machine-video.mp4'
  return (
    <div className={styles.hero}>
      {/* Vídeo de máquinas de serras como background */}
      <div className={styles.videoBackground}>
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Conteúdo sobreposto */}
      <div className={styles.content}>
        <h1>Serras para alto desempenho</h1>
        <p>Conheça nossos produtos e serviços de alta qualidade.</p>
        <div className={styles.buttonContainer}>
          <button>Nossos produtos</button>
          <button>Fale conosco</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
