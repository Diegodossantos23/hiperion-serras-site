
import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import TestimonialsCarousel from "../../components/Testimonials/Testimonials";
import Products from "../../components/Products/Products";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";

import PartnersAndCustomers from "../../components/PartnersAndCustomers/PartnersAndCustomers";
import ContactForm from "../../components/ContactForm/ContactForm";

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
