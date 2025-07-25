import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import clientCooperativa from '@/assets/client-cooperativa-obrera.jpg';
import clientYPF from '@/assets/client-ypf.png';
import clientHSBC from '@/assets/client-hsbc.png';
import clientMacro from '@/assets/client-macro.png';

const ClientsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: clientsRef, isVisible: clientsVisible } = useScrollAnimation();

  const clients = [
    {
      name: "Cooperativa Obrera",
      logo: clientCooperativa,
      description: "Líder en servicios y productos de consumo masivo."
    },
    {
      name: "YPF",
      logo: clientYPF,
      description: "Empresa argentina de energía dedicada a la explotación, destilación, distribución y venta de derivados de hidrocarburos."
    },
    {
      name: "HSBC",
      logo: clientHSBC,
      description: "Empresa multinacional británica de banca y servicios financieros."
    },
    {
      name: "Macro",
      logo: clientMacro,
      description: "Banco de capitales privados argentinos."
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
            Clientes que confían en nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trabajamos junto a empresas líderes que confiaron en nuestra experiencia 
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
      </div>
    </section>
  );
};

export default ClientsSection;