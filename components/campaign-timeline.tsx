import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"

export function CampaignTimeline() {
  const phases = [
    {
      phase: "Research & Strategy",
      duration: "Weeks 1-2",
      status: "completed",
      deliverables: [
        "Competitive analysis of 5 key players",
        "Persona development and validation",
        "Channel strategy and budget allocation",
        "Creative brief and messaging framework",
      ],
      insights: "Identified gap in peer-to-peer marketing approach for estate planning",
    },
    {
      phase: "Creative Development",
      duration: "Weeks 3-4",
      status: "completed",
      deliverables: [
        "Campaign concept development",
        "Creative asset production",
        "Copy testing and optimization",
        "Partnership outreach templates",
      ],
      insights: "Meme-style content tested 40% higher engagement than traditional approaches",
    },
    {
      phase: "Partnership Setup",
      duration: "Weeks 5-6",
      status: "completed",
      deliverables: [
        "Student ambassador recruitment",
        "Campus partnership agreements",
        "Greek house collaboration setup",
        "Parent group community access",
      ],
      insights: "Greek houses showed 3x higher conversion rates than general campus outreach",
    },
    {
      phase: "Soft Launch",
      duration: "Weeks 7-8",
      status: "in-progress",
      deliverables: [
        "Limited campus rollout",
        "A/B testing of creative variants",
        "Performance monitoring setup",
        "Feedback collection and iteration",
      ],
      insights: "Early data shows 'After Hours Protocol' resonating strongest with target demo",
    },
    {
      phase: "Full Campaign Launch",
      duration: "Weeks 9-12",
      status: "planned",
      deliverables: [
        "Multi-channel campaign activation",
        "Influencer and ambassador content",
        "Parent-focused Pinterest strategy",
        "Performance optimization",
      ],
      insights: "Projected 1,200 signups based on soft launch performance",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case "in-progress":
        return <Clock className="h-6 w-6 text-blue-600" />
      default:
        return <Circle className="h-6 w-6 text-slate-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-slate-100 text-slate-600"
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Campaign Timeline</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            12-week strategic rollout plan for the Young Adult Plan go-to-market launch
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(phase.status)}
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">{phase.phase}</CardTitle>
                      <p className="text-slate-600">{phase.duration}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(phase.status)}>{phase.status.replace("-", " ").toUpperCase()}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Insights</h4>
                    <p className="text-sm text-slate-600 italic bg-slate-50 p-4 rounded-lg">"{phase.insights}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Projected Performance</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="shadow-lg border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">Week 4</div>
                <p className="text-sm text-slate-600">Creative assets finalized</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-green-600 mb-2">Week 8</div>
                <p className="text-sm text-slate-600">Soft launch complete</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-purple-600 mb-2">Week 12</div>
                <p className="text-sm text-slate-600">Full campaign launch</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-orange-600 mb-2">1,200</div>
                <p className="text-sm text-slate-600">Target signups</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
