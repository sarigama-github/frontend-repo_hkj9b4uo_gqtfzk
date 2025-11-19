import React from 'react'

const PlumLogo = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="p" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#431723"/>
        <stop offset="1" stopColor="#431723" stopOpacity="0.65"/>
      </linearGradient>
    </defs>
    <circle cx="28" cy="28" r="27" stroke="url(#p)" strokeWidth="2"/>
    <path d="M28 10c6 6 6 12 0 18s-6 12 0 18" stroke="#431723" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 20c4 3 8 3 12 0" stroke="#431723" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 30c4 3 8 3 12 0" stroke="#431723" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative overflow-hidden fade-section" id="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Gentle radial glow */}
        <div className="absolute -top-32 -left-24 w-[38rem] h-[38rem] rounded-full opacity-[0.06]" style={{background:"radial-gradient(closest-side,#431723,transparent)"}}/>
        <div className="absolute -bottom-40 -right-24 w-[40rem] h-[40rem] rounded-full opacity-[0.06]" style={{background:"radial-gradient(closest-side,#431723,transparent)"}}/>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="flex items-start gap-4 mb-10">
          <div className="shrink-0"><PlumLogo/></div>
          <div className="pt-1">
            <h1 className="font-display text-[42px] leading-[1.1] tracking-tight text-plum sm:text-6xl">The Fourth Path</h1>
            <p className="mt-3 text-plum/70 font-serif text-xl">A quiet space for conscious leaders</p>
          </div>
        </div>

        <p className="max-w-3xl font-serif text-[18px] leading-relaxed text-plum/80">
          I’m starting a small community called The Fourth Path — for leaders who want to move from high performance to high consciousness.
          This is not a coaching program. Not a course. Not a motivational group.
          It’s a quiet space for reflection, breath, inner clarity, and the kind of conversations most leaders never get to have.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <a href="#signup" className="group relative inline-flex items-center justify-center rounded-full border border-plum/20 bg-plum text-white px-6 py-3 text-sm tracking-wide transition-colors hover:bg-[#3a1320] focus:outline-none focus-visible:ring-2 focus-visible:ring-plum/30">
            <span className="relative z-10">Join the founding circle</span>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 scale-0 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"></span>
            </span>
          </a>
          <span className="text-plum/60 text-sm">Limited, by invitation</span>
        </div>
      </div>

      {/* abstract divider */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-plum/20 to-transparent"/>
      </div>
    </section>
  )
}
