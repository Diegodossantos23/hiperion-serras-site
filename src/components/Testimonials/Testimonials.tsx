import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Testimonials.module.scss'; // Estilo do carrossel
import Avatar from '../../assets/img/avatar.jpg'

// Dados fictícios de depoimentos
const testimonials = [
    {
        name: 'Jair',
        role: 'Compras',
        avatar: Avatar,
        quote: 'Eu só tenho elogios para o atendimento que recebi e para o serviço prestado pela sua empresa. A utilização da lâmina de serra fita e o alto rendimento proporcionaram um trabalho preciso e rápido. Sem dúvidas, recomendo a todos os meus amigos e colegas de trabalho.'
    },
    {
        name: 'Jair',
        role: 'Compras',
        avatar: Avatar,
        quote: 'Eu só tenho elogios para o atendimento que recebi e para o serviço prestado pela sua empresa. A utilização da lâmina de serra fita e o alto rendimento proporcionaram um trabalho preciso e rápido. Sem dúvidas, recomendo a todos os meus amigos e colegas de trabalho.'
    },
    {
        name: 'Jair',
        role: 'Compras',
        avatar: Avatar,
        quote: 'Eu só tenho elogios para o atendimento que recebi e para o serviço prestado pela sua empresa. A utilização da lâmina de serra fita e o alto rendimento proporcionaram um trabalho preciso e rápido. Sem dúvidas, recomendo a todos os meus amigos e colegas de trabalho.'
    },
    {
        name: 'Jair',
        role: 'Compras',
        avatar: Avatar,
        quote: 'Eu só tenho elogios para o atendimento que recebi e para o serviço prestado pela sua empresa. A utilização da lâmina de serra fita e o alto rendimento proporcionaram um trabalho preciso e rápido. Sem dúvidas, recomendo a todos os meus amigos e colegas de trabalho.'
    },
    // Adicione mais depoimentos conforme necessário
];

const TestimonialsCarousel = () => {
    return (
        <div>
            <h2 className={styles.title}>O que dizem os nossos clientes </h2>

            <Carousel
                className={styles.carousel}
                showArrows={true}
                showThumbs={false}
                showIndicators={true} // Exibir indicadores de navegação
                showStatus={false} // Ocultar status do carrossel
                infiniteLoop={true} // Habilitar loop infinito
                autoPlay={true} // Iniciar reprodução automática
                interval={4000} // Intervalo entre os slides (em milissegundos)
            >
                
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.slide}>

                        <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                        <div className={styles.content}>
                            <p className={styles.quote}>{testimonial.quote}</p>
                            <p className={styles.author}>
                                <span className={styles.name}>{testimonial.name}</span> - {testimonial.role}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TestimonialsCarousel;
