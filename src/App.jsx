import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  // Enable smooth scroll behavior for anchor clicks in older browsers
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0B1020] dark:via-[#0B1020] dark:to-[#0B1020] text-slate-900 dark:text-slate-100">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="showcase" className="scroll-mt-24">
          <Showcase />
        </section>

        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>

      <footer className="mt-16 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Yash Landge. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
