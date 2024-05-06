import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import AboutUsImage from '../../assets/img/sobre.jpg';

const AboutUs = () => {
  return (
    <Box marginBottom={10} sx={{ marginTop: { xs: '3rem', md: '5rem' } }}>
      <Grid container spacing={3} maxWidth="1200px">
        <Grid item xs={12} md={6}>
          <Box padding={{ xs: '0', md: '1rem' }}>
            <Typography variant="h2" color="#F2BF27" fontWeight={700}  fontSize={{ xs: 24, md: 30 }} fontFamily="Montserrat, sans-serif" textAlign="start" marginBottom="2rem">
              Sobre a Hiperion Serras
            </Typography>
            <Typography variant="body1" color="#696969" fontFamily="Montserrat, sans-serif" textAlign="start">
              Contamos com um time técnico com mais de 15 anos de experiência no segmento, 
              capacitado para acompanhar cada processo e implementar os produtos em linha, 
              para entregar solução adequada de acordo com a particularidade de cada necessidade.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={AboutUsImage} alt="Sobre Nós" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
