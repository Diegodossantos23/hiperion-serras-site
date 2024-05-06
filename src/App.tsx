import React from 'react';
import logo from './logo.svg';
import './App.scss';
import DrawerAppBar from './components/AppBar/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import TestimonialsCarousel from './components/Testimonials/Testimonials';
import Products from './components/Products/Products';
import ContactForm from './components/ContactForm/ContactForm';
import PartnersAndCustomers from './components/PartnersAndCustomers/PartnersAndCustomers';
import BlogCarousel from './components/BlogCarousel/BlogCarousel';
import AboutUs from './components/AboutUs/AboutUs';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
   <DrawerAppBar/>
   <Hero/>
   <AboutUs/>
   <Services/>
   <TestimonialsCarousel/>
   <Products/>
   <ContactForm/> 
   <BlogCarousel/>
   <Footer/>
   {/* <PartnersAndCustomers/>
   */}

   <WhatsAppButton/>
   {/* <CatalogButton/> */}
    </div>
  );
}

export default App;
