import React from 'react'

export default function About() {
  const points = [
    {
      title: 'Outer clarity',
      body: 'Strategy and systems that create space rather than noise.'
    },
    {
      title: 'Inner work',
      body: 'Identity, emotional patterns, and the gentle discipline of presence.'
    },
    {
      title: 'Higher wisdom',
      body: 'Purpose, stillness, and spiritual awareness without dogma.'
    }
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-plum tracking-tight">About the community</h2>
            <p className="mt-4 font-serif text-plum/80 leading-relaxed">
              The Fourth Path is a quiet, private circle for mature leaders who value depth over volume. We gather to slow down, breathe, and cultivate the kind of clear seeing that makes action obvious.
            </p>
            <blockquote className="mt-6 border-l-2 border-plum/20 pl-4 font-serif italic text-plum/70">
              “Less performance. More presence.”
            </blockquote>
          </div>

          <ul className="space-y-6">
            {points.map((p) => (
              <li key={p.title} className="rounded-xl border border-plum/15 bg-white p-5 shadow-[0_2px_24px_rgba(67,23,35,0.04)] transition-colors">
                <h3 className="font-display text-plum text-xl">{p.title}</h3>
                <p className="mt-2 font-serif text-plum/75 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
