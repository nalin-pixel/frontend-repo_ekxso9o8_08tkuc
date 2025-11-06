import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white" id="home">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur"
          >
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
            Available for Freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Product-focused UI/UX Designer
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">crafting playful, modern interfaces</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            I blend research, interaction design, and micro-animations to turn complex problems into delightful experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToId('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-600/20 transition-transform hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="mailto:hello@designer.me?subject=Project%20Inquiry&body=Hi!%20I%27d%20love%20to%20work%20together.%20"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-gray-800 shadow-sm hover:border-indigo-300 hover:text-indigo-700"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>

            <div className="ml-1 flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 hover:border-gray-300 hover:text-gray-900"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 hover:border-gray-300 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] w-full md:h-[560px]">
          <div className="absolute inset-0 rounded-2xl border border-indigo-100/60 bg-white/40 shadow-inner backdrop-blur-sm" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 via-transparent to-white/0" />
        </div>
      </div>
    </section>
  )
}
