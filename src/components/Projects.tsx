import { motion } from 'framer-motion'
import { ProjectShowcase } from '@/components/ui/project-showcase'

const projects = [
  {
    title: 'Memora',
    type: 'AI-Powered Knowledge Management System',
    description: 'Engineered a multi-LLM routing engine using Gemini 2.5 Flash, Cohere, and Mistral dispatched via asynchronous BullMQ and Redis queues. Constructed a Knowledge Graph with an Omni-Search querying sources concurrently in under 50ms.',
    tech: ['React 18', 'Node.js', 'MongoDB', 'BullMQ', 'Redis', 'Gemini', 'Cohere'],
    link: 'https://memora-three-iota.vercel.app',
    github: 'https://github.com/Deepakdass1326/Memora'
  },
  {
    title: 'AI Interview Prep',
    type: 'Interview Platform',
    description: 'Developed an end-to-end AI interview prep platform generating role-specific Q&A sets via LLaMA 3.3-70B through the Groq SDK, with session persistence and a Concept Deep Dive.',
    tech: ['React 19', 'Tailwind v4', 'Node.js', 'Express 5', 'MongoDB', 'Groq SDK', 'LLaMA 3.3'],
    link: 'https://ai-interview-preparation-1-e47v.onrender.com',
    github: 'https://github.com/Deepakdass1326/Ai-Interview-Preparation'
  },
  {
    title: 'DEALMIND AI',
    type: 'Real-Time Negotiation Simulator',
    description: 'Built a Gemini-powered negotiation simulation game featuring three distinct AI seller personalities. Designed five negotiation tactics backed by prompt engineering strategy.',
    tech: ['React 19', 'Tailwind v4', 'Framer Motion', 'Redux Toolkit', 'Node.js', 'Google Gemini'],
    link: 'https://dealmind-eosin.vercel.app',
    github: 'https://github.com/Deepakdass1326/-DEALMIND'
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-text-muted-custom tracking-widest uppercase">Featured Work</span>
          <div className="w-6 h-px bg-border mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24 text-text-heading"
        >
          PROJECTS
        </motion.h2>

        <ProjectShowcase />
      </div>
    </section>
  )
}
