import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2, Wrench, Expand, ClipboardCheck } from 'lucide-react';

const ServicesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const services = [
    {
      icon: Building2,
      title: "Construcción de obras civiles e industriales",
      description: "Desarrollo integral de proyectos de construcción, desde edificios residenciales hasta complejas instalaciones industriales.",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Wrench,
      title: "Mantenimiento integral de edificios", 
      description: "Servicios de mantenimiento preventivo y correctivo para preservar la funcionalidad y valor de sus propiedades.",
      color: "from-accent to-accent-light"
    },
    {
      icon: Expand,
      title: "Ampliaciones y refacciones",
      description: "Modernización y expansión de espacios existentes, adaptándolos a nuevas necesidades y estándares actuales.",
      color: "from-construction-steel to-construction-concrete"
    },
    {
      icon: ClipboardCheck,
      title: "Dirección técnica y asesoramiento estructural",
      description: "Supervisión profesional de obras y consultoría especializada en análisis y diseño estructural.",
      color: "from-primary-light to-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
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
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en construcción, combinando experiencia, 
            tecnología y compromiso para superar las expectativas de nuestros clientes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={servicesRef}
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={servicesVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={servicesVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-construction transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon Bubble */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br ${service.color} opacity-60 animate-float`} />
                  <div className={`absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-br ${service.color} opacity-40 animate-float`} style={{ animationDelay: '1s' }} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            ¿Necesitas una consulta personalizada para tu proyecto?
          </p>
          <motion.button 
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-construction hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Cotización
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;