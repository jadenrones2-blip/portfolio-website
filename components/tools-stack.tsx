"use client"

const tools = [
  { name: "Figma", category: "Design" },
  { name: "Supabase", category: "Backend" },
  { name: "v0", category: "AI" },
  { name: "Lovable", category: "AI" },
  { name: "Notion", category: "Operations" },
  { name: "SQL", category: "Data" },
  { name: "OpenAI", category: "AI" },
  { name: "Apify", category: "Automation" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vercel", category: "Deployment" },
]

export function ToolsStack() {
  return (
    <section className="py-24 px-6 bg-[hsl(220,15%,5%)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[hsl(345,80%,45%)] text-sm font-medium tracking-wide uppercase mb-3">Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(60,9%,94%)] mb-4">
            Tools I Use
          </h2>
          <p className="text-[hsl(220,10%,55%)] text-lg max-w-2xl mx-auto">
            Tools I use to design, build, and ship.
          </p>
        </div>

        {/* Tools grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group px-6 py-4 rounded-xl bg-[hsl(220,15%,8%)] border border-[hsl(220,10%,15%)] transition-all duration-300 hover:border-[hsl(345,80%,35%,0.4)] hover:bg-[hsl(220,15%,10%)] hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <span className="text-[hsl(60,9%,94%)] font-medium">{tool.name}</span>
                <span className="text-xs text-[hsl(220,10%,45%)] px-2 py-0.5 rounded-full bg-[hsl(220,15%,12%)]">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
