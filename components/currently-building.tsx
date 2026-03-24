"use client"

import { useEffect, useRef, useState } from "react"

export function CurrentlyBuilding() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

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

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const buildItems = [
    { label: "UniCircle", status: "Primary Focus", progress: 75 },
    { label: "Product Thinking", status: "Always Iterating", progress: 90 },
    { label: "Growth Systems", status: "Experimenting", progress: 60 },
  ]

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(345,80%,30%,${0.03 + scrollProgress * 0.05}) 0%, transparent 70%)`,
            transform: `translate(-50%, -50%) scale(${0.8 + scrollProgress * 0.4})`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header with reveal animation */}
        <div className="text-center mb-20">
          <p 
            className="text-[hsl(345,80%,45%)] text-sm font-medium tracking-[0.3em] uppercase mb-6 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Currently Building
          </p>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F5] leading-tight transition-all duration-700 delay-100"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            Always in
            <span className="block bg-gradient-to-r from-[hsl(345,80%,45%)] to-[hsl(345,70%,55%)] bg-clip-text text-transparent">
              motion.
            </span>
          </h2>
        </div>

        {/* Build items with progress indicators */}
        <div className="space-y-8">
          {buildItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 transition-all duration-500 hover:border-[hsl(345,80%,35%,0.4)] hover:bg-[#141414]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] group-hover:text-[hsl(345,80%,55%)] transition-colors duration-300">
                      {item.label}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-[hsl(345,80%,35%,0.15)] text-[hsl(345,80%,55%)] border border-[hsl(345,80%,35%,0.25)]">
                      {item.status}
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="relative h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[hsl(345,80%,35%)] to-[hsl(345,70%,45%)] rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${item.progress}%` : '0%',
                        transitionDelay: `${400 + index * 150}ms`,
                      }}
                    />
                    {/* Animated shimmer */}
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                      style={{
                        width: isVisible ? `${item.progress}%` : '0%',
                        animation: isVisible ? 'shimmer 2s infinite' : 'none',
                        animationDelay: `${index * 0.5}s`,
                      }}
                    />
                  </div>
                </div>
                
                <div className="text-right">
                  <span className="text-4xl font-bold text-[#F5F5F5]/20 group-hover:text-[hsl(345,80%,45%,0.3)] transition-colors duration-300">
                    {item.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative text */}
        <div 
          className="mt-20 text-center transition-all duration-700 delay-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-[#666666] text-lg font-light italic">
            "Ship fast, learn faster, iterate always."
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  )
}
