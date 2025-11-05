import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative h-[80vh] w-full">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#0B1020] dark:via-[#0B1020]/50" />
      </div>

      <div className="mx-auto -mt-32 max-w-6xl px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/20 bg-white/60 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 inline-block rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-sm font-semibold text-transparent">
                Industrial IOT Engineer • Web Developer • Cybersecurity & Web3 Enthusiast
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Yash Landge
              </h1>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                Building the future with code, creativity, and AI.
              </p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                I’m an IoT engineering student passionate about crafting creative tech projects and exploring cutting-edge tools across Web, AI, and decentralized systems. I love turning ideas into delightful, useful products.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
