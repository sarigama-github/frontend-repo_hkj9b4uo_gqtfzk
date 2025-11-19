import React from 'react'

export default function Expect() {
  const items = [
    {
      title: 'The space',
      body: 'Quiet, intentional gatherings with generous pauses and clear edges. No noise, no social theater.'
    },
    {
      title: 'Practices',
      body: 'Breath, reflection, and simple frameworks that help you see what is essential.'
    },
    {
      title: 'Conversation',
      body: 'Calm, honest dialogue. We honor privacy, nuance, and the courage to tell the truth.'
    }
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-plum tracking-tight">What to expect</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-plum/15 p-6 bg-gradient-to-br from-white to-plum/[0.02]">
              <h3 className="font-display text-plum text-xl">{it.title}</h3>
              <p className="mt-2 font-serif text-plum/80 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
