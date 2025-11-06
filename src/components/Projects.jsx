import React from 'react'
import { motion } from 'framer-motion'
import { Figma, Rocket, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Fintech Mobile App',
    tag: 'UX Case Study',
    desc: 'Onboarding flow redesign that increased activation by 27%.',
    color: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SaaS Analytics Dashboard',
    tag: 'UI System',
    desc: 'Responsive component library and data viz patterns.',
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E‑commerce Web',
    tag: 'Interaction Design',
    desc: 'Playful micro-interactions for product discovery.',
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-gray-600">A mix of product design, systems, and motion.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 md:inline-flex"
          >
            Book a slot
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${p.color} opacity-20 mix-blend-multiply`} />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
                  <Figma className="h-3.5 w-3.5" /> {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                  <Rocket className="h-4 w-4 text-indigo-600" />
                  <span>Read case study</span>
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>Prototype</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
