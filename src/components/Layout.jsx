import React from 'react'
import GlobalStyle from './GlobalStyle'

export default function Layout({children}){
  return (
    <div className="bg-white">
      <GlobalStyle/>
      <div className="fade-section">{children}</div>
    </div>
  )
}
