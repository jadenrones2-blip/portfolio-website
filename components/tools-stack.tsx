"use client"

import { motion } from "framer-motion"
import { Lightbulb, Zap, Workflow, Rocket, Minimize2, RefreshCw } from "lucide-react"

const principles = [
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "I focus on solving real problems, not just shipping features.",
    color: "text-lime",
    borderColor: "group-hover:border-lime/40",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "I prioritize fast iteration and real-world validation.",
    color: "text-cyan",
    borderColor: "group-hover:border-cyan/40",
  },
  {
    icon: Workflow,
    title: "Systems",
    description: "I think in workflows, not isolated features.",
    color: "text-coral",
    borderColor: "group-hover:border-coral/40",
  },
  {
    icon: Rocket,
    title: "Ownership",
    description: "I take ideas from 0 → shipped.",
    color: "text-lime",
    borderColor: "group-hover:border-lime/40",
  },
  {
    icon: Minimize2,
    title: "Simplicity",
    description: "I avoid overengineering.",
    color: "text-cyan",
    borderColor: "group-hover:border-cyan/40",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "I use the right tool for the job.",
    color: "text-coral",
    borderColor: "group-hover:border-coral/40",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function ToolsStack() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#060C17]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-lime" />
            <span className="text-xs tracking-[0.3em] uppercase text-lime">Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#F3F3F3] tracking-tight mb-4">
            How I Build
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl font-light">
            The principles that guide every product I create.
          </p>
        </div>

        {/* Principles grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative p-8 rounded-lg bg-[#0A1628] border border-[#1a2a44] transition-all duration-500 hover:bg-[#0D1A2E] ${principle.borderColor}`}
              >
                <div className={`mb-5 ${principle.color}`}>
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-light text-[#F3F3F3] mb-3 tracking-wide">
                  {principle.title}
                </h3>
                <p className="text-[#A1A1AA]/80 text-sm font-light leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
