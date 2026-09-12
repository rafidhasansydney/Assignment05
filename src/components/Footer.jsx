const productLinks = ['Home', 'Technologies', 'Projects']
const companyLinks = ['About', 'Careers', 'Contact']
const legalLinks = ['Privacy Policy', 'Terms of Service']

function LinkGroup({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-slate-900">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-mark-gradient text-[9px] font-extrabold text-white">
                DS
              </span>
              <span className="font-heading text-lg font-bold text-slate-900">
                Dev{' '}
                <span className="font-extrabold text-brand-gradient">Stack</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-semibold text-slate-600">
              <a href="#" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="#" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          <LinkGroup title="Product" links={productLinks} />
          <LinkGroup title="Company" links={companyLinks} />
          <LinkGroup title="Legal" links={legalLinks} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
