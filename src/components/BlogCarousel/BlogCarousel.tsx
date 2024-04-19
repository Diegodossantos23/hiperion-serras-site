import React from 'react';
import styles from './BlogCarousel.module.scss'; // Estilo do componente
import BlogImage1 from '../../assets/img/hiperserras-site.png'; // Importe as imagens desejadas

const BlogCarousel = () => {
  // Dados fictícios das notícias do blog
  const blogPosts = [
    {
      id: 1,
      image: BlogImage1,
      date: '24 de Fevereiro de 2018',
      category: 'Negócios',
      title: 'Escritório Loft com Decoração Vintage para Trabalhar',
      description: 'Não é segredo que a indústria digital está em alta. Desde startups emocionantes até marcas globais, as empresas estão alcançando...',
    },
    {
        id: 1,
        image: BlogImage1,
        date: '24 de Fevereiro de 2018',
        category: 'Negócios',
        title: 'Escritório Loft com Decoração Vintage para Trabalhar',
        description: 'Não é segredo que a indústria digital está em alta. Desde startups emocionantes até marcas globais, as empresas estão alcançando...',
      },
      {
        id: 1,
        image: BlogImage1,
        date: '24 de Fevereiro de 2018',
        category: 'Negócios',
        title: 'Escritório Loft com Decoração Vintage para Trabalhar',
        description: 'Não é segredo que a indústria digital está em alta. Desde startups emocionantes até marcas globais, as empresas estão alcançando...',
      },
    // Adicione mais notícias conforme necessário
  ];

  return (
    <div className={styles.blogContainer}>
      <h2>Blog mais recente</h2>
      <div className={styles.blogPosts}>
        {blogPosts.map(post => (
          <div key={post.id} className={styles.blogPost}>
            <div className={styles.postContent}>
            {/* <img src={post.image} alt={post.title} /> */}
            <div className={styles.div}></div>
              <p className={styles.date}>{post.date}</p>
              <p className={styles.category}>{post.category}</p>
              <h3>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <a href="#">Leia Mais</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
