import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-plum/20 to-transparent mb-8"/>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-serif text-plum/60">Contact: hello@fourthpath.org</p>
          <nav className="flex items-center gap-6 text-sm">
            <a className="text-plum/60 hover:text-plum transition-colors" href="#about">About</a>
            <a className="text-plum/60 hover:text-plum transition-colors" href="#signup">Join</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-plum/40">© {new Date().getFullYear()} The Fourth Path</p>
      </div>
    </footer>
  )
}
