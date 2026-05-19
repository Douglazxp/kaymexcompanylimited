/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  MessageCircle, 
  Send, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  Cpu,
  Code,
  Gamepad2,
  Smartphone,
  ShieldHalf,
  Terminal,
  Users,
  Briefcase
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// --- Components ---

const SectionHeader = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-10 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 tracking-tighter">{title}</h2>
      {subtitle && <p className="text-white/40 text-sm md:text-lg font-light max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`w-16 md:w-20 h-1 bg-primary mt-6 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <ReadingProgressBar />
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-primary truncate"
        >
          KAYMEX
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/kaymex_hero_bg_1779181586483.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full z-1" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full z-1" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-[0.9] break-words">
            KAYMEX COMPANY LIMITED
          </h1>
          <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light px-4">
            Building Modern Tech, AI & Gaming Experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              Our Technology <ChevronRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-5" />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              title="Who We Are" 
              subtitle="Kaymex Company Limited is a pioneering technology firm dedicated to engineering the future through technical excellence and creative innovation."
              centered={false}
            />
            <p className="text-lg text-white/70 leading-relaxed mb-6 -mt-8">
              We specialize in developing robust software, advanced AI systems, 
              and next-generation digital services.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              From competitive gaming to sophisticated computer programs, our mission is to 
              create high-performance digital environments that redefine how the world interacts with technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="glass p-8 rounded-3xl relative overflow-hidden z-10">
              <div className="relative z-20">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="italic text-xl text-white/90">
                  "To be the global benchmark for innovation in AI, Gaming, and Software Engineering, 
                  driving progress through technical excellence."
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap size={120} className="text-primary" />
              </div>
            </div>
            
            {/* Artistic Image Overlay */}
            <div className="absolute -inset-4 z-0 rotate-3 transition-transform group-hover:rotate-0">
               <img 
                src="/src/assets/images/kaymex_about_creative_1779181603000.png" 
                alt="Creative Studio" 
                className="w-full h-full object-cover rounded-3xl opacity-20 grayscale brightness-50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'App Development',
      desc: 'High-performance mobile and web applications built with modern frameworks.',
      icon: <Smartphone className="text-primary" size={32} />,
      color: 'from-green-500/20'
    },
    {
      title: 'AI Solutions',
      desc: 'Integrating advanced artificial intelligence to automate and optimize complex workflows.',
      icon: <Cpu className="text-primary" size={32} />,
      color: 'from-blue-500/20'
    },
    {
      title: 'Software Engineering',
      desc: 'Custom computer programs and enterprise-grade software engineered for reliability.',
      icon: <Code className="text-primary" size={32} />,
      color: 'from-purple-500/20'
    },
    {
      title: 'Gaming & Interactive',
      desc: 'Immersive digital worlds and interactive gaming experiences for the next generation.',
      icon: <Gamepad2 className="text-primary" size={32} />,
      color: 'from-orange-500/20'
    },
    {
      title: 'IT Infrastructure',
      desc: 'Robust system architecture and cloud management solutions for modern enterprises.',
      icon: <Terminal className="text-primary" size={32} />,
      color: 'from-cyan-500/20'
    },
    {
      title: 'Cyber Security',
      desc: 'Advanced threat protection and data encryption to keep your digital assets safe.',
      icon: <ShieldHalf className="text-primary" size={32} />,
      color: 'from-red-500/20'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Our Technology" 
          subtitle="Technical expertise for a digital-first world, engineered for performance and scalability."
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-full"
          >
            {/* Hover Glow Effect - Enhanced */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${s.color} to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative h-full glass p-6 md:p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all flex flex-col items-start text-left overflow-hidden shadow-2xl shadow-black/50">
               {/* Background subtle gradient */}
               <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${s.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10 blur-3xl`} />

              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-white/60 leading-relaxed font-light text-lg">{s.desc}</p>
              
              <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-primary">Learn More</span>
                <ChevronRight size={16} className="text-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Socials = () => {
  const socials = [
    { name: 'WhatsApp', icon: <MessageCircle />, href: 'https://wa.me/255666930040', color: 'hover:text-green-500' },
  ];

  return (
    <section className="py-24 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-12 uppercase tracking-widest text-white/40">Connect With Us</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              className={`flex flex-col items-center gap-3 text-white/60 transition-colors ${social.color}`}
            >
              <div className="p-4 rounded-full glass group">
                {social.icon}
              </div>
              <span className="text-sm font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Ready to build something extraordinary? Our team is standing by to help you realize your vision."
        />
        <div className="glass rounded-[1.5rem] md:rounded-[3rem] overflow-hidden grid lg:grid-cols-2">
          <div className="p-5 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
            <h3 className="text-xl md:text-2xl font-bold mb-8">Direct Channels</h3>
            <div className="space-y-6">
              <div className="flex items-start md:items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full glass flex items-center justify-center text-primary">
                  <Mail size={18} className="md:w-5 md:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-tighter">Email Us</p>
                  <a href="mailto:kaymexcompanylimited@gmail.com" className="text-sm md:text-lg hover:text-primary transition-colors block truncate">kaymexcompanylimited@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start md:items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full glass flex items-center justify-center text-green-500">
                  <MessageCircle size={18} className="md:w-5 md:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-tighter">WhatsApp</p>
                  <a href="https://wa.me/255666930040" target="_blank" rel="noreferrer" className="text-sm md:text-lg hover:text-green-500 transition-colors block">Chat on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Partner with Kaymex</h3>
            <p className="text-white/60 mb-8 leading-relaxed text-xs md:text-base">
              We've streamlined our communication to ensure you get the fastest response. 
              Reach out via email or WhatsApp to discuss your next big tech project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="mailto:kaymexcompanylimited@gmail.com" className="px-4 py-3 md:px-8 md:py-4 bg-white text-black text-xs md:text-base font-bold rounded-full hover:bg-primary transition-all text-center w-full sm:w-auto">
                Send Email
              </a>
              <a href="https://wa.me/255666930040" className="px-4 py-3 md:px-8 md:py-4 bg-green-500 text-white text-xs md:text-base font-bold rounded-full hover:bg-green-600 transition-all text-center w-full sm:w-auto">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold tracking-tighter text-primary mb-2">
              KAYMEX
            </div>
            <p className="text-white/40 text-sm">Engineering Modern Tech, AI & Gaming.</p>
          </div>
          
          <div className="flex justify-center gap-8 text-sm font-medium text-white/40">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <motion.a 
                href="mailto:kaymexcompanylimited@gmail.com" 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a 
                href="https://wa.me/255666930040" 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <MessageCircle size={18} />
              </motion.a>
            </div>
            <div className="text-white/20 text-[10px] uppercase tracking-widest text-center md:text-right">
              © 2021 Kaymex Company Limited.<br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-black rounded-full shadow-lg shadow-primary/20 cursor-pointer hover:bg-accent transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronRight size={24} className="-rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

const Process = () => {
  const steps = [
    { title: 'Discovery', desc: 'Understanding your unique challenges and objectives.' },
    { title: 'Strategy', desc: 'Designing a technical roadmap for scalable success.' },
    { title: 'Engineering', desc: 'Building high-performance systems with modern tech.' },
    { title: 'Success', desc: 'Deployment, optimization, and continuous growth.' },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Our Methodology" 
          subtitle="A structured approach to solving complex technical problems and delivering value."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-colors group"
            >
              <div className="text-5xl font-display font-bold text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'AI Projects', value: '50+' },
    { label: 'Apps Delivered', value: '120+' },
    { label: 'Gaming Community', value: '10k+' },
    { label: 'Uptime', value: '99.9%' },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 tracking-tighter leading-none">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  const team = [
    {
      name: 'the_real_dogfather',
      role: 'CEO',
      desc: 'Steering the company towards a future of decentralized excellence.',
      image: '/src/assets/images/real_dogfather_portrait_1779183269606.png'
    },
    {
      name: 'ico_beast',
      role: 'Co-Founder',
      desc: 'Driving technical innovation and creative direction at Kaymex.',
      image: '/src/assets/images/ico_beast_portrait_1779183066171.png'
    },
    {
      name: 'daniel msaki',
      role: 'CMO',
      desc: 'Crafting the global narrative and strategic growth for the brand.',
      image: '/src/assets/images/daniel_msaki_portrait_1779183288969.png'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Leadership" 
          subtitle="The visionaries behind Kaymex driving innovation across the digital landscape."
        />
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-full glass p-6 md:p-8 rounded-3xl flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    'TechPulse', 'Nvidia', 'Steam', 'CloudNode', 'MetaEngine', 'CyberGuard'
  ];

  return (
    <section className="py-12 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 opacity-30 grayscale transition-all hover:opacity-60 hover:grayscale-0">
          {partners.map((partner) => (
            <motion.div
              key={partner}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white/40 hover:text-white"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Alex Johnson',
      role: 'CEO, TechFlow',
      content: 'Kaymex delivered our AI integration ahead of schedule. Their technical depth is unmatched.',
      image: '/src/assets/images/customer_alex_johnson_1779183102270.png'
    },
    {
      name: 'Sarah Williams',
      role: 'Founder, GameSphere',
      content: 'The gaming engine they built for us is incredibly smooth. Highly recommend their interactive services.',
      image: '/src/assets/images/customer_sarah_chen_1779183085667.png'
    },
    {
      name: 'Michael Ross',
      role: 'CTO, SecureData',
      content: 'Their cyber security audit was thorough and professional. A reliable partner for any tech venture.',
      image: '/src/assets/images/customer_michael_ross_1779183120868.png'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Client Feedback" 
          subtitle="What industry leaders and our global community say about their experience with Kaymex."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group hover:bg-white/[0.08] transition-all"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30 overflow-hidden">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-primary text-sm">{review.role}</p>
                </div>
              </div>
              <p className="text-white/70 italic leading-relaxed text-lg">
                "{review.content}"
              </p>
              
              {/* Decorative Quote Mark */}
              <div className="absolute top-10 right-10 opacity-5 text-8xl font-serif text-white pointer-events-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Process />
      <Stats />
      <Leadership />
      <Testimonials />
      <Contact />
      <Socials />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
