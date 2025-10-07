import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Partnership from "@/components/sections/Partnership";
import GeneralServices from "@/components/sections/GeneralServices";
import Career from "@/components/sections/Career";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Partnership />
        <GeneralServices />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
