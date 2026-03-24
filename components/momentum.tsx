"use client"

import { Trophy, Briefcase, Rocket, Users, TrendingUp } from "lucide-react"

const milestones = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "Recognized for execution and product thinking",
  },
  {
    icon: Briefcase,
    title: "Incoming PM Intern",
    description: "LPL Financial — Summer 2025",
  },
  {
    icon: Rocket,
    title: "Building UniCircle",
    description: "Full-stack SaaS for university orgs",
  },
  {
    icon: Users,
    title: "Startup Ecosystem",
    description: "Active in founder communities",
  },
  {
    icon: TrendingUp,
    title: "Real Business Scale",
    description: "$140k revenue in 90 days",
  },
]

export function Momentum() {
  return (
    <section className="py-24 px-6 bg-[hsl(220,15%,6%)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[hsl(345,80%,45%)] text-sm font-medium tracking-wide uppercase mb-3">Current</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(60,9%,94%)] mb-4">
            Momentum & Wins
          </h2>
          <p className="text-[hsl(220,10%,55%)] text-lg max-w-2xl mx-auto">
            What I'm working on and what I've accomplished.
          </p>
        </div>

        {/* Timeline/cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[hsl(220,15%,8%)] border border-[hsl(220,10%,15%)] transition-all duration-500 hover:border-[hsl(345,80%,35%,0.4)] hover:shadow-lg hover:shadow-[hsl(345,80%,35%,0.08)] hover:scale-[1.02]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(345,80%,35%,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 rounded-xl bg-[hsl(220,15%,12%)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(345,80%,35%,0.15)] transition-colors duration-300">
                  <milestone.icon className="h-6 w-6 text-[hsl(345,80%,45%)]" />
                </div>
                <h3 className="font-bold text-[hsl(60,9%,94%)] mb-2 group-hover:text-[hsl(345,80%,50%)] transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-sm text-[hsl(220,10%,50%)]">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
