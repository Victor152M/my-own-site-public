import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import HeroSection from './components/Hero';
import Skills from './components/Skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioDivider from './components/PortfolioDivider';
import ContactDivider from './components/ContactDivider';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Skills />
      <PortfolioDivider />
      <Portfolio />
      <ContactDivider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
