import { useEffect, useState } from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';

const sections = ['home', 'showcase', 'contact'];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = stored ? stored === 'dark' : prefersDark;
    setDark(useDark);
    document.documentElement.classList.toggle('dark', useDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1.5 text-sm shadow backdrop-blur-md transition hover:scale-105 dark:border-white/10 dark:bg-white/5"
    >
      {dark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="hidden sm:inline">{dark ? 'Dark' : 'Light'}</span>
    </button>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/70 p-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-[#0F1429]/70">
          <a href="#home" className="group flex items-center gap-2 rounded-xl px-3 py-2">
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 p-2 text-white shadow">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold tracking-tight">Yash Landge</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100/70 dark:hover:bg-white/10 ${
                  active === id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {id === 'home' ? 'Home' : id === 'showcase' ? 'Work' : 'Contact'}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
