"use client"

import React, { useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Reveal } from "@/components/ui/reveal"

const categories = [
  {
    name: "Product",
    tools: ["Figma", "User flows", "Wireframing", "Product strategy"],
    offset: "ml-0",
    color: "lime",
  },
  {
    name: "Development",
    tools: ["Supabase", "APIs", "SQL", "Backend systems"],
    offset: "ml-8 md:ml-16",
    color: "cyan",
  },
  {
    name: "AI & Automation",
    tools: ["OpenAI", "Claude", "Prompt engineering", "AI workflows"],
    offset: "ml-4 md:ml-8",
    color: "coral",
  },
  {
    name: "Tools & Systems",
    tools: ["Notion", "v0", "Lovable", "Cursor", "Apify"],
    offset: "ml-12 md:ml-24",
    color: "purple",
  },
  {
    name: "Infrastructure",
    tools: ["AWS"],
    offset: "ml-2 md:ml-4",
    color: "lime",
  },
]

const colorStyles = {
  lime: { text: "text-lime", bg: "rgba(59, 130, 246, 0.12)", border: "border-lime/30" },
  cyan: { text: "text-cyan", bg: "rgba(147, 197, 253, 0.12)", border: "border-cyan/30" },
  coral: { text: "text-coral", bg: "rgba(129, 140, 248, 0.12)", border: "border-coral/30" },
  purple: { text: "text-purple", bg: "rgba(167, 139, 250, 0.12)", border: "border-purple/30" },
}

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const toolsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const toolVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

function CategoryRow({
  category,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  category: typeof categories[0]
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const colors = colorStyles[category.color as keyof typeof colorStyles]
  const magnetX = useMotionValue(0)
  const springX = useSpring(magnetX, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left - rect.width / 2) / rect.width
    magnetX.set(relX * 6)
  }

  const handleMouseLeave = () => {
    magnetX.set(0)
    onMouseLeave()
  }

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Category name with magnetic nudge */}
      <motion.span
        style={{ x: springX }}
        className={`text-xs uppercase tracking-[0.2em] block mb-6 transition-colors duration-300 ${isHovered ? colors.text : 'text-[#4A4A4A]'}`}
      >
        {category.name}
      </motion.span>

      {/* Tools */}
      <motion.div
        className="flex flex-wrap items-baseline gap-x-6 gap-y-4"
        variants={toolsVariants}
      >
        {category.tools.map((tool, toolIndex) => {
          const yOffset = toolIndex % 3 === 0 ? "translate-y-0" :
                         toolIndex % 3 === 1 ? "-translate-y-1" : "translate-y-1"

          return (
            <motion.span
              key={tool}
              variants={toolVariants}
              className={`text-sm ${yOffset} font-light relative group cursor-default transition-colors duration-500 ${isHovered ? colors.text : 'text-[#EDEDED]'}`}
            >
              {tool}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300 w-0 group-hover:w-full"
                style={{ backgroundColor: isHovered ? `hsl(var(--accent-${category.color}))` : '#333' }}
              />
            </motion.span>
          )
        })}
      </motion.div>

      {/* Decorative left border */}
      <div
        className="absolute -left-8 top-0 w-px h-full"
        style={{
          backgroundImage: isHovered
            ? `linear-gradient(to bottom, ${colors.bg}, transparent)`
            : 'linear-gradient(to bottom, #1A1A1A, transparent)',
          transition: 'background-image 0.5s ease',
        }}
      />
    </div>
  )
}

export function Stack() {
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null)

  return (
    <section
      id="stack"
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <Reveal className="mb-14 md:ml-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-lime" />
            <span className="text-xs tracking-[0.3em] uppercase text-lime">Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#EDEDED] tracking-tight mb-4">
            Tools I build with
          </h2>
          <p className="text-[#9CA3AF] text-lg font-light max-w-md">
            Design, development, and shipping.
          </p>
        </Reveal>

        {/* Floating categories with Framer Motion stagger */}
        <motion.div
          className="space-y-0"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
            >
              {/* Divider between categories */}
              {categoryIndex > 0 && (
                <div
                  className="h-[1px] my-10 md:my-12"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent)',
                  }}
                />
              )}

              <div className={category.offset}>
                <CategoryRow
                  category={category}
                  isHovered={hoveredCategory === category.name}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
