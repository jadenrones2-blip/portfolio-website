"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
  }

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient lime glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: isVisible ? 0.8 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(59, 130, 246, 0.09), transparent 50%)`,
        }}
      />
      
      {/* Top border with lime glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-lime" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-lime">Contact</h2>
          </div>
          
          <h3 
            className={`text-5xl md:text-6xl lg:text-7xl font-extralight text-[#F3F3F3] mb-12 max-w-4xl leading-[1.05] tracking-[-0.02em] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Let's build something <span className="gradient-text-lime">together</span>.
          </h3>
          
          <p 
            className={`text-lg md:text-xl text-[#A1A1AA] font-light mb-20 max-w-xl leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Currently open to product roles, collaborations, and interesting conversations about building things that matter.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <Link 
              href="mailto:jadenrones@gmail.com"
              className="group relative flex items-center gap-3"
            >
              <span className="text-xl md:text-2xl text-[#F3F3F3] font-light transition-all duration-300 group-hover:text-lime group-hover:translate-x-1">
                jadenrones@gmail.com
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#A1A1AA] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime" />
              <span className="absolute -bottom-2 left-0 h-[1px] bg-lime transition-all duration-500 w-0 group-hover:w-full" />
            </Link>
            
            <Link 
              href="https://www.linkedin.com/in/jaden-rones-34241a253/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3"
            >
              <span className="text-xl md:text-2xl text-[#A1A1AA] font-light transition-all duration-300 group-hover:text-cyan group-hover:translate-x-1">
                LinkedIn
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#A1A1AA] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan" />
              <span className="absolute -bottom-2 left-0 h-[1px] bg-cyan transition-all duration-500 w-0 group-hover:w-full" />
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <div 
          className={`mt-40 pt-8 border-t border-lime/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-[#A1A1AA]/60 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span>San Diego, CA</span>
          <span>© 2024 Jaden Rones</span>
        </div>
      </div>
    </section>
  )
}
