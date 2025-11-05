import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl font-bold tracking-tight md:text-3xl"
      >
        Contact
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        >
          <h3 className="text-lg font-semibold">Let’s build something great</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Have an idea, collaboration, or just want to say hi? Drop a message and I’ll get back soon.
          </p>

          <form
            action="https://formspree.io/f/mvgpjyzy"
            method="POST"
            className="mt-6 space-y-4"
          >
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        >
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              I’m active on these platforms. Feel free to reach out or follow for updates.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm shadow backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm shadow backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm shadow backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                <Twitter size={16} /> Twitter
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 text-sm text-slate-700 shadow backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <p>
              Open to internships, freelance opportunities, and collaborative projects across IoT, Web, and Web3.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
