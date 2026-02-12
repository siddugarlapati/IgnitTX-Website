
import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<{ currentPage: string; onNavigate: (page: string) => void }> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: 'INDEX', id: 'home' },
    { name: 'ROADMAPS', id: 'roadmaps' },
    { name: 'ENGINEERING_LABS', id: 'ondemand' },
    { name: 'AI_SYNTH', id: 'aitools' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-4 md:py-8 pointer-events-none transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 py-3.5 md:py-4 nav-blur rounded-full pointer-events-auto border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavigate('home')}
        >
          <img 
            src="/icon.svg" 
            alt="IgniteXT Logo" 
            className="w-8 h-8 transition-transform group-hover:scale-110 shrink-0"
          />
          <span className="text-lg font-bold tracking-tight text-white font-heading whitespace-nowrap">IGNITE<span className="text-yellow-400">XT</span></span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`text-[10px] font-black tracking-[0.4em] transition-all relative py-2 ${
                currentPage === link.id 
                  ? 'text-yellow-400' 
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {link.name}
              {currentPage === link.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_10px_#FACC15]"></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavigate('contribute')}
            className="hidden sm:block bg-white text-black px-6 md:px-8 py-2 rounded-full font-bold text-[10px] tracking-widest hover:bg-yellow-400 transition-all active:scale-95 whitespace-nowrap"
          >
            CONNECT
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#080808]/98 backdrop-blur-2xl z-[-1] transition-all duration-500 lg:hidden pointer-events-auto ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          {links.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`text-3xl font-black tracking-tighter transition-all font-heading ${
                currentPage === link.id ? 'text-yellow-400 italic' : 'text-white/40'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name.replace('_', ' ')}
            </button>
          ))}
          <div className="w-12 h-0.5 bg-yellow-400/20 my-4"></div>
          <button 
            onClick={() => handleNavigate('contribute')}
            className="text-white font-bold tracking-[0.4em] text-xs"
          >
            JOIN_THE_FOUNDATION
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <footer className="bg-[#080808] border-t border-white/5 pt-20 md:pt-40 pb-20 px-6 md:px-10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 mb-20 md:mb-32">
      <div className="md:col-span-6">
        <h3 className="text-3xl md:text-5xl font-black mb-8 md:mb-10 text-white tracking-tight font-heading leading-tight">Mastering the <br/><span className="text-yellow-400">Engineering Lifecycle.</span></h3>
        <p className="text-white/30 max-w-md leading-relaxed text-lg font-light italic">
          "The distance between a student and a maintainer is defined by the tools they leverage."
        </p>
      </div>
      <div className="md:col-span-3">
        <h4 className="font-bold mb-6 md:mb-8 text-yellow-400 text-[10px] tracking-[0.4em] uppercase">Modules</h4>
        <ul className="space-y-4 text-white/30 text-[10px] font-black tracking-[0.2em]">
          <li onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer transition-colors uppercase">Home Index</li>
          <li onClick={() => onNavigate('roadmaps')} className="hover:text-white cursor-pointer transition-colors uppercase">Pathfinder Roadmaps</li>
          <li onClick={() => onNavigate('ondemand')} className="hover:text-white cursor-pointer transition-colors uppercase">Engineering Labs</li>
          <li onClick={() => onNavigate('aitools')} className="hover:text-white cursor-pointer transition-colors uppercase">AI Synthesis Lab</li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <h4 className="font-bold mb-6 md:mb-8 text-yellow-400 text-[10px] tracking-[0.4em] uppercase">Foundation</h4>
        <ul className="space-y-4 text-white/30 text-[10px] font-black tracking-[0.2em]">
          <li onClick={() => onNavigate('about')} className="hover:text-white cursor-pointer transition-colors uppercase">Vision & Mission</li>
          <li onClick={() => onNavigate('opensource')} className="hover:text-white cursor-pointer transition-colors uppercase">Community</li>
          <li onClick={() => onNavigate('contribute')} className="hover:text-white cursor-pointer transition-colors uppercase">Join the Network</li>
          <li onClick={() => onNavigate('contact')} className="hover:text-white cursor-pointer transition-colors uppercase">Contact Us</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-white/10 text-[9px] font-bold tracking-[0.5em] gap-8">
      <p>IGNITEXT FOUNDATION // 2025_DEPLOYS</p>
      <div className="flex gap-8">
        <span className="hover:text-yellow-400 cursor-pointer transition-colors">ROOT_ACCESS</span>
        <span className="hover:text-yellow-400 cursor-pointer transition-colors">PRIVACY_01</span>
      </div>
    </div>
  </footer>
);

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-400 selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Layout;
