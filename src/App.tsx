import React from 'react';
import logo from './logo.svg';
import './App.scss';
import DrawerAppBar from './components/AppBar/Header';
import Hero from './components/Hero/Hero';
import { CatalogButton, WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import TestimonialsCarousel from './components/Testimonials/Testimonials';
import Products from './components/Products/Products';
import ContactForm from './components/ContactForm/ContactForm';
import PartnersAndCustomers from './components/PartnersAndCustomers/PartnersAndCustomers';
import BlogCarousel from './components/BlogCarousel/BlogCarousel';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
   <DrawerAppBar/>
   <Hero/>
   {/* <AboutUs/> */}
   <Services/>
   {/* <PartnersAndCustomers/>
   <Products/>
   <TestimonialsCarousel/>
   <BlogCarousel/>
   <ContactForm/> */}
   <Footer/>

   <WhatsAppButton/>
   {/* <CatalogButton/> */}
    </div>
  );
}

export default App;
