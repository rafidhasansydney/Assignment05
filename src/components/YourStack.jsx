function YourStack({ stack, onRemove, onClear }) {
  return (
    <aside className="w-full lg:sticky lg:top-24 lg:w-72 lg:self-start">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
        <p className="mt-1 text-xs text-slate-400">
          {stack.length > 0
            ? `${stack.length} Technology Selected`
            : 'No technologies selected yet.'}
        </p>

        {stack.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-3">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {tech.name}
                  </p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-sm text-[#d82c20] hover:bg-red-100"
                  aria-label={`Remove ${tech.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {stack.length > 0 && (
          <button
            onClick={onClear}
            className="mt-4 w-full rounded-lg border border-red-100 bg-red-50 py-2 text-sm font-semibold text-[#d82c20] hover:bg-red-100"
          >
            Remove All
          </button>
        )}
      </div>
    </aside>
  )
}

export default YourStack
