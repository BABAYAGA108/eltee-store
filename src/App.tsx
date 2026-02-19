import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/testimonials";
import { OrderForm } from "./components/OrderForm";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/WhatsAppFab";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <OrderForm />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default App;
