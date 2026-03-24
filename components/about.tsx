"use client"

import Image from "next/image"
import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"

export function About() {
  const [imageHovered, setImageHovered] = useState(false)

  return (
    <section id="about" className="py-40 px-6 md:px-12 lg:px-24 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0F1E35] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">
          {/* Image side */}
          <Reveal className="lg:col-span-2">
            <div
              className="relative"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <div className="relative w-full aspect-[3/4] max-w-sm overflow-hidden">
                {/* Image glow on hover */}
                <div
                  className={`absolute -inset-4 transition-opacity duration-700 ${imageHovered ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />

                <Image
                  src="/images/jaden-professional-headshot.png"
                  alt="Jaden Rones"
                  fill
                  className={`object-cover grayscale transition-all duration-700 ${imageHovered ? 'scale-105 grayscale-0' : 'scale-100'}`}
                  style={{ objectPosition: "50% 25%" }}
                />

                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-white/10" />
              </div>
            </div>
          </Reveal>

          {/* Content side */}
          <div className="lg:col-span-3 space-y-10">
            {/* Header */}
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-[#A1A1AA]" />
                <h2 className="text-xs tracking-[0.3em] uppercase text-[#A1A1AA]">About</h2>
              </div>
              <p className="text-4xl md:text-5xl font-extralight text-[#F3F3F3] leading-[1.1] tracking-[-0.02em]">
                Builder, founder, and operator focused on creating systems that actually work.
              </p>
            </Reveal>

            {/* Body text */}
            <Reveal delay={200}>
              <div className="space-y-6 text-lg text-[#A1A1AA] font-light leading-relaxed">
                <p>
                  From building UniCircle to developing products in high-pressure hackathon environments, I focus on turning ideas into shipped experiences that solve real problems.
                </p>
                <p>
                  My work sits at the intersection of product, storytelling, and execution — where strategy meets real-world impact.
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={300}>
              <div className="flex gap-16 pt-10">
                <div className="group">
                  <p className="text-4xl font-extralight text-[#F3F3F3] mb-2 transition-all duration-300 group-hover:translate-x-1">3+</p>
                  <p className="text-sm text-[#A1A1AA]/60 tracking-wide">Products Shipped</p>
                </div>
                <div className="group">
                  <p className="text-4xl font-extralight text-[#F3F3F3] mb-2 transition-all duration-300 group-hover:translate-x-1">$140k</p>
                  <p className="text-sm text-[#A1A1AA]/60 tracking-wide">Revenue Driven</p>
                </div>
                <div className="group">
                  <p className="text-4xl font-extralight text-[#F3F3F3] mb-2 transition-all duration-300 group-hover:translate-x-1">1st</p>
                  <p className="text-sm text-[#A1A1AA]/60 tracking-wide">Place Hackathon</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
