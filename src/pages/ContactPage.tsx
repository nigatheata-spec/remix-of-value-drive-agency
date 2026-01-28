import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { t, isRTL } = useLanguage();
  
  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email.title'),
      value: "hello@valueplus.sa",
      description: t('contact.email.desc')
    },
    {
      icon: Phone,
      title: t('contact.phone.title'),
      value: "+966 50 123 4567",
      description: t('contact.phone.desc')
    },
    {
      icon: MapPin,
      title: t('contact.address.title'),
      value: t('contact.address.value'),
      description: t('contact.address.desc')
    },
  ];

  const services = [
    t('services.brandIdentity.title'),
    t('services.socialMedia.title'),
    t('services.webDev.title'),
    t('services.paidAds.title'),
    t('services.content.title'),
    t('services.growth.title'),
  ];

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
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsla(var(--royal-blue)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--royal-blue)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            {t('contact.tag')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className={`grid lg:grid-cols-5 gap-16 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Contact Info */}
            <div className={`lg:col-span-2 ${isRTL ? 'lg:col-start-4' : ''}`}>
              <h2 className="text-2xl font-bold mb-8">{t('contact.info.title')}</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response */}
              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{t('contact.guarantee.title')}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {t('contact.guarantee.desc')}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 ${isRTL ? 'lg:col-start-1' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">{t('contact.form.title')}</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.name')}</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isRTL ? "محمد أحمد" : "John Doe"}
                        className={isRTL ? 'text-right' : ''}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.email')}</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isRTL ? "name@company.com" : "john@company.com"}
                        className={isRTL ? 'text-right' : ''}
                        dir="ltr"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.company')}</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={isRTL ? "اسم الشركة" : "Your Company"}
                        className={isRTL ? 'text-right' : ''}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.service')}</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full h-10 px-3 rounded-md border border-input bg-background text-sm ${isRTL ? 'text-right' : ''}`}
                      >
                        <option value="">{t('contact.form.serviceSelect')}</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}>{t('contact.form.message')}</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      className={isRTL ? 'text-right' : ''}
                    />
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

      {/* Map Section */}
      <section className="h-[400px] bg-secondary relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsla(var(--royal-blue)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--royal-blue)/0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-foreground">{t('contact.address.value')}</h3>
            <p className="text-secondary-foreground/60">{t('contact.address.desc')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
