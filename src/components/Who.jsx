import React from 'react'

export default function Who() {
  const traits = [
    'Experienced operators who now prioritize inner clarity',
    'Founders and executives integrating presence with execution',
    'Creators and thinkers choosing depth over constant output',
    'Leaders drawn to stillness, service, and clean ambition'
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-plum tracking-tight">Who it’s for</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {traits.map((t) => (
            <div key={t} className="rounded-2xl border border-plum/15 p-6">
              <p className="font-serif text-plum/80 leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
