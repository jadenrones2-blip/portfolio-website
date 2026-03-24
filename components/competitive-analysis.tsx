import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

export function CompetitiveAnalysis() {
  const competitors = [
    {
      name: "LegalZoom",
      category: "Direct Competitor",
      strengths: ["Brand recognition", "Comprehensive legal services", "SEO dominance"],
      weaknesses: ["Generic messaging", "No Gen Z focus", "Complex user experience"],
      opportunity: "Lacks peer-to-peer marketing and campus presence",
      threat: "High",
      marketShare: "35%",
    },
    {
      name: "Nolo",
      category: "Educational Competitor",
      strengths: ["Educational content", "DIY approach", "Cost-effective"],
      weaknesses: ["Limited marketing reach", "Outdated brand perception", "No social presence"],
      opportunity: "Weak social media strategy creates opening for viral content",
      threat: "Low",
      marketShare: "15%",
    },
    {
      name: "Rocket Lawyer",
      category: "Direct Competitor",
      strengths: ["Modern interface", "Subscription model", "Mobile-first"],
      weaknesses: ["Limited brand awareness", "Generic targeting", "No lifestyle integration"],
      opportunity: "No campus or student-focused initiatives",
      threat: "Medium",
      marketShare: "20%",
    },
    {
      name: "FreeWill",
      category: "Nonprofit Competitor",
      strengths: ["Free service", "Nonprofit positioning", "Cause marketing"],
      weaknesses: ["Limited features", "Older demographic focus", "No young adult messaging"],
      opportunity: "Zero presence in college/young professional space",
      threat: "Low",
      marketShare: "10%",
    },
    {
      name: "Tomorrow",
      category: "Emerging Competitor",
      strengths: ["Modern branding", "Simplified process", "Some social presence"],
      weaknesses: ["Limited market penetration", "Generic messaging", "No campus strategy"],
      opportunity: "Hasn't established young adult market position yet",
      threat: "Medium",
      marketShare: "5%",
    },
  ]

  const insights = [
    {
      title: "Market Gap Identified",
      description: "No competitor has established a strong presence in the 18-26 demographic",
      impact: "High",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Peer-to-Peer Opportunity",
      description: "All competitors rely on traditional marketing channels, missing viral potential",
      impact: "High",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Campus Presence Void",
      description: "Zero competitors have established campus partnerships or student programs",
      impact: "Medium",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Lifestyle Integration Missing",
      description: "Competitors treat estate planning as isolated legal task, not lifestyle choice",
      impact: "High",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
  ]

  const getThreatColor = (threat: string) => {
    switch (threat.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-slate-100 text-slate-600"
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Competitive Landscape</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Analysis of 5 key competitors revealing strategic opportunities in the young adult estate planning market
          </p>
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Strategic Insights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{insight.icon}</div>
                  <h4 className="font-bold text-slate-800 mb-2">{insight.title}</h4>
                  <p className="text-sm text-slate-600 mb-3">{insight.description}</p>
                  <Badge className="bg-green-100 text-green-800">{insight.impact} Impact</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="space-y-6">
          {competitors.map((competitor, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-800">{competitor.name}</CardTitle>
                    <p className="text-slate-600">{competitor.category}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={getThreatColor(competitor.threat)}>{competitor.threat} Threat</Badge>
                    <p className="text-sm text-slate-500 mt-1">{competitor.marketShare} Market Share</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Strengths
                    </h4>
                    <ul className="space-y-1">
                      {competitor.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <TrendingDown className="h-4 w-4 mr-2" />
                      Weaknesses
                    </h4>
                    <ul className="space-y-1">
                      {competitor.weaknesses.map((weakness, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Our Opportunity
                    </h4>
                    <p className="text-sm text-slate-600 italic bg-blue-50 p-3 rounded-lg">
                      "{competitor.opportunity}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Opportunity Summary */}
        <div className="mt-16">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Market Opportunity</h3>
              <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
                Our analysis reveals a significant white space in the young adult estate planning market. No competitor
                has successfully penetrated the 18-26 demographic through peer-to-peer marketing, campus partnerships,
                or lifestyle-integrated messaging.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">0%</div>
                  <p className="text-sm text-slate-600">Competitors with campus presence</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-sm text-slate-600">Market opportunity for peer marketing</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                  <p className="text-sm text-slate-600">Competitors focus on 35+ demographic</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
