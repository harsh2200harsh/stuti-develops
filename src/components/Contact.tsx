import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mono text-primary mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Lucknow, India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={18} className="text-primary" />
              <a href="mailto:stutinagar23@gmail.com" className="hover:text-primary transition-colors">
                stutinagar23@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={18} className="text-primary" />
              <a href="tel:+919682884217" className="hover:text-primary transition-colors">
                +91 9682884217
              </a>
            </div>
          </div>

          <motion.a
            href="mailto:stutinagar23@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex px-10 py-4 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all duration-300 glow-effect"
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
