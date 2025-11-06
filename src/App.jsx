import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} designer.me — Crafted with care.
        </div>
      </footer>
    </div>
  )
}
