import React from 'react'

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-700 hover:text-indigo-700 transition-colors"
  >
    {children}
  </a>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">designer.me</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <a href="#contact" className="hidden md:inline-flex rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
          Let’s talk
        </a>
      </div>
    </header>
  )
}
