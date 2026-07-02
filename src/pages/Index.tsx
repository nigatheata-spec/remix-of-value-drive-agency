import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import ClientStatsDashboard from "@/components/ClientStatsDashboard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Value Plus — Digital Marketing Agency"
        description="Value Plus helps brands grow through strategy, branding, content, social media, and web development across the GCC."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <ClientStatsDashboard />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
