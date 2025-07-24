import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import clientCooperativa from '@/assets/client-cooperativa-obrera.jpg';
import clientYPF from '@/assets/client-ypf.jpg';
import clientMotomecanica from '@/assets/client-motomecanica.jpg';
import clientNeuform from '@/assets/client-neuform.jpg';

const ClientsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: clientsRef, isVisible: clientsVisible } = useScrollAnimation();

  const clients = [
    {
      name: "Cooperativa Obrera",
      logo: clientCooperativa,
      description: "Líder en servicios y productos de consumo masivo"
    },
    {
      name: "YPF",
      logo: clientYPF,
      description: "Empresa energética argentina"
    },
    {
      name: "Motomecánica",
      logo: clientMotomecanica,
      description: "Especialistas en ingeniería mecánica"
    },
    {
      name: "Neuform",
      logo: clientNeuform,
      description: "Innovación en materiales de construcción"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-muted">
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
            Clientes y Alianzas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trabajamos junto a empresas líderes que confían en nuestra experiencia 
            y capacidad para ejecutar proyectos de alta complejidad.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div 
          ref={clientsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={clientsVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="group relative bg-card rounded-lg p-8 shadow-card hover:shadow-construction transition-all duration-300 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={clientsVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Logo */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-24 h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Client Name */}
              <h3 className="text-lg font-semibold text-primary text-center mb-2">
                {client.name}
              </h3>

              {/* Description - appears on hover */}
              <div className="absolute inset-0 bg-primary/95 rounded-lg flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center text-white">
                  <h4 className="font-bold mb-2">{client.name}</h4>
                  <p className="text-sm">{client.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Message */}
        <motion.div 
          className="text-center mt-16 p-8 bg-card rounded-2xl shadow-card"
          initial={{ opacity: 0, y: 30 }}
          animate={clientsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Construyendo Alianzas Estratégicas
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Nuestras alianzas estratégicas nos permiten ofrecer soluciones integrales 
            y de última generación. Trabajamos en conjunto con los mejores proveedores 
            y profesionales del sector para garantizar la excelencia en cada proyecto.
          </p>
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={clientsVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium">+50 Proyectos Completados</span>
            </div>
            <div className="bg-accent/10 px-4 py-2 rounded-full">
              <span className="text-accent font-medium">20+ Años de Experiencia</span>
            </div>
            <div className="bg-construction-steel/20 px-4 py-2 rounded-full">
              <span className="text-construction-steel font-medium">Confianza Empresarial</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;