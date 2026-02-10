
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Roadmaps from './pages/Roadmaps';
import OnDemand from './pages/OnDemand';
import AITools from './pages/AITools';
import OpenSource from './pages/OpenSource';
import Contribute from './pages/Contribute';
import Community from './pages/Community';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Ensure scroll reset to top whenever the current page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'about': return <About />;
      case 'roadmaps': return <Roadmaps />;
      case 'ondemand': return <OnDemand />;
      case 'aitools': return <AITools />;
      case 'opensource': return <OpenSource />;
      case 'contribute': return <Contribute />;
      case 'community': return <Community />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
};

export default App;
