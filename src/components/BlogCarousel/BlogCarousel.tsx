import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';
import BlogImage1 from '../../assets/img/hiperserras-site.png';

const BlogCarousel = () => {
  const blogPosts = [
    {
      id: 1,
      image: BlogImage1,
      date: '24 de Fevereiro de 2018',
      category: 'Negócios',
      title: 'Escritório Loft com Decoração Vintage para Trabalhar',
      description:
        'Não é segredo que a indústria digital está em alta. Desde startups emocionantes até marcas globais, as empresas estão alcançando...',
    },
    {
      id: 2,
      image: BlogImage1,
      date: '24 de Fevereiro de 2018',
      category: 'Negócios',
      title: 'Escritório Loft com Decoração Vintage para Trabalhar',
      description:
        'Não é segredo que a indústria digital está em alta. Desde startups emocionantes até marcas globais, as empresas estão alcançando...',
    },
    {
      id: 3,
      image: BlogImage1,
      date: '24 de Fevereiro de 2018',
      category: 'Negócios',
      title: 'Escritório Loft com Decoração Vintage para Trabalhar',
      description:
        'Não é segredo que a indústria digital está em alta. Desde startups emocionantes até marcas globais, as empresas estão alcançando...',
    },
  ];

  const StyledBox = styled(Box)({
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
  });

  return (
    <Box paddingBottom={10} sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2" paddingTop={10} paddingBottom={5} fontSize={30} fontWeight={600} fontFamily={'Montserrat'}>Blog mais recente</Typography>
      <Grid container spacing={2}>
        {blogPosts.map(post => (
          <Grid key={post.id} item xs={12} md={6} lg={4}>
            <StyledBox>
              <img src={post.image} alt={post.title} style={{ maxWidth: '100%', marginBottom: '10px' }} />
              <Typography variant="body2" fontFamily={'Montserrat'} sx={{ marginBottom: '10px' }}>
                {post.date}
              </Typography>
              <Typography variant="body2" fontFamily={'Montserrat'} fontSize={15} sx={{ color: '#666', marginBottom: '10px' }}>
                {post.category}
              </Typography>
              <Typography variant="h3"  fontFamily={'Montserrat'} fontSize={20}  fontWeight={600} sx={{ marginBottom: '10px' }}>
                {post.title}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                {post.description}
              </Typography>
              <Link href="#">Leia Mais</Link>
            </StyledBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogCarousel;
