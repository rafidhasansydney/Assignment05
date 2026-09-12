const badgeStyles = {
  Popular: 'bg-blue-50 text-sky-700',
  Versatile: 'bg-emerald-50 text-emerald-700',
  Fast: 'bg-orange-50 text-orange-600',
  'SSR / Edge': 'bg-purple-50 text-purple-700',
  Essential: 'bg-sky-50 text-sky-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Flexible: 'bg-emerald-50 text-emerald-700',
  Cache: 'bg-red-50 text-red-600',
  Ubiquitous: 'bg-amber-50 text-amber-600',
  Typed: 'bg-blue-50 text-blue-700',
  Modern: 'bg-cyan-50 text-cyan-800',
  Containers: 'bg-blue-50 text-blue-700',
}

function TechnologyCard({ tech, isAdded, onAdd }) {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/60 ${
        isAdded ? 'border-pink-400' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            badgeStyles[tech.badge] || 'bg-slate-100 text-slate-600'
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto font-semibold text-slate-700">
          <span className="text-amber-500">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={onAdd}
        className={
          isAdded
            ? 'mt-5 w-full cursor-not-allowed rounded-lg bg-pink-50 py-2.5 text-sm font-semibold text-[#d91b7e]'
            : 'mt-5 w-full rounded-lg bg-[#0a0f1d] py-2.5 text-sm font-semibold text-white hover:bg-slate-800'
        }
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechnologyCard
