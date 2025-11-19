import React, { useEffect } from 'react'

// Inject CSS variables and animation helpers for the luxury palette and typography
export default function GlobalStyle(){
  useEffect(()=>{
    const style = document.createElement('style')
    style.innerHTML = `
      :root{ --plum:#431723; }
      .text-plum{ color: var(--plum); }
      .bg-plum{ background-color: var(--plum); }
      .border-plum\/15{ border-color: rgba(67,23,35,0.15); }
      .border-plum\/20{ border-color: rgba(67,23,35,0.20); }
      .text-plum\/40{ color: rgba(67,23,35,0.40); }
      .text-plum\/60{ color: rgba(67,23,35,0.60); }
      .text-plum\/70{ color: rgba(67,23,35,0.70); }
      .text-plum\/75{ color: rgba(67,23,35,0.75); }
      .text-plum\/80{ color: rgba(67,23,35,0.80); }
      .via-plum\/20{ --tw-gradient-to: rgba(67,23,35,0); --tw-gradient-stops: var(--tw-gradient-from), rgba(67,23,35,0.20), var(--tw-gradient-to); }
      .font-display{ font-family: 'Raleway', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; font-weight: 600; letter-spacing: -0.01em; }
      .font-serif{ font-family: 'Lora', Georgia, 'Times New Roman', serif; }
      @media (prefers-reduced-motion: no-preference){
        .fade-section{ opacity:0; transform: translateY(6px); transition: opacity .8s ease, transform .8s ease; }
        .fade-section.is-visible{ opacity:1; transform:none; }
      }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  },[])
  
  useEffect(()=>{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('is-visible') }
      })
    },{ threshold: 0.15 })
    document.querySelectorAll('.fade-section').forEach(el=>io.observe(el))
    return ()=> io.disconnect()
  },[])

  return null
}
