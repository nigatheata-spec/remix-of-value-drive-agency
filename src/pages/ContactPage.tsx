import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { GradFlow } from "gradflow";
const ContactPage = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const contactInfo = [{
    icon: Mail,
    title: t('contact.email.title'),
    value: "hello@valueplus.agency",
    description: t('contact.email.desc')
  }, {
    icon: Phone,
    title: t('contact.phone.title'),
    value: "+966 50 123 4567",
    description: t('contact.phone.desc')
  }, {
    icon: MapPin,
    title: t('contact.address.title'),
    value: t('contact.address.value'),
    description: t('contact.address.desc')
  }];
  const services = [t('services.brandIdentity.title'), t('services.socialMedia.title'), t('services.webDev.title'), t('services.paidAds.title'), t('services.content.title'), t('services.growth.title')];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.form.success'));
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };
  return <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO
        title="Contact Value Plus — Book a Free Marketing Consultation in Riyadh"
        description="Book a free consultation with Value Plus, a Saudi marketing agency in Riyadh serving brands across Saudi Arabia, the UAE and the Gulf."
        path="/contact"
        keywords="free marketing consultation, Saudi marketing agency contact, marketing agency Riyadh, marketing agency UAE, business consulting"
      />
      <Header />
      
      {/* Hero Section - Matching other pages */}
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
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className={`max-w-4xl ${isRTL ? 'text-right' : ''}`}>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className={`grid lg:grid-cols-5 gap-12 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Contact Info */}
            <div className={`lg:col-span-2 ${isRTL ? 'lg:col-start-4' : ''}`}>
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
                <h2 className={`text-2xl font-bold mb-8 ${isRTL ? 'text-right' : ''}`}>{t('contact.info.title')}</h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  x: isRTL ? 20 : -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }} className={`flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </motion.div>)}
                </div>

                {/* Quick Response */}
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                  <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">{t('contact.guarantee.title')}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t('contact.guarantee.desc')}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 ${isRTL ? 'lg:col-start-1' : ''}`}>
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">{t('contact.form.title')}</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.name')}</label>
                      <Input required value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} placeholder={isRTL ? "محمد أحمد" : "John Doe"} className={`bg-background ${isRTL ? 'text-right' : ''}`} />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.email')}</label>
                      <Input type="email" required value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} placeholder={isRTL ? "name@company.com" : "john@company.com"} className={`bg-background ${isRTL ? 'text-right' : ''}`} dir="ltr" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.company')}</label>
                      <Input value={formData.company} onChange={e => setFormData({
                      ...formData,
                      company: e.target.value
                    })} placeholder={isRTL ? "اسم الشركة" : "Your Company"} className={`bg-background ${isRTL ? 'text-right' : ''}`} />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.service')}</label>
                      <select value={formData.service} onChange={e => setFormData({
                      ...formData,
                      service: e.target.value
                    })} className={`w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${isRTL ? 'text-right' : ''}`}>
                        <option value="">{t('contact.form.serviceSelect')}</option>
                        {services.map(service => <option key={service} value={service}>{service}</option>)}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.message')}</label>
                    <Textarea required value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder={t('contact.form.messagePlaceholder')} rows={5} className={`bg-background ${isRTL ? 'text-right' : ''}`} />
                  </div>
                  
                  <Button type="submit" size="lg" className={`w-full gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('contact.form.submit')}
                    <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching other pages */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="relative py-24 rounded-3xl overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
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
            <div className="absolute inset-0 bg-midnight/50 rounded-3xl" />
            
            <div className="relative z-10 px-6">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }}>
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('contact.address.value')}
                  </h2>
                  <p className="text-xl text-white/70 mb-8">
                    {t('contact.address.desc')}
                  </p>
                  <Button size="lg" className={`gap-2 text-base px-10 py-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {isRTL ? 'احصل على الاتجاهات' : 'Get Directions'}
                      <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ContactPage;