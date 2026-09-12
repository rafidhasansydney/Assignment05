import banner from '../../assets/banner-stack.png'

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 md:pt-16 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl">
            Build Your Ideal{' '}
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-500 md:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#technologies"
              className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-600 hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={banner}
            alt="Illustration of a layered technology stack"
            className="w-64 sm:w-72 lg:w-96"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
