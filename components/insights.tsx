"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"

const articles = [
  {
    title: "Estate Lessons from The Summer I Turned Pretty",
    publication: "Trust & Will",
    url: "https://trustandwill.com/learn/estate-lessons-from-the-summer-i-turned-pretty",
    takeaway: "How pop culture shapes financial conversations",
  },
  {
    title: "Jeff Bezos' Estate Plan",
    publication: "Trust & Will",
    url: "https://trustandwill.com/learn/jeff-bezos-estate-plan",
    takeaway: "Lessons from one of the world's largest wealth transfers",
  },
  {
    title: "How Gen Z Spends Their Money",
    publication: "Trust & Will",
    url: "https://trustandwill.com/learn/how-gen-z-spends-their-money/",
    takeaway: "Consumer behavior patterns for a new generation",
  },
  {
    title: "What Gen Z Gets Right About Investing",
    publication: "Trust & Will",
    url: "https://trustandwill.com/learn/what-gen-z-gets-right-about-investing-and-wrong-about-estate-planning",
    takeaway: "Bridging the gap between investing and planning",
  },
]

export function Insights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="insights" className="py-40 px-6 md:px-12 lg:px-24 relative">
      <div className="absolute inset-0 bg-[#060C17]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <Reveal className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#A1A1AA]" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#A1A1AA]">Writing</h2>
          </div>
          <p className="text-4xl md:text-5xl font-extralight text-[#F3F3F3] max-w-2xl leading-[1.1] tracking-[-0.02em]">
            Exploring product thinking, consumer behavior, and culture.
          </p>
        </Reveal>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-1">
          {articles.map((article, index) => (
            <Reveal key={index} delay={(index + 1) * 100}>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative p-8 md:p-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card background with hover */}
                <div
                  className={`absolute inset-0 border border-[#0F1A2E] transition-all duration-500 ${hoveredIndex === index ? 'bg-[#0A1528] border-[#1A2D4A]' : 'bg-transparent'}`}
                />

                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.015) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Publication */}
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#A1A1AA]/60 mb-6">
                    {article.publication}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-2xl md:text-3xl font-light text-[#F3F3F3] leading-tight mb-4 transition-all duration-500 ${hoveredIndex === index ? 'translate-x-2' : ''}`}
                  >
                    {article.title}
                  </h3>

                  {/* Takeaway */}
                  <p className="text-sm text-[#A1A1AA]/60 font-light mb-8 flex-grow">
                    {article.takeaway}
                  </p>

                  {/* Read link */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs tracking-[0.15em] uppercase text-[#A1A1AA] transition-colors duration-300 ${hoveredIndex === index ? 'text-[#F3F3F3]' : ''}`}
                    >
                      Read
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 text-[#A1A1AA] transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-x-1 -translate-y-1 text-[#F3F3F3]' : 'opacity-0'}`}
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
