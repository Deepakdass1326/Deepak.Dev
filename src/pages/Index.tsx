import { useState, useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { CursorFollower } from '@/components/ui/cursor-follower'
import VaporizeTextCycle, { Tag } from '@/components/ui/vapour-text-effect'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Index() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide loader after exactly one cycle
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex w-full h-screen justify-center items-center bg-background z-[100] fixed top-0 left-0">
        <div style={{ width: '80%', height: '200px' }} className="flex justify-center items-center">
          <VaporizeTextCycle
            texts={["DEEPAK.DEV"]}
            font={{
              fontFamily: "Inter, sans-serif",
              fontSize: "60px",
              fontWeight: 700
            }}
            color="rgb(255, 255, 255)"
            spread={4}
            density={5}
            animation={{
              vaporizeDuration: 1.0,
              fadeInDuration: 0.5,
              waitDuration: 0.5
            }}
            direction="left-to-right"
            alignment="center"
            tag={Tag.H1}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 animate-in fade-in duration-1000">
      <CursorFollower />
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

