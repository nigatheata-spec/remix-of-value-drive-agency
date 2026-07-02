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
        title="Value Plus — Saudi Marketing Agency | Growth & Digital Marketing"
        description="Saudi marketing agency in Riyadh delivering growth, performance and digital marketing, lead generation, Meta & Google Ads across Saudi Arabia, UAE and the Gulf."
        path="/"
        keywords="Saudi marketing agency, marketing agency Riyadh, digital marketing Saudi Arabia, growth marketing Saudi Arabia, marketing agency UAE, Gulf marketing agency, performance marketing, lead generation, Meta Ads, Google Ads"
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
