import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gradient">SN</a>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                <span className="mono text-primary text-xs mr-1">0{index + 1}.</span>
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden md:inline-flex px-4 py-2 border border-primary text-primary text-sm font-medium rounded hover:bg-primary/10 transition-colors"
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
