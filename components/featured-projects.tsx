"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const projects = [
  {
    title: "UniCircle",
    category: "SaaS Platform",
    description: "AI-powered club recruitment: bulk applicant screening via Claude API, drag-and-drop pipeline, custom form builder, and club discovery. Built solo as founder.",
    role: "Founder",
    link: "/unicircle",
    year: "2024",
    color: "lime",
  },
  {
    title: "LPL Heritage Hub",
    category: "1st Place - LPL Financial Hackathon",
    description: "Dual-agent AI system built in 24 hours for generational wealth transfer. One agent identifies NIGO compliance issues, another translates financial documents into plain-language summaries.",
    role: "Builder",
    link: "https://github.com/jadenrones2-blip/Finalized_LPL_HeritageHub",
    year: "2026",
    color: "coral",
  },
  {
    title: "Valyrian Designs",
    category: "E-commerce",
    description: "Scaled a premium outdoor design brand through digital strategy. Drove $140k in sales in 90 days through Etsy optimization and personalized outreach.",
    role: "Co-Founder",
    link: "https://www.etsy.com/shop/Valyrianoutdoors",
    year: "2023",
    color: "cyan",
  },
]

const colorClasses = {
  lime: {
    text: "text-lime",
    bg: "rgba(59, 130, 246, 0.08)",
    glow: "rgba(59, 130, 246, 0.18)",
    gradient: "from-lime/30",
  },
  coral: {
    text: "text-coral",
    bg: "rgba(129, 140, 248, 0.08)",
    glow: "rgba(129, 140, 248, 0.18)",
    gradient: "from-coral/30",
  },
  cyan: {
    text: "text-cyan",
    bg: "rgba(147, 197, 253, 0.08)",
    glow: "rgba(147, 197, 253, 0.18)",
    gradient: "from-cyan/30",
  },
}

export function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-40 px-6 md:px-12 lg:px-24 relative">
      {/* Background glow for section */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div 
          className={`mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-lime" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-lime">Selected Work</h2>
          </div>
          <p className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#F3F3F3] max-w-3xl leading-[1.1] tracking-[-0.02em]">
            Products and ventures built from the ground up.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-1">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses]
            return (
              <Link
                key={index}
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group block relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover background glow */}
                <div 
                  className={`absolute inset-0 -mx-8 rounded-2xl transition-all duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    background: `linear-gradient(90deg, ${colors.bg}, transparent)`,
                    boxShadow: hoveredIndex === index ? `0 0 60px ${colors.glow}` : 'none',
                  }}
                />

                <div className={`relative py-12 md:py-16 border-t border-[#0F1E35] ${index === projects.length - 1 ? 'border-b' : ''}`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    {/* Left side */}
                    <div className="flex-1">
                      {/* Number with color */}
                      <span className={`text-xs tracking-[0.2em] mb-4 block transition-colors duration-300 ${hoveredIndex === index ? colors.text : 'text-[#A1A1AA]/50'}`}>
                        0{index + 1}
                      </span>
                      
                      {/* Title with arrow */}
                      <div className="flex items-baseline gap-6 mb-6">
                        <h3 
                          className={`text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] transition-all duration-700 ${hoveredIndex === index ? `${colors.text} translate-x-3` : 'text-[#F3F3F3]'}`}
                        >
                          {project.title}
                        </h3>
                        <ArrowUpRight 
                          className={`w-7 h-7 flex-shrink-0 transition-all duration-500 ${hoveredIndex === index ? `opacity-100 translate-x-2 -translate-y-2 ${colors.text}` : 'opacity-0 text-[#A1A1AA]'}`} 
                        />
                      </div>
                      
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-[#A1A1AA]/70">
                        <span className={`transition-colors duration-300 ${hoveredIndex === index ? colors.text : ''}`}>
                          {project.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#A1A1AA]/50" />
                        <span>{project.role}</span>
                        <span className="w-1 h-1 rounded-full bg-[#A1A1AA]/50" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Right side - Description */}
                    <div className="lg:max-w-md lg:pt-8">
                      <p 
                        className={`text-[#A1A1AA] font-light leading-relaxed transition-all duration-500 ${hoveredIndex === index ? 'text-[#A1A1AA]' : 'text-[#A1A1AA]/60'}`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated underline with project color */}
                  <div 
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${colors.gradient} to-transparent transition-all duration-700 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
