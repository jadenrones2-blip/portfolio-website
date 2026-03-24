"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Detect active section
      const sections = ["projects", "trust-will", "about", "insights", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "projects", label: "Ventures" },
    { href: "trust-will", label: "Product Work" },
    { href: "about", label: "About" },
    { href: "insights", label: "Writing" },
    { href: "contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#060C17]/90 backdrop-blur-md border-b border-lime/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative text-[#F3F3F3] text-sm tracking-[0.1em] font-light"
          >
            <span className="relative z-10">Jaden Rones</span>
            <span className="absolute -bottom-1 left-0 h-[1px] bg-lime transition-all duration-500 w-0 group-hover:w-full" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative py-2"
              >
                <span 
                  className={`text-sm tracking-[0.1em] transition-colors duration-300 ${
                    activeSection === item.href 
                      ? 'text-lime' 
                      : 'text-[#A1A1AA] hover:text-[#F3F3F3]'
                  }`}
                >
                  {item.label}
                </span>
                
                {/* Animated underline with lime color */}
                <span 
                  className={`absolute -bottom-0 left-0 h-[1px] bg-lime transition-all duration-500 ${
                    activeSection === item.href || hoveredItem === item.href 
                      ? 'w-full' 
                      : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#F3F3F3]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'}`}>
              <Menu className="w-5 h-5" />
            </span>
            <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}>
              <X className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-6 border-t border-lime/15">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                className={`text-left py-4 text-2xl font-light tracking-[-0.01em] transition-all duration-500 ${
                  activeSection === item.href ? 'text-lime' : 'text-[#A1A1AA]'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                }}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
