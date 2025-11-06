import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, FlaskConical, LayoutList, Handshake } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Understand',
    desc: 'Stakeholder interviews, competitive research, and problem framing.',
  },
  {
    icon: FlaskConical,
    title: 'Explore',
    desc: 'Wireframes and quick prototypes to validate directions fast.',
  },
  {
    icon: LayoutList,
    title: 'Design',
    desc: 'High-fidelity UI, motion, and design systems that scale.',
  },
  {
    icon: Handshake,
    title: 'Deliver',
    desc: 'Specs, assets, and dev-ready components with ongoing support.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative w-full bg-gradient-to-b from-white to-indigo-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Design Process</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Flexible, collaborative, and pragmatic. I tailor the approach to your team’s needs.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
