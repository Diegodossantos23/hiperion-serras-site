import { useParams, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

// Lista de produtos
const products = [
  {
    id: 1,
    title: "Lâminas de Serra Fita",
    description:
      "As Lâminas de Serra Fita da KORTZ são conhecidas por sua alta qualidade e durabilidade. Fabricadas com aço carbono de primeira linha, oferecem um corte preciso e eficiente. Ideais para uma ampla variedade de aplicações, desde madeira macia até metais duros.",
    topics: [
      "Aço Carbono - Kortz: Material de alta qualidade que garante resistência e durabilidade às lâminas.",
      "Bimetálicas M42/M51 - KORTZ: Lâminas bimetálicas de alto desempenho para cortes precisos em metais.",
      "KORTZ - Tecnologia Alemã: Tecnologia avançada de fabricação garantindo produtos de excelência.",
    ],
    imageUrl:
      "https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/SERRA+FITA+SEM+FUNDO-400w.png",
  },
  {
    id: 2,
    title: "Serras Circulares",
    description:
      "As Serras Circulares da nossa linha oferecem desempenho excepcional em cortes de precisão. Disponíveis em diferentes materiais de corte, como metal duro (TCT), HSS e Cermet, essas serras são ideais para uma variedade de aplicações industriais.",
    topics: [
      "Metal Duro (TCT): Serras com pontas de metal duro para cortes eficientes e duradouros.",
      "HSS (High-Speed Steel): Alta resistência ao calor e desgaste para cortes precisos em materiais duros.",
      "Cermet: Material composto de cerâmica e metal, oferecendo resistência e durabilidade excepcionais.",
      "Segmentada: Serras com design segmentado para cortes limpos e precisos em diversos materiais.",
    ],
    imageUrl:
      "https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/CS-220__2_-removebg-preview-447w.png",
  },
  {
    id: 3,
    title: "Máquinas e Equipamentos",
    description:
      "Nossa linha de Máquinas e Equipamentos oferece soluções de corte de última geração para atender às demandas industriais mais exigentes. Desde máquinas de corte de alta precisão até serras de fita automáticas, nossos produtos garantem eficiência e qualidade em cada operação.",
    topics: [
      "Máquinas de Corte: Equipamentos projetados para cortes precisos em uma variedade de materiais.",
      "Máquinas de Serra Fita: Serras automáticas e semiautomáticas para cortes rápidos e precisos.",
      "Cortes Precisos e Variedade de Materiais: Nossas máquinas oferecem cortes precisos em uma ampla gama de materiais, incluindo madeira, metais e plásticos.",
      "Máquinas Manuais, Semi-Automáticas e Automáticas: Oferecemos uma variedade de opções para atender às necessidades de produção de qualquer negócio, desde operações manuais até linhas totalmente automatizadas.",
    ],
    imageUrl:
      "https://lirp.cdn-website.com/9235761d/dms3rep/multi/opt/lamina+site+-427w.png",
  },
];

const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Typography variant="h3" gutterBottom>
        {product.title}
      </Typography>
      <Card sx={{ maxWidth: 600, margin: "auto" }}>
        <CardMedia
          component="img"
          height="300"
          image={product.imageUrl}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Detalhes:
          </Typography>
          <ul style={{ textAlign: "left" }}>
            {product.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Voltar
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetailsPage;
