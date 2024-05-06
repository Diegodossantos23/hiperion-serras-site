import React from "react";
import logo from "./logo.svg";
// import "./App.scss";

import { ThemeProvider } from "@mui/material/styles";
import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import TestimonialsCarousel from "../../components/Testimonials/Testimonials";
import Products from "../../components/Products/Products";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton/WhatsAppButton";
import Header from "../../components/AppBar/Header";
import PartnersAndCustomers from "../../components/PartnersAndCustomers/PartnersAndCustomers";

function MainPage() {
  return (
    <div >
      <Hero />
      <AboutUs />
      <Services />
      <TestimonialsCarousel />
      <Products />
      <PartnersAndCustomers/>
      <BlogCarousel />
      <ContactForm />

    </div>
  );
}

export default MainPage;
