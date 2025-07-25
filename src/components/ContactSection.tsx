import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, MapPin, Clock, Instagram, Mail, Send } from 'lucide-react';
import { useEffect } from 'react';

const ContactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const [state, handleSubmit] = useForm("mdkdggrv"); 
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
    }
  }, [state.succeeded, toast]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+54 2944 242-685",
      link: "tel:+542944242685"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Amancay 89, San Martín de los Andes, Neuquén",
      link: "https://maps.google.com/?q=San+Martin+de+los+Andes"
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 8:00 - 18:00 hs",
      link: null
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@clte_c",
      link: "https://instagram.com/clte_c"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tenés un proyecto en mente? Nos encantaría conocer los detalles 
            y ayudarte a volverlo realidad.
          </p>
        </motion.div>

        <motion.div 
          ref={contactRef}
          className="grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={contactVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Form */}
          <motion.div
            className="bg-card rounded-2xl p-8 shadow-card"
            initial={{ opacity: 0, x: -50 }}
            animate={contactVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-accent" />
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-primary">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="Tu nombre"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <Label htmlFor="company" className="text-primary">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-2"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-primary">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2"
                    placeholder="tu@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-primary">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-primary">Asunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-2"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-primary">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2"
                  placeholder="Cuéntanos más detalles sobre tu proyecto..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg font-medium"
              >
                {state.submitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={contactVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-card hover:shadow-construction transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <motion.div
              className="bg-card rounded-2xl p-6 shadow-card"
              initial={{ opacity: 0, y: 30 }}
              animate={contactVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-xl font-bold text-primary mb-4">Nuestra ubicación</h4>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456789!2d-71.3533333!3d-40.1564444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSan%20Mart%C3%ADn%20de%20los%20Andes!5e0!3m2!1ses!2sar!4v1642123456789!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de CLTECH S.A. en San Martín de los Andes"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                San Martín de los Andes, Neuquén - Argentina
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;