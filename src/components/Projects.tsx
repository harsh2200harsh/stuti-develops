import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: 'ShopFlow E-Commerce',
      description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern web technologies for optimal performance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com/stutinagar/shopflow',
      live: 'https://shopflow-demo.vercel.app',
      image: 'ecommerce',
    },
    {
      title: 'TaskMaster Pro',
      description: 'A collaborative project management tool featuring real-time updates, Kanban boards, time tracking, and team analytics. Designed to boost team productivity with an intuitive interface.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      github: 'https://github.com/stutinagar/taskmaster',
      live: 'https://taskmaster-pro.vercel.app',
      image: 'taskmanager',
    },
    {
      title: 'CryptoTrack Dashboard',
      description: 'Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and market analysis. Features interactive charts and personalized watchlists.',
      tech: ['React', 'D3.js', 'WebSocket', 'TailwindCSS', 'CoinGecko API'],
      github: 'https://github.com/stutinagar/cryptotrack',
      live: 'https://cryptotrack-dash.vercel.app',
      image: 'crypto',
    },
  ];

  const otherProjects = [
    { title: 'Weather App', description: 'Beautiful weather application with 7-day forecasts and location detection.', tech: ['React', 'OpenWeather API', 'Geolocation'], github: '#', live: '#' },
    { title: 'Portfolio V1', description: 'My first portfolio website built while learning React.', tech: ['React', 'CSS3', 'Netlify'], github: '#', live: '#' },
    { title: 'Recipe Finder', description: 'Search and save your favorite recipes with nutritional info.', tech: ['Vue.js', 'Spoonacular API', 'Firebase'], github: '#', live: '#' },
    { title: 'Chat Application', description: 'Real-time messaging app with rooms and private chats.', tech: ['React', 'Socket.io', 'Express'], github: '#', live: '#' },
    { title: 'Budget Tracker', description: 'Personal finance tracker with visual spending analytics.', tech: ['React', 'Chart.js', 'LocalStorage'], github: '#', live: '#' },
    { title: 'URL Shortener', description: 'Custom URL shortening service with click analytics.', tech: ['Node.js', 'MongoDB', 'React'], github: '#', live: '#' },
  ];

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4 mb-12">
            <span className="mono text-primary text-xl font-normal">03.</span>
            Things I've Built
            <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'md:text-right' : ''}`}
              >
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-lg" />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </div>

                {/* Project Content */}
                <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-1 md:col-start-1' : 'md:col-start-6'} md:absolute md:inset-y-0 flex flex-col justify-center`}>
                  <p className="mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </h3>
                  <div className="card-glass p-6 rounded-lg mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 mb-4 mono text-sm text-muted-foreground ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Other Noteworthy Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="card-glass p-6 rounded-xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder size={40} className="text-primary" />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mono text-xs text-muted-foreground">
                  {project.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
