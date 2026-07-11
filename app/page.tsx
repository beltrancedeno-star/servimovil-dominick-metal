import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Clients from "../components/shared/Clients";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/shared/Testimonials";
import About from "../components/about/About";
import Process from "../components/shared/Process";
import CTA from "../components/shared/CTA";
import Blog from "../components/blog/Blog";
import FAQ from "../components/shared/FAQ";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <Process />
        <CTA />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
