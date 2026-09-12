import { useState } from 'react'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6 lg:px-8">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <a
          href="#"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 md:static md:translate-x-0 md:gap-2.5"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-mark-gradient text-[9px] font-extrabold text-white md:h-9 md:w-9 md:rounded-lg md:text-sm">
            DS
          </span>
          <span className="font-heading text-[11px] font-bold text-slate-900 md:text-xl">
            Dev <span className="font-extrabold text-brand-gradient">Stack</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={
                  link === 'Home'
                    ? 'text-sm font-semibold text-pink-600'
                    : 'text-sm font-medium text-slate-600 hover:text-slate-900'
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#"
            className="text-[10px] font-semibold text-slate-600 hover:text-slate-900 md:text-sm md:font-medium md:text-slate-700"
          >
            Sign In
          </a>
          <a
            href="#"
            className="rounded-full bg-[#d91b7e] px-3.5 py-1.5 text-[10px] font-semibold text-white hover:opacity-90 md:px-5 md:py-2.5 md:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {menuOpen && (
        <ul className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className={
                  link === 'Home'
                    ? 'block rounded-lg px-3 py-2.5 text-sm font-semibold text-pink-600'
                    : 'block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
