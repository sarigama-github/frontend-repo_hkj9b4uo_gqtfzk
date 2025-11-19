import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Who from './components/Who'
import Expect from './components/Expect'
import Signup from './components/Signup'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Hero />
      <main className="fade-section">
        <About />
        <Who />
        <Expect />
        <Signup />
      </main>
      <div className="fade-section">
        <Footer />
      </div>
    </Layout>
  )
}

export default App
