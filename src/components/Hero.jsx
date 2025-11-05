import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const words = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative h-[82vh] w-full">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast (pointer events off so Spline stays interactive) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#0B1020] dark:via-[#0B1020]/60" />
        {/* Subtle radial glow aligned to the new blue/purple theme */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-10 top-10 h-60 w-60 rounded-full bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/25 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto -mt-36 max-w-6xl px-4 pb-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="rounded-3xl border border-white/20 bg-white/60 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <motion.p
                custom={0}
                variants={words}
                className="mb-2 inline-block rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-sm font-semibold text-transparent"
              >
                Industrial IOT Engineer • Web Developer • Cybersecurity & Web3 Enthusiast
              </motion.p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                {['Yash', 'Landge'].map((w, i) => (
                  <motion.h1
                    key={w}
                    custom={i + 1}
                    variants={words}
                    className="text-4xl font-extrabold tracking-tight md:text-6xl"
                  >
                    {w}
                  </motion.h1>
                ))}
              </div>
              <motion.p
                custom={3}
                variants={words}
                className="mt-3 text-lg text-slate-700 dark:text-slate-300"
              >
                Building the future with code, creativity, and AI.
              </motion.p>
              <motion.p
                custom={4}
                variants={words}
                className="mt-4 text-slate-700 dark:text-slate-300"
              >
                I’m an IoT engineering student passionate about crafting creative tech projects and exploring cutting-edge tools across Web, AI, and decentralized systems. I love turning ideas into delightful, useful products.
              </motion.p>

              <motion.div custom={5} variants={words} className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#showcase"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-900"
                >
                  View my work
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300/60 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 shadow backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>

            {/* Floating badges to complement the new animation */}
            <div className="relative hidden md:block">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pointer-events-none select-none"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-700 backdrop-blur-md dark:text-indigo-300">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" /> Real‑time IoT
                </div>
                <div className="block" />
                <div className="inline-flex items-center gap-2 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-2 text-sm text-fuchsia-700 backdrop-blur-md dark:text-fuchsia-300">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-500" /> Web3 x AI
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
