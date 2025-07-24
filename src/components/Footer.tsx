import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">CLTECH S.A.</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Construimos confianza y entregamos soluciones de calidad superior 
              en cada proyecto que emprendemos.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-accent">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Obras civiles e industriales</li>
              <li>• Mantenimiento integral</li>
              <li>• Ampliaciones y refacciones</li>
              <li>• Dirección técnica</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-accent">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+54 2972 123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@cltech-sa.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>Av. San Martín 1234<br />San Martín de los Andes, Neuquén</span>
              </div>
            </div>
          </motion.div>

          {/* Social & Legal */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-accent">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/cltech_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="pt-4 space-y-2 text-sm text-primary-foreground/60">
              <p>CUIT: 30-12345678-9</p>
              <p>Matrícula Profesional: MP-001</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} CLTECH S.A. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
            Construyendo el futuro de la Patagonia
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;