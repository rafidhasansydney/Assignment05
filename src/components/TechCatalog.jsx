import { useEffect, useState } from 'react'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'

function TechCatalog({ stack, onAdd, onRemove, onClear }) {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="technologies" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      <div className="text-center">
        <h2 className="font-heading text-2xl font-extrabold text-slate-900 md:text-4xl">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-3 text-sm text-slate-500 md:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center gap-3 py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-800"></div>
          <p className="text-sm text-slate-500">Loading technologies...</p>
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-8 lg:flex-row">
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={() => onAdd(tech)}
              />
            ))}
          </div>
          <YourStack stack={stack} onRemove={onRemove} onClear={onClear} />
        </div>
      )}
    </section>
  )
}

export default TechCatalog
