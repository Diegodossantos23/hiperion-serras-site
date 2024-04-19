import React from 'react';
import styles from './Products.module.scss';

const Products = () => {
    return (
        <div className={styles.products}>
            <h2 className={styles.title}>Nossos produtos</h2>

            <div className={styles.productsContainer}>
                <div className={styles.productImg}>
                    <img src="https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/SERRA+FITA+SEM+FUNDO-400w.png" alt="Imagem 1" />

                </div>

                {/* Segunda linha */}
                <div className={styles.product}>
                    <h3>Lâminas de Serra Fita</h3>
                    <p>Aço Carbono - Kortz</p>
                    <p>Bimetálicas M42/M51 - KORTZ</p>
                    <p>KORTZ - Tecnologia Alemã</p>
                    <a href="#">SAIBA MAIS</a>
                </div>
                <div className={styles.productImg}>
                    <img src="https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/CS-220__2_-removebg-preview-447w.png" alt="Imagem 2" />
                </div>
                <div className={styles.product}>
                    <h2>Serras Circulares</h2>
                    <p>Metal Duro (TCT)</p>
                    <p>HSS</p>
                    <p>Cermet</p>
                    <p>Segmentada</p>
                    <a href="#">SAIBA MAIS</a>
                </div>
                <div className={styles.productImg}>
                    <img src="https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/lamina+site+-427w.png" alt="Imagem 3" />

                </div>
                <div className={styles.product}>
                    <h2>Máquinas e Equipamentos</h2>
                    <p>Máquinas de corte</p>
                    <p>Máquinas de serra fita</p>
                    <p>Cortes precisos e ampla variedade de materiais</p>
                    <p>Máquinas Manuais, Semi-Automáticas e Automáticas  Segmentada para serviços com uma demanda de alta produção</p>
                    <a href="#">SAIBA MAIS</a>
                </div>
            </div>
        </div>
    );
};

export default Products;
