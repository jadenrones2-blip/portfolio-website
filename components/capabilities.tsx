"use client"

import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"

const capabilities = [
  {
    number: "01",
    title: "Product Strategy",
    description: "Turning messy ideas into structured, buildable systems with clear roadmaps and measurable outcomes.",
  },
  {
    number: "02",
    title: "Founder Execution",
    description: "Taking projects from concept to shipped product — moving fast without breaking things.",
  },
  {
    number: "03",
    title: "Growth & Positioning",
    description: "Crafting messaging that drives engagement and traction across channels and audiences.",
  },
  {
    number: "04",
    title: "Cross-Functional Building",
    description: "Working across product, design, and technical systems to deliver complete solutions.",
  },
]

export function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="capabilities" className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060C17] via-[#09101F] to-[#060C17]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <Reveal className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#A1A1AA]" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#A1A1AA]">Capabilities</h2>
          </div>
          <p className="text-4xl md:text-5xl font-extralight text-[#F3F3F3] max-w-2xl leading-[1.1] tracking-[-0.02em]">
            The skillset behind every product and venture.
          </p>
        </Reveal>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {capabilities.map((capability, index) => (
            <Reveal key={index} delay={(index + 1) * 100}>
              <div
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover glow */}
                <div
                  className={`absolute -inset-6 rounded-2xl transition-all duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
                  }}
                />

                <div className="relative">
                  {/* Number */}
                  <span
                    className={`text-xs text-[#A1A1AA]/40 tracking-[0.2em] mb-4 block transition-colors duration-300 ${hoveredIndex === index ? 'text-[#A1A1AA]/70' : ''}`}
                  >
                    {capability.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-light text-[#F3F3F3] mb-4 transition-all duration-500 ${hoveredIndex === index ? 'translate-x-2' : ''}`}
                  >
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A1A1AA]/60 font-light leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Animated line */}
                  <div
                    className={`mt-8 h-[1px] bg-gradient-to-r from-[#A1A1AA]/30 to-transparent transition-all duration-700 origin-left ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
