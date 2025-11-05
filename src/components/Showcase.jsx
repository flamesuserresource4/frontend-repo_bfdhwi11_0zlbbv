import { motion } from 'framer-motion';
import { Code, Server, Database, Brain, Shield, Globe, Layers } from 'lucide-react';

const skills = [
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Firebase', icon: Database },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'Solidity', icon: Shield },
  { name: 'Python', icon: Code },
  { name: 'AI Tools', icon: Brain },
  { name: 'Web3', icon: Globe },
  { name: 'MERN Stack', icon: Server },
];

const projects = [
  {
    title: 'CLC Digital Portal',
    desc: 'A modern academic portal built with Firebase + React for seamless access to resources and updates.',
    tech: ['React', 'Firebase', 'Tailwind'],
    link: 'https://github.com/',
  },
  {
    title: 'AIDChain – Microloan App',
    desc: 'Blockchain-powered microloans with transparent tracking and smart-contract enforcement.',
    tech: ['Solidity', 'Web3', 'React'],
    link: 'https://github.com/',
  },
  {
    title: 'Smart Resource Conservation in IoT',
    desc: 'IoT system for intelligent monitoring and resource optimization across devices.',
    tech: ['IoT', 'Python', 'Edge'],
    link: 'https://github.com/',
  },
  {
    title: 'Farcaster – Cast of the Day',
    desc: 'A mini app that highlights the most interesting community cast every day.',
    tech: ['React', 'API', 'UI'],
    link: 'https://github.com/',
  },
];

export default function Showcase() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Skills */}
      <section className="py-14">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl font-bold tracking-tight md:text-3xl"
        >
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="group rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-lg backdrop-blur-md transition dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 p-2 text-white shadow">
                  <Icon size={18} />
                </div>
                <p className="font-medium">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl font-bold tracking-tight md:text-3xl"
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200/70 bg-white/70 px-2.5 py-1 text-xs text-slate-700 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
