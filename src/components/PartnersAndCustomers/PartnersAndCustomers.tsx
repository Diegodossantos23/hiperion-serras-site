import RePartnersAndCustomersct from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./PartnersAndCustomers.module.scss"; // Estilo do componente
import Bahco from "../../assets/img/bahco.png";
import Wikus from "../../assets/img/wikus.png";
import Fibra from "../../assets/img/fibra.png";
import Eberle from "../../assets/img/eberle.png";
import { Typography } from "@mui/material";

const PartnersAndCustomers = () => {
  // Dados fictícios dos parceiros e clientes
  const parceiros = [
    { id: 1, image: Bahco, alt: "Parceiro 1" },
    { id: 2, image: Wikus, alt: "Parceiro 2" },
    { id: 3, image: Fibra, alt: "Parceiro 3" },
    { id: 4, image: Eberle, alt: "Parceiro 3" },

    // Adicione mais parceiros conforme necessário
  ];

  const clientes = [
    { id: 1, image: Bahco, alt: "Parceiro 1" },
    { id: 2, image: Wikus, alt: "Parceiro 2" },
    { id: 3, image: Fibra, alt: "Parceiro 3" },
    { id: 4, image: Eberle, alt: "Parceiro 3" },
    // Adicione mais clientes conforme necessário
  ];

  return (
    <div className={styles.partnersAndCustomers}>
      <div className={styles.partners}>
        <Typography
          variant="h2"
          color="#fff"
          paddingBottom={5}
          fontSize={30}
          fontWeight={600}
          fontFamily={"Montserrat"}
          sx={{ marginBottom: "1rem" }}
        >
          Parceiros da Hiperion
        </Typography>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          swipeable
          emulateTouch
          
        >
          {parceiros.map((parceiro) => (
            <div style={{paddingBottom: '2rem'}} key={parceiro.id} className={styles.item}>
              <img src={parceiro.image} alt={parceiro.alt} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* <div className={styles.customers}>
        <h2>Clientes</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay swipeable emulateTouch>
          {clientes.map(cliente => (
            <div key={cliente.id} className={styles.item}>
              <img src={cliente.image} alt={cliente.alt} />
            </div>
          ))}
        </Carousel>
      </div> */}
    </div>
  );
};

export default PartnersAndCustomers;
