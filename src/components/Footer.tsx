import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/stutinagar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/stutinagar', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/stutinagar', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/stutinagar', label: 'Instagram' },
    { icon: Mail, href: 'mailto:stutinagar23@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Social Links - Mobile */}
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/stutinagar/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Designed & Built by Stuti Nagar
          </a>
          <p className="mono text-xs text-muted-foreground/60 mt-2">© 2024 All Rights Reserved</p>
        </div>
      </div>

      {/* Side Elements - Desktop */}
      <div className="hidden md:flex fixed left-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      <div className="hidden md:flex fixed right-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a 
          href="mailto:stutinagar23@gmail.com" 
          className="mono text-sm text-muted-foreground hover:text-primary transition-colors [writing-mode:vertical-rl]"
        >
          stutinagar23@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
