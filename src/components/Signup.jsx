import React, { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      // For now, just simulate a successful submission
      await new Promise(r => setTimeout(r, 800))
      setStatus('success')
      setEmail('')
      setNote('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="signup" className="relative bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plum/20 to-transparent"/>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-plum tracking-tight">Request an invitation</h2>
        <p className="mt-3 font-serif text-plum/75">Share your email and a short note. We’ll reach out privately to the right people for the first circle.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm text-plum/70 mb-1">Email</label>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
                   className="w-full rounded-xl border border-plum/20 bg-white px-4 py-3 text-plum placeholder-plum/40 focus:outline-none focus:ring-2 focus:ring-plum/30" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="block text-sm text-plum/70 mb-1">Optional note</label>
            <textarea value={note} onChange={(e)=>setNote(e.target.value)} rows={4}
                      className="w-full rounded-xl border border-plum/20 bg-white px-4 py-3 text-plum placeholder-plum/40 focus:outline-none focus:ring-2 focus:ring-plum/30" placeholder="A few words about your path"/>
          </div>

          <button disabled={status==='loading'}
                  className="group relative inline-flex items-center justify-center rounded-full border border-plum/20 bg-plum text-white px-6 py-3 text-sm tracking-wide transition-all hover:bg-[#3a1320] focus:outline-none focus-visible:ring-2 focus-visible:ring-plum/30 disabled:opacity-60">
            <span className="relative z-10">Request invite</span>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 scale-0 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"></span>
            </span>
          </button>

          {status==='success' && (
            <p className="text-sm font-serif text-emerald-700">Thank you. We’ll be in touch soon.</p>
          )}
          {status==='error' && (
            <p className="text-sm font-serif text-red-700">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
