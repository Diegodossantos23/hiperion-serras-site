import React from 'react';
import styles from './Services.module.scss';
import Company from '../../assets/background/company-background.jpg';
import ArrowRightICon from '../../assets/icons/arrow-right-icon.png';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faArrowAltCircleDown, faArrowAltCircleRight, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    return (
        <div className={styles.services}>
            <h2 className={styles.servicesTitle}>
                <FontAwesomeIcon style={{marginRight:'1rem', color: '#D39E00'}} icon={faArrowRight} />
                Nossos Serviços</h2>
            <p className={styles.servicesSubTitle}>
                Somos especialistas em serra circular, máquinas de serra fita, laminas de serra fita, máquinas de serra circular e consultoria técnica. Oferecemos produtos de extrema qualidade e preços altamente competitivos com o intuito de promover o melhor desempenho na operação e custo beneficio do cliente
            </p>
            <div className={styles.servicesContainer}>
                <div className={styles.serviceCard}>
                    <div className={styles.img}>

                    </div>
                    {/* <img src={Company} alt="Empresa" /> */}
                    <h3 className={styles.serviceTitle}>PRODUTOS</h3>
                    <p className={styles.serviceDescription}>Extrema qualidade</p>
                    <p className={styles.serviceInfo}>Fornecedores rigorosamente avaliados para oferecer os melhores itens para o corte.</p>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.img}>

                    </div>
                    <h3 className={styles.serviceTitle}>A HIPERION</h3>
                    <p className={styles.serviceDescription}>Processo de compra descomplicado.</p>
                    <p className={styles.serviceInfo}>Trabalhamos para oferecer a melhora contínua na experiência de compra.</p>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.img}>

                    </div>
                    <h3 className={styles.serviceTitle}>NOSSA EQUIPE</h3>
                    <p className={styles.serviceDescription}>Equipe Especialista.</p>
                    <p className={styles.serviceInfo}>Time técnico e perito no assunto, altamente qualificado para melhorar processos e solucionar problemas rapidamente.</p>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.img}>

                    </div>
                    <h3 className={styles.serviceTitle}>CENTRO DE SOLDA</h3>
                    <p className={styles.serviceDescription}>Centro de soldagem</p>
                    <p className={styles.serviceInfo}>Contamos com um dos centros de soldagem de serras de fita mais capacitados do Brasil.</p>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.img}>

                    </div>
                    <h3 className={styles.serviceTitle}>TREINAMENTOS</h3>
                    <p className={styles.serviceDescription}>Consultoria e treinamento.</p>
                    <p className={styles.serviceInfo}>Capacitamos a sua equipe e oferecemos consultoria personalizada para melhorar o desempenho de corte.</p>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.img}>

                    </div>
                    <h3 className={styles.serviceTitle}>LOCALIZAÇÃO</h3>
                    <p className={styles.serviceDescription}>Localização estratégica</p>
                    <p className={styles.serviceInfo}>Situado no principal eixo rodoviário do país, atuamos com agilidade no transporte e entrega de mercadorias.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
