"use client"

import { Trophy, Rocket, Briefcase, TrendingUp, Code, Zap } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    label: "Hackathon Winner",
    sublabel: "Recognized for execution",
  },
  {
    icon: Rocket,
    label: "Founder of UniCircle",
    sublabel: "Full-stack SaaS platform",
  },
  {
    icon: Briefcase,
    label: "Incoming PM Intern",
    sublabel: "LPL Financial",
  },
  {
    icon: TrendingUp,
    label: "6-Figure Impact",
    sublabel: "Business results driven",
  },
  {
    icon: Code,
    label: "0 → Deployed",
    sublabel: "SaaS platforms shipped",
  },
  {
    icon: Zap,
    label: "Multiple Products",
    sublabel: "Shipped & scaling",
  },
]

export function KPIStrip() {
  return (
    <section className="py-16 px-6 bg-[hsl(220,15%,6%)] border-y border-[hsl(220,10%,12%)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[hsl(220,15%,8%)] border border-[hsl(220,10%,15%)] transition-all duration-300 hover:border-[hsl(345,80%,35%,0.5)] hover:bg-[hsl(220,15%,9%)] hover:shadow-lg hover:shadow-[hsl(345,80%,35%,0.1)] hover:scale-[1.02]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(345,80%,35%,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-xl bg-[hsl(220,15%,12%)] group-hover:bg-[hsl(345,80%,35%,0.15)] transition-colors duration-300">
                  <stat.icon className="h-5 w-5 text-[hsl(345,80%,45%)]" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(60,9%,94%)] text-sm">{stat.label}</p>
                  <p className="text-xs text-[hsl(220,10%,50%)] mt-1">{stat.sublabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
