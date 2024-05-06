import React from 'react';
import { Box, Typography } from '@mui/material';
import VideoPlayer from './VideoPlayer/VideoPLayer'; // Supondo que o componente VideoPlayer esteja em um arquivo separado
import image from '../../assets/background/stock-vector-sparks-from-rotating-circular-saw-1298663071-transformed.jpeg';

const backgroundVideoUrl = require('../../assets/videos/videosite.mp4').default;

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${image})`, // Adicionando a imagem de fundo
        backgroundSize: 'cover', // Ajustando o tamanho da imagem de fundo para cobrir todo o elemento
        backgroundPosition: 'center', // Centralizando a imagem de fundo
      }}
    >
      <VideoPlayer src={backgroundVideoUrl} />
      <Box
        sx={{
          zIndex: 1,
          textAlign: 'center',
          color: 'black',
        }}
      >
        <Typography variant="h2" color="#fff" fontSize={50} fontWeight={600} fontFamily={'Montserrat'} sx={{ marginBottom: '1rem' }}>Serras para alto desempenho</Typography>
        <Typography variant="body1" color="#fff" fontSize={18} fontFamily={'Montserrat'} sx={{ marginBottom: '2rem' }}>Conheça nossos produtos e serviços de alta qualidade.</Typography>

      </Box>
    </Box>
  );
};

export default Hero;
