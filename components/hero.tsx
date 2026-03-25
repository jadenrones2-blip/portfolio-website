"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const charVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 4 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Blue ambient glow - follows cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: mounted ? 0.8 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(59, 130, 246, 0.12), transparent 50%)`,
        }}
      />

      {/* Secondary sky blue glow - offset */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: mounted ? 0.5 : 0,
          background: `radial-gradient(500px circle at ${(1 - mousePos.x) * 100}% ${(1 - mousePos.y) * 100}%, rgba(147, 197, 253, 0.06), transparent 50%)`,
        }}
      />

      {/* Static ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse-color"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Decorative floating orb - top right */}
      <div
        className="absolute top-[10%] right-[8%] w-[320px] h-[320px] rounded-full pointer-events-none animate-orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Decorative floating orb - bottom left */}
      <div
        className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] rounded-full pointer-events-none animate-orb-drift"
        style={{
          animationDelay: '-6s',
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.09) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 75%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Cinematic scanning line */}
      <div
        className="absolute left-0 right-0 h-[1px] pointer-events-none animate-horizon-scan"
        style={{
          top: '40%',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2) 30%, rgba(147, 197, 253, 0.15) 50%, rgba(59, 130, 246, 0.2) 70%, transparent)',
          opacity: 0.6,
        }}
      />

      {/* Main content with Framer Motion parallax */}
      <motion.div
        style={{ y: parallaxY, opacity: fadeOut }}
        className="w-full relative z-10 max-w-4xl"
      >
      <div>
        {/* Overline with blue accent */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="w-8 h-[1px] bg-lime" />
          <span className="text-xs tracking-[0.3em] uppercase text-lime">Founder & Builder</span>
        </div>

        {/* Name — character-by-character fade reveal */}
        <h1 className="mb-10">
          {/* "Jaden" — per-character stagger */}
          <div className="block text-[clamp(3.5rem,14vw,10rem)] font-extralight tracking-[-0.04em] leading-[0.85] text-[#F3F3F3]">
            {"Jaden".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* "Rones" — whole word fade-in after Jaden completes */}
          <motion.span
            className="block text-[clamp(3.5rem,14vw,10rem)] font-extralight tracking-[-0.04em] leading-[0.85] gradient-text-lime"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={mounted ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.7, delay: 0.3 + 5 * 0.04, ease: [0.16, 1, 0.3, 1] }}
          >
            Rones
          </motion.span>
        </h1>

        {/* Tagline with line animation */}
        <div
          className={`flex items-start gap-6 mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <span
            className={`w-16 h-[1px] bg-lime mt-4 origin-left ${mounted ? 'animate-line-expand' : 'scale-x-0'}`}
            style={{ animationDelay: '0.7s' }}
          />
          <p className="text-xl md:text-2xl font-light text-[#A1A1AA] max-w-lg leading-relaxed">
            Building products that connect <span className="text-lime">people</span>, <span className="text-cyan">systems</span>, and <span className="text-coral">opportunities</span>.
          </p>
        </div>

        {/* Brief intro */}
        <p
          className={`text-[#A1A1AA]/80 text-base md:text-lg font-light max-w-xl mb-20 leading-relaxed transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.65s' }}
        >
          Founder of <span className="text-cyan">UniCircle</span>. Incoming PM Intern at <span className="text-coral">LPL Financial</span>.
          Hackathon-winning builder across SaaS, AI, and growth.
        </p>

        {/* CTAs */}
        <div
          className={`flex items-center gap-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.8s' }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative text-[#0A0A0A] bg-lime text-sm tracking-[0.15em] uppercase px-6 py-3 rounded-full hover:bg-[#F3F3F3] transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3 font-medium">
              View Work
              <span className="w-6 h-[1px] bg-[#0A0A0A] transition-all duration-500 group-hover:w-10" />
            </span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-[#A1A1AA] text-sm tracking-[0.15em] uppercase hover:text-lime transition-colors duration-500"
          >
            Get in Touch
          </button>
        </div>
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: fadeOut }}
        className={`absolute bottom-16 left-6 md:left-12 lg:left-24 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={() => scrollToSection("projects")}
          className="group flex flex-col items-center gap-4 text-[#A1A1AA] hover:text-lime transition-colors duration-500"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-float" />
        </button>
      </motion.div>

      {/* Decorative corner elements */}
      <div
        className={`absolute top-8 right-8 w-16 h-16 border-t border-r border-lime/30 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ transitionDelay: '1.2s' }}
      />
      <div
        className={`absolute bottom-8 left-8 w-16 h-16 border-b border-l border-cyan/30 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ transitionDelay: '1.2s' }}
      />
    </section>
  )
}
