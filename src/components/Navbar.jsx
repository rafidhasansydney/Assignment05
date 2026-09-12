const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-sm font-extrabold text-white">
            DS
          </span>
          <span className="font-heading text-xl font-bold text-slate-900">
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

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:block"
          >
            Sign In
          </a>
          <a
            href="#"
            className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
