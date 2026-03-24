"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"

const projects = [
  {
    title: "GTM Strategy",
    description: "Spearheaded comprehensive go-to-market strategy for the Young Adult Plan targeting 18-26 year olds, including persona development, competitive analysis, and campaign framework.",
    link: "https://www.canva.com/design/DAGwWrOkVjw/wnBWFDlxfvC8XgYsDHXKjw/view",
    tags: ["Product Marketing", "Market Research", "Positioning"],
  },
  {
    title: "Advisor Platform Feature Launch",
    description: "Developed GTM strategy for AI chatbot and Doc Extraction features. Led webinar driving 181 registrations, 42 qualified leads, and 73% upgrade interest.",
    link: "https://docs.google.com/presentation/d/1JzuGKWoa7KQbo3gLVDjY7hNM_byVFis6/edit?slide=id.g3740a2a2162_0_213",
    tags: ["Product Launch", "Sales Enablement", "Webinar"],
  },
  {
    title: "Creative Campaign Strategy",
    description: "Developed messaging framework and segment-specific creative executions for three distinct audience segments, ensuring consistent product positioning.",
    link: "https://www.canva.com/design/DAGyL8tYRCY/iSDWtQdjcwaQf5ZLRh4WAw/view",
    tags: ["Messaging Strategy", "Audience Segmentation"],
  },
  {
    title: "Campaign Strategy",
    description: "Owned complete product marketing strategy for young professionals 22-26, defining value propositions and targeted messaging architecture.",
    link: "https://www.figma.com/deck/ei8a9W7lRIeS8IVKLVKxtN/Young-Professional-Campaign-Strategy?node-id=0-20&t=UBDwBAbC2BHNOuhO-1",
    tags: ["Product Marketing", "Segmentation", "Value Proposition"],
  },
  {
    title: "Young Adult Plan Email Flows",
    description: "Created three comprehensive email flows in Iterable for different user touchpoints: not finished/not paid, finished/not paid, and paid/finished with educational content.",
    link: "https://www.figma.com/board/2JvHqBpO1d8p8ib6mlzMQj/Young-Adult-Plan-Full-flow?t=rtBvc03YEEaJdNkm-1",
    tags: ["Email Marketing", "Lifecycle", "Iterable"],
  },
  {
    title: "Partnerships Flow Audit",
    description: "Led comprehensive audit of partnership email flows, identifying conversion bottlenecks and providing strategic UX recommendations.",
    link: "#",
    tags: ["Lifecycle Marketing", "Conversion Optimization"],
  },
  {
    title: "Educational Content Strategy",
    description: "Designed comprehensive educational content strategy transforming complex estate planning into accessible, user-centered experiences.",
    link: "#",
    tags: ["Content Strategy", "User Education"],
  },
]

export function TrustWillWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="trust-will" className="py-40 px-6 md:px-12 lg:px-24 relative">
      <div className="absolute inset-0 bg-[#060C17]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#A1A1AA]" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#A1A1AA]">Trust & Will</h2>
          </div>
          <p className="text-3xl md:text-4xl font-extralight text-[#F3F3F3] max-w-3xl leading-[1.2] tracking-[-0.02em] mb-4">
            Product marketing work at an Inc. 5000 fintech company
          </p>
          <p className="text-[#A1A1AA] font-light max-w-2xl">
            Helping younger users navigate estate planning by turning legal complexity into clarity through messaging strategy, onboarding, and educational content.
          </p>
        </Reveal>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project, index) => {
            const cardInner = (
              <>
                {/* Card background */}
                <div
                  className={`absolute inset-0 border border-[#0D1A2E] transition-all duration-500 ${hoveredIndex === index ? 'bg-[#09101F] border-[#152540]' : 'bg-transparent'}`}
                />
                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.015) 0%, transparent 70%)' }}
                />
                <div className="relative z-10 h-full flex flex-col min-h-[200px]">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-xl font-light text-[#F3F3F3] leading-tight transition-all duration-500 ${hoveredIndex === index ? 'translate-x-1' : ''}`}
                    >
                      {project.title}
                    </h3>
                    {project.link !== "#" && (
                      <ArrowUpRight
                        className={`w-4 h-4 text-[#A1A1AA] flex-shrink-0 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-x-1 -translate-y-1' : 'opacity-0'}`}
                      />
                    )}
                  </div>
                  <p className="text-sm text-[#A1A1AA]/60 font-light leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] tracking-[0.1em] uppercase text-[#A1A1AA]/50 px-2 py-1 border border-[#0F1E35]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )
            return (
              <Reveal key={index} delay={(index + 1) * 80}>
                {project.link !== "#" ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative p-8"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {cardInner}
                  </Link>
                ) : (
                  <div
                    className="group block relative p-8"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {cardInner}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
