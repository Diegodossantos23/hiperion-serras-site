import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Button variant="contained" sx={{ marginRight: '1rem', background: '#F2BF27' }}>Nossos produtos <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }} /></Button>
          <Button variant="contained" sx={{ background: '#F2BF27' }}>Fale conosco <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }} /></Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Hero;
