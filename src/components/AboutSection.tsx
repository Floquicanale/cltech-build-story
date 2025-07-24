import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import founderImage from '@/assets/founder-omar-canale.jpg';
import { Target, Eye, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: founderRef, isVisible: founderVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Brindar soluciones constructivas integrales con la más alta calidad, cumpliendo plazos y superando expectativas de nuestros clientes."
    },
    {
      icon: Eye,
      title: "Visión", 
      description: "Ser la empresa de construcción de referencia en la región patagónica, reconocida por nuestra excelencia técnica e innovación."
    },
    {
      icon: Award,
      title: "Valores",
      description: "Compromiso, calidad, transparencia, seguridad y responsabilidad ambiental en cada proyecto que emprendemos."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
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
            Nuestra Historia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde nuestros inicios, CLTECH S.A. ha mantenido un compromiso inquebrantable 
            con la excelencia en construcción, evolucionando constantemente para ofrecer 
            las mejores soluciones del mercado.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div 
          ref={founderRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }}
          animate={founderVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={founderVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              Ing. Omar Canale - Fundador
            </h3>
            <blockquote className="text-xl italic text-construction-steel mb-4 border-l-4 border-accent pl-6">
              "La construcción no es solo levantar estructuras, es crear espacios 
              donde las personas viven, trabajan y crecen. Cada proyecto es una 
              oportunidad de contribuir al progreso de nuestra comunidad."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Con más de 25 años de experiencia en ingeniería civil, el Ing. Omar Canale 
              fundó CLTECH S.A. con la visión de crear una empresa que combine 
              experiencia técnica, innovación y un profundo compromiso con la calidad.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={founderVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img 
                src={founderImage} 
                alt="Ing. Omar Canale - Fundador de CLTECH S.A."
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          ref={valuesRef}
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Nuestros Pilares
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-construction transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          ref={teamRef}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={teamVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-primary mb-6">
            Nuestro Equipo Técnico
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contamos con un equipo multidisciplinario de profesionales altamente calificados: 
              ingenieros civiles, arquitectos, maestros mayores de obras, técnicos especializados 
              y operarios experimentados. Cada miembro de nuestro equipo comparte el compromiso 
              con la excelencia y la innovación que caracteriza a CLTECH S.A.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;