import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'GraphQL',
    'MongoDB',
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4 mb-12">
            <span className="mono text-primary text-xl font-normal">01.</span>
            About Me
            <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Stuti, a passionate frontend developer who loves bringing ideas to life 
                through clean, efficient code. My journey in web development started back in 2019 
                when I decided to explore how websites work — turns out playing with HTML and CSS 
                was just the beginning!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at a 
                <span className="text-primary"> startup</span>, an 
                <span className="text-primary"> e-commerce company</span>, and a 
                <span className="text-primary"> digital agency</span>. My main focus these days 
                is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-5">
                {technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">▹</span>
                    <span className="mono">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-5xl font-bold text-primary-foreground">
                    SN
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
