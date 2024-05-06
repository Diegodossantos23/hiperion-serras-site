import React from 'react';
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Avatar from '../../assets/img/avatar.jpg';
import StarIcon from '@mui/icons-material/Star';

// Dados fictícios de depoimentos
const testimonials = [
  {
    name: 'Jair',
    role: 'Compras',
    avatar: Avatar,
    quote: '"Eu só tenho elogios para o atendimento que recebi e para o serviço prestado pela sua empresa. A utilização da lâmina de serra fita e o alto rendimento proporcionaram um trabalho preciso e rápido. Sem dúvidas, recomendo a todos os meus amigos e colegas de trabalho."',
  },
  {
    name: 'Leandro',
    role: 'Qualidade',
    avatar: Avatar,
    quote: '"A equipe técnica da Hiperion Serras sempre nos trata de forma pessoal e oferece um serviço excelente e atencioso. Para mim, esse é o benefício mais importante."',
  },
  {
    name: 'Rita',
    role: 'Compras',
    avatar: Avatar,
    quote: '"Estamos trabalhando cada vez mais com a Hiperion, graças aos seus preços competitivos e disponibilidade. Nunca encontramos um problema que eles não puderam resolver rapidamente. Além disso, nossas remessas sempre chegam na hora, o que é extremamente importante em nossa linha de negócio."',
  }
  // Adicione mais depoimentos conforme necessário
];

const TestimonialsCarousel = () => {
  return (
    <Box padding={10}>
      <Typography variant="h2" marginBottom={10} fontSize={25} fontWeight={600} align="center" mb={3}>O que dizem os nossos clientes</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom={5}>
        <Typography sx={{color: 'red'}}  variant="h4" component="span">★★★★</Typography>
        <StarIcon sx={{color: 'red'}} fontSize="large" />
      </Box>

      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
      >
        {testimonials.map((testimonial, index) => (
          <Box key={index} display="flex" justifyContent="center" alignItems="center">
            <Box ml={2}>
              <Typography variant="body1" color="#696969"  align="center" mb={2}>{testimonial.quote}</Typography>
              <Typography variant="subtitle1"fontWeight={400} marginBottom={10} align="center">{testimonial.name} - {testimonial.role}</Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default TestimonialsCarousel;
