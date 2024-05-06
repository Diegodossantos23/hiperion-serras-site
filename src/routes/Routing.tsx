import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import Products from '../components/Products/Products';

const Routing = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/produtos/:productId" element={<ProductPage />} /> {/* Adicionando a rota para a página de detalhes do produto */}
      </Routes>
    </Router>
  );
};

export default Routing;
