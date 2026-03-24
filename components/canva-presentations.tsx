import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, Presentation } from "lucide-react"
import Link from "next/link"

export function CanvaPresentations() {
  const presentations = [
    {
      title: "Young Adult Plan GTM Strategy",
      description:
        "Complete go-to-market strategy presentation including persona development, competitive analysis, and campaign framework",
      thumbnail: "/placeholder.svg?height=300&width=400&text=GTM+Strategy+Presentation",
      canvaUrl: "https://www.canva.com/design/your-gtm-strategy-link",
      type: "Strategy Document",
      pages: "24 slides",
      lastUpdated: "December 2024",
      tags: ["GTM Strategy", "Persona Development", "Competitive Analysis"],
    },
    {
      title: "Young Adult Plan Creative Campaign Strategy",
      description:
        "This strategy document includes campaign overviews, visual mockups, and creative executions for the Young Adult Plan’s three audience segments—young adults, parents, and young professionals—through distinct campaign concepts.",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Creative+Concepts",
      canvaUrl: "https://www.canva.com/design/your-creative-concepts-link",
      type: "Creative Portfolio",
      pages: "16 slides",
      lastUpdated: "December 2024",
      tags: ["Creative Strategy", "Campaign Design", "Social Media"],
    },
    {
      title: "Persona Development Deep Dive",
      description:
        "Detailed persona profiles with trigger moments, values, and messaging frameworks for each target audience",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Persona+Development",
      canvaUrl: "https://www.canva.com/design/your-persona-development-link",
      type: "Research & Strategy",
      pages: "12 slides",
      lastUpdated: "November 2024",
      tags: ["User Research", "Persona Development", "Target Audience"],
    },
    {
      title: "Campaign Performance Results",
      description: "Performance analytics, channel breakdown, and ROI analysis from the 30-day campaign launch",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Performance+Results",
      canvaUrl: "https://www.canva.com/design/your-performance-results-link",
      type: "Analytics Report",
      pages: "10 slides",
      lastUpdated: "December 2024",
      tags: ["Performance Analytics", "ROI Analysis", "Campaign Results"],
    },
    {
      title: "Competitive Landscape Analysis",
      description:
        "In-depth analysis of 5 key competitors with market opportunity identification and strategic recommendations",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Competitive+Analysis",
      canvaUrl: "https://www.canva.com/design/your-competitive-analysis-link",
      type: "Market Research",
      pages: "14 slides",
      lastUpdated: "November 2024",
      tags: ["Competitive Analysis", "Market Research", "Strategic Planning"],
    },
    {
      title: "Campaign Timeline & Process",
      description:
        "12-week project timeline with deliverables, milestones, and process documentation for campaign replication",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Campaign+Timeline",
      canvaUrl: "https://www.canva.com/design/your-timeline-link",
      type: "Project Management",
      pages: "8 slides",
      lastUpdated: "October 2024",
      tags: ["Project Management", "Timeline", "Process Documentation"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Strategy Presentations</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive Canva presentations documenting the complete Young Adult Plan GTM strategy and execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {presentations.map((presentation, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={presentation.thumbnail || "/placeholder.svg"}
                  alt={presentation.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white text-slate-800 hover:bg-slate-100" asChild>
                    <Link href={presentation.canvaUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      View Presentation
                    </Link>
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/80 text-white border-0">{presentation.type}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-800">{presentation.title}</CardTitle>
                <p className="text-sm text-slate-600">{presentation.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{presentation.pages}</span>
                  <span>Updated {presentation.lastUpdated}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {presentation.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-slate-300 text-slate-600">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1" asChild>
                    <Link href={presentation.canvaUrl} target="_blank" rel="noopener noreferrer">
                      <Presentation className="h-4 w-4 mr-2" />
                      View in Canva
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-300 bg-transparent" asChild>
                    <Link href={presentation.canvaUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Complete Strategy Documentation</h3>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                These presentations contain the complete strategic framework, creative executions, and performance
                analysis from the Young Adult Plan GTM campaign.
              </p>
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">84+</div>
                  <p className="text-sm text-slate-600">Total Slides</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                  <p className="text-sm text-slate-600">Presentations</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,247</div>
                  <p className="text-sm text-slate-600">Campaign Signups</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                All presentations are live documents updated with the latest campaign insights and performance data
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
