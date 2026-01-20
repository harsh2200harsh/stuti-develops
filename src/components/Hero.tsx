import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mono text-primary mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-4"
        >
          Stuti Nagar.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-muted-foreground mb-8"
        >
          I craft digital experiences.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-lg max-w-xl mb-12 leading-relaxed"
        >
          I'm a frontend developer based in Lucknow, India, specializing in building 
          exceptional digital experiences. Currently focused on creating accessible, 
          human-centered products that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-transparent border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all duration-300"
          >
            View My Work
          </a>

          <div className="flex items-center gap-4">
            <a href="https://github.com/stutinagar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/stutinagar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:stutinagar23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
