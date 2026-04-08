import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import TextCursorProximity from '@/components/ui/text-cursor-proximity'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Re-initialize Unicorn Studio if the script is loaded
    if (typeof window !== 'undefined' && (window as any).UnicornStudio) {
      setTimeout(() => {
        (window as any).UnicornStudio.init()
      }, 500)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center bg-background overflow-hidden">
      {/* Unicorn Studio Background Native */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden select-none z-0 pointer-events-auto">
        <div data-us-project="6y3DM6TrbTdWT1S560xJ" style={{ width: '100%', height: '100%' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-start mt-20 pointer-events-none">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pointer-events-auto w-full h-full"
        >
          <p className="text-foreground/80 font-bold tracking-widest text-sm uppercase mb-4 drop-shadow-sm">Hello, my name is</p>
          <h1 className="font-display font-bold leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-[8rem] lg:text-[10rem] text-foreground drop-shadow-xl flex flex-col">
            <TextCursorProximity
              label="DEEPAK"
              className="block will-change-transform font-bold"
              styles={{
                transform: {
                  from: "scale(1)",
                  to: "scale(1.2)",
                }
              }}
              falloff="gaussian"
              radius={200}
              containerRef={containerRef}
            />
            <TextCursorProximity
              label="DASS"
              className="block will-change-transform font-bold"
              styles={{
                transform: {
                  from: "scale(1)",
                  to: "scale(1.2)",
                }
              }}
              falloff="gaussian"
              radius={200}
              containerRef={containerRef}
            />
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 md:mt-8 text-lg sm:text-xl lg:text-2xl text-foreground font-medium max-w-xl leading-relaxed drop-shadow-md"
          >
            I'm a Full Stack Developer building scalable, performance-driven web applications and AI-powered platforms.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
