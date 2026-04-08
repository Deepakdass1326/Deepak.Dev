import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-text-muted-custom tracking-widest uppercase">Academic</span>
          <div className="w-6 h-px bg-border mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24 text-text-heading"
        >
          EDUCATION &<br />CERTIFICATIONS
        </motion.h2>

        <div className="space-y-16 lg:space-y-24">
          {/* MCA Entry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <div className="w-full h-full min-h-[200px] border border-border/50 rounded-2xl bg-secondary/5 p-8 flex items-center justify-center">
                <h3 className="text-2xl font-mono text-primary text-center">CHANDIGARH UNIVERSITY</h3>
              </div>
              <p className="mt-4 text-xs text-text-muted-custom tracking-widest uppercase">MOHALI / INDIA</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="flex items-center">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-text-heading mb-4">Master of Computer Applications (MCA) — AI/ML</h3>
                <p className="text-text-body leading-relaxed mb-4 text-sm lg:text-base">Specializing in Advanced Machine Learning, Artificial Intelligence, and Deep Learning architectures.</p>
                <p className="text-sm text-text-muted-custom">MOHALI / INDIA</p>
              </div>
            </motion.div>
          </div>

          {/* BCA Entry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp} className="lg:order-2">
              <div className="w-full h-full min-h-[200px] border border-border/50 rounded-2xl bg-secondary/5 p-8 flex items-center justify-center">
                <h3 className="text-2xl font-mono text-primary text-center">CHANDIGARH UNIVERSITY</h3>
              </div>
              <p className="mt-4 text-xs text-text-muted-custom tracking-widest uppercase">MOHALI / INDIA</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="flex items-center lg:order-1">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-text-heading mb-4">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-text-body leading-relaxed mb-4 text-sm lg:text-base">Comprehensive study of computer science fundamentals, programming languages, and software development methodologies.</p>
                <p className="text-sm text-text-muted-custom">Aug 2022 — May 2025</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp} className="flex items-center lg:order-2">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-text-heading mb-4">Professional Certifications</h3>
                <ul className="text-text-body leading-relaxed mb-4 text-sm lg:text-base space-y-2 list-disc list-inside">

                  <li>MERN Stack Developer with GenAI (sheryians coding school)</li>
                  <li>Certified ReactJS Developer (Infosys Springboard)</li>
                  <li>Git and GitHub (Coursera)</li>
                </ul>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="lg:order-1">
              <div className="w-full h-full min-h-[200px] border border-border/50 rounded-2xl bg-secondary/5 p-8 flex flex-col items-center justify-center space-y-4">
                <span className="text-text-muted-custom font-mono text-center uppercase tracking-wide">Sheryians Coding School</span>
                <span className="text-text-muted-custom font-mono text-center uppercase tracking-wide">Infosys Springboard</span>
                <span className="text-text-muted-custom font-mono text-center uppercase tracking-wide">Coursera</span>
              </div>
              <p className="mt-4 text-xs text-text-muted-custom tracking-widest uppercase">CONTINUOUS LEARNING</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
