import Hero from './components/Hero';
import About from './components/About';
import ServicesSection from './components/ServiceSection';
import Projects from './components/Projects'
import PortfolioSection from './components/Portfolio';
import Carousel from './components/Carousel';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';



const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <Projects/>
      <PortfolioSection />
      <Carousel/>
      <BlogSection />
      <ContactSection/>
    </>
  );
};

export default Home;
