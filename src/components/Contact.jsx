import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')

    try {
      await new Promise((r) => setTimeout(r, 900))
      setStatus('Thanks! I will get back to you within 24 hours.')
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s build something great</h2>
          <p className="mt-2 text-gray-600">Tell me a bit about your project, timeline, and goals.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input required type="text" className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 outline-none ring-indigo-600/10 focus:bg-white focus:ring" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 outline-none ring-indigo-600/10 focus:bg-white focus:ring" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">How can I help?</label>
            <textarea required rows={5} className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 outline-none ring-indigo-600/10 focus:bg-white focus:ring" />
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              hello@designer.me
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? 'Sending...' : 'Send message'}
              <Send className="h-4 w-4" />
            </button>
          </div>
          {status && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-emerald-700"
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </section>
  )
}
