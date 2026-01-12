import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
