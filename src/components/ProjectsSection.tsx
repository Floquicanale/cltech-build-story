import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const ProjectsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Complejo Corporativo San Martín",
      description: "Edificio de oficinas de 8 pisos con fachada de vidrio y estructura de acero. Superficie: 3,200 m². Incluye estacionamiento subterráneo y sistemas de eficiencia energética.",
      image: project1,
      category: "Obra Civil"
    },
    {
      id: 2,
      title: "Centro Logístico Industrial",
      description: "Nave industrial de 5,000 m² con altura de 12 metros. Incluye oficinas administrativas, sistema contra incendios y tecnología de automatización para depósito.",
      image: project2,
      category: "Obra Industrial"
    },
    {
      id: 3,
      title: "Complejo Residencial Los Andes",
      description: "Desarrollo residencial de 45 unidades en 3 edificios. Incluye áreas verdes, quincho comunitario y sistema de seguridad integral.",
      image: project3,
      category: "Obra Civil"
    },
    {
      id: 4,
      title: "Ampliación Hospital Regional",
      description: "Refacción y ampliación de 2,800 m² incluyendo nueva ala de emergencias, quirófanos y sistemas de aire acondicionado hospitalario.",
      image: project4,
      category: "Refacción"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-background">
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
            Obras Realizadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada proyecto representa nuestro compromiso con la excelencia y la innovación. 
            Descubre algunas de nuestras obras más destacadas.
          </p>
        </motion.div>

        {/* Project Carousel */}
        <motion.div 
          ref={projectsRef}
          className="relative"
          initial={{ opacity: 0 }}
          animate={projectsVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-construction">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className="relative h-96 md:h-[500px]"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredProject(currentProject)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <img 
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-primary/40 transition-all duration-300 ${
                  hoveredProject === currentProject ? 'bg-white/20' : ''
                }`} />

                {/* Project Info */}
                <motion.div 
                  className="absolute inset-0 flex items-end"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: hoveredProject === currentProject ? 1 : 0.8,
                    y: hoveredProject === currentProject ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 text-white w-full">
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                      <span className="inline-block bg-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {projects[currentProject].category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {projects[currentProject].title}
                      </h3>
                      <AnimatePresence>
                        {hoveredProject === currentProject && (
                          <motion.p
                            className="text-lg leading-relaxed"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {projects[currentProject].description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-accent scale-125' 
                    : 'bg-construction-concrete hover:bg-construction-steel'
                }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-muted-foreground">
              Proyecto {currentProject + 1} de {projects.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;