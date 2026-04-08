import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'C++']
  },
  {
    title: 'Frontend',
    skills: ['React.js (v18/19)', 'Redux Toolkit', 'Tailwind CSS v4', 'Framer Motion', 'Vite', 'SCSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'JWT', 'BullMQ', 'Redis']
  },
  {
    title: 'AI & LLM',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Embeddings', 'Vector Databases', 'Prompt Engineering']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Mongoose', 'Redis (Upstash)', 'Firebase', 'MySQL']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Vercel / Render', 'Netlify', 'CI/CD']
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-text-muted-custom tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-border mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20 text-text-heading"
        >
          TECHNICAL
          <br />
          SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xs font-semibold text-text-heading border-b border-border pb-4 mb-4 uppercase tracking-widest">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-base text-text-body font-light">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
