import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUsers, faTools, faChalkboardTeacher, faMapMarkerAlt, faBuilding, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const servicesData = [
    {
      title: "PRODUTOS",
      description: "Extrema qualidade. Fornecedores rigorosamente avaliados para oferecer os melhores itens para o corte.",
      icon: faShoppingCart
    },
    {
      title: "A HIPERION",
      description: "Processo de compra descomplicado.",
      icon: faBuilding
    },
    {
      title: "NOSSA EQUIPE",
      description: "Equipe Especialista. Time técnico e perito no assunto, altamente qualificado para melhorar processos e solucionar problemas rapidamente.",
      icon: faUsers
    },
    {
      title: "CENTRO DE SOLDA",
      description: "Centro de soldagem. Contamos com um dos centros de soldagem de serras de fita mais capacitados do Brasil.",
      icon: faTools
    },
    {
      title: "TREINAMENTOS",
      description: "Consultoria e treinamento. Capacitamos a sua equipe e oferecemos consultoria personalizada para melhorar o desempenho de corte.",
      icon: faChalkboardTeacher
    },
    {
      title: "LOCALIZAÇÃO",
      description: "Localização estratégica. Situado no principal eixo rodoviário do país, atuamos com agilidade no transporte e entrega de mercadorias.",
      icon: faMapMarkerAlt
    }
  ];

  return (
    <Box id="services" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh', backgroundColor: '#f7f7f7', paddingBottom: '5rem', paddingTop: '5rem' }}>
      <Typography  variant="h2" fontSize={25} fontWeight={600} fontFamily="Montserrat, sans-serif" marginBottom={2} sx={{ display: 'flex', alignItems: 'center', color: '#D39E00' }}>
        <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={faArrowRight} />
        Nossos Serviços
      </Typography>
      <Typography variant="body1" color="#696969"  fontSize={15} fontFamily="Montserrat, sans-serif" marginBottom={5} sx={{ maxWidth: '600px', color: '#505050', margin: '0 auto' }}>
        Somos especialistas em serra circular, máquinas de serra fita, laminas de serra fita, máquinas de serra circular e consultoria técnica. Oferecemos produtos de extrema qualidade e preços altamente competitivos com o intuito de promover o melhor desempenho na operação e custo benefício do cliente
      </Typography>
      <Grid container spacing={3} marginTop={5} >
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="service-card" sx={{ width: '100%', backgroundColor: '#F2BF27', height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                  <FontAwesomeIcon icon={service.icon} style={{ marginRight: '10px', color: '#f7f7f7' }} size="lg" />
                  <Typography variant="h3" fontSize={20} fontWeight={600} fontFamily="Montserrat, sans-serif" sx={{ color: '#fff' }}>{service.title}</Typography>
                </Box>
                <Divider sx={{ backgroundColor: '#fff' }} />
                <Typography variant="body1" fontSize={13} fontWeight={400} fontFamily="Montserrat, sans-serif" sx={{ color: '#fff', marginTop: '10px', marginBottom: '20px' }}>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
