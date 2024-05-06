import React from 'react';
import { Box, Typography, Link, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    title: 'Lâminas de Serra Fita',
    topics: [
      'Aço Carbono - Kortz',
      'Bimetálicas M42/M51 - KORTZ',
      'KORTZ - Tecnologia Alemã',
    ],
    imageUrl: 'https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/SERRA+FITA+SEM+FUNDO-400w.png',
  },
  {
    title: 'Serras Circulares',
    topics: [
      'Metal Duro (TCT)',
      'HSS',
      'Cermet',
      'Segmentada',
    ],
    imageUrl: 'https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/CS-220__2_-removebg-preview-447w.png',
  },
  {
    title: 'Máquinas e Equipamentos',
    topics: [
      'Máquinas de corte',
      'Máquinas de serra fita',
      'Cortes precisos e ampla variedade de materiais',
      'Máquinas Manuais, Semi-Automáticas e Automáticas  Segmentada para serviços com uma demanda de alta produção',
    ],
    imageUrl: 'https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/lamina+site+-427w.png',
  },
];

const Products = () => {
  return (
    <Box sx={{ background: '#F2BF27', paddingBottom: 10 }}> 
      <Typography variant="h2" color="#fff" fontSize={30} fontWeight={600} paddingTop={5} align="center" marginBottom={2}>
        <FontAwesomeIcon style={{ marginRight: '1rem', color: "white" }} icon={faArrowRight} />
        Nossos Produtos
      </Typography>
      <Typography variant="h5" color="#fff" align="center" marginBottom={4}>
        Descubra a qualidade e variedade de nossa linha de produtos
      </Typography>
      <Grid container spacing={2} justifyContent="center" padding={10}>
        {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '530px', width: '300px' }}>
              <CardMedia
                component="img"
                height="200"
                width="100"
                image={product.imageUrl}
                alt={`Imagem ${index + 1}`}
              />
              <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" fontSize={20} component="div">
                  {product.title}
                </Typography>
                <ul>
                  {product.topics.map((topic, i) => (
                    <li style={{fontSize: '0.8rem', paddingBottom: '0.5rem', color:"#696969"}} key={i}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
              <Box p={2}>
                <Link href="#" color="primary">
                  SAIBA MAIS
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
