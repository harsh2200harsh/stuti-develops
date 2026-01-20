import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'TechNova Solutions',
      role: 'Frontend Developer',
      period: 'Jan 2023 - Present',
      url: 'https://technova.com',
      points: [
        'Lead the development of the company\'s main product dashboard using React and TypeScript, improving user engagement by 40%',
        'Collaborate with design and backend teams to implement new features and optimize existing functionality',
        'Mentor junior developers and conduct code reviews to maintain high code quality standards',
        'Implement CI/CD pipelines and automated testing, reducing deployment time by 60%',
      ],
    },
    {
      company: 'PixelCraft Agency',
      role: 'Junior Frontend Developer',
      period: 'Jun 2021 - Dec 2022',
      url: 'https://pixelcraft.io',
      points: [
        'Developed responsive websites and web applications for various clients across industries',
        'Built reusable component libraries that reduced development time by 30%',
        'Integrated third-party APIs and services including payment gateways and analytics',
        'Participated in client meetings and contributed to project planning and estimation',
      ],
    },
    {
      company: 'StartupX',
      role: 'Frontend Intern',
      period: 'Jan 2021 - May 2021',
      url: 'https://startupx.in',
      points: [
        'Assisted in building the company\'s customer-facing web application using React',
        'Learned and implemented best practices for code organization and version control',
        'Participated in daily standups and agile development processes',
        'Created documentation for components and development workflows',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4 mb-12">
            <span className="mono text-primary text-xl font-normal">04.</span>
            Where I've Worked
            <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 text-sm font-medium text-left whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                    activeTab === index
                      ? 'text-primary border-primary bg-primary/5'
                      : 'text-muted-foreground border-transparent hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-h-[280px]"
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experiences[activeTab].role}{' '}
                <a href={experiences[activeTab].url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @ {experiences[activeTab].company}
                </a>
              </h3>
              <p className="mono text-sm text-muted-foreground mb-6">{experiences[activeTab].period}</p>
              <ul className="space-y-4">
                {experiences[activeTab].points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
