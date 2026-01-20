import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Database, Zap } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Redux', 'React Query'],
    },
    {
      icon: Palette,
      title: 'UI/UX & Design',
      skills: ['Tailwind CSS', 'Styled Components', 'Figma', 'Framer Motion', 'CSS Grid/Flexbox', 'Responsive Design'],
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
    },
    {
      icon: Zap,
      title: 'Tools & Workflow',
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'CI/CD', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4 mb-12">
            <span className="mono text-primary text-xl font-normal">02.</span>
            Skills & Expertise
            <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm mono bg-secondary/50 text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
