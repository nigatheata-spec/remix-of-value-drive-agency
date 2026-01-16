import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GradFlow } from "gradflow";

const categories = ["All", "Branding", "Social Media", "Website", "Advertising"];

const projects = [
  {
    title: "Riyadh Coffee Co.",
    category: "Branding",
    description: "Complete brand identity for a premium Saudi coffee brand",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    results: "+340% brand recognition",
    year: "2024"
  },
  {
    title: "Al Faisal Group",
    category: "Website",
    description: "Corporate website redesign with modern UI/UX",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    results: "+180% lead generation",
    year: "2024"
  },
  {
    title: "Desert Rose Boutique",
    category: "Social Media",
    description: "Instagram growth strategy and content creation",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    results: "50K+ new followers",
    year: "2023"
  },
  {
    title: "Vision Tech",
    category: "Advertising",
    description: "Multi-platform paid advertising campaign",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    results: "4.2x ROAS",
    year: "2024"
  },
  {
    title: "Oasis Properties",
    category: "Branding",
    description: "Real estate brand identity and marketing materials",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    results: "+250% inquiries",
    year: "2023"
  },
  {
    title: "Saudi Fitness Co.",
    category: "Website",
    description: "E-commerce platform with membership integration",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    results: "+420% online sales",
    year: "2024"
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-midnight overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <GradFlow config={{
            color1: '#003DFA',
            color2: '#000000',
            color3: '#FFFFFF',
            speed: 0.25,
            scale: 1.3,
            type: 'stripe',
            noise: 0.08
          }} />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Success
              <br />
              <span className="text-white">Stories</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Explore our portfolio of transformative projects that have helped brands 
              across Saudi Arabia achieve remarkable growth and recognition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-16 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay on hover */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent flex items-end p-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-midnight" />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content below image */}
                  <div className="pt-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground text-sm">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-3">
                      {project.description}
                    </p>
                    
                    <span className="text-accent font-semibold text-sm">
                      {project.results}
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <GradFlow config={{
            color1: '#003DFA',
            color2: '#000000',
            color3: '#FFFFFF',
            speed: 0.25,
            scale: 1.3,
            type: 'stripe',
            noise: 0.08
          }} />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Be Our Next
                <br />
                <span className="text-white">Success Story?</span>
              </h2>
              <p className="text-xl text-white/70 mb-10">
                Let's create something extraordinary together.
              </p>
              <Button size="lg" className="gap-2 text-base px-10 py-6" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
