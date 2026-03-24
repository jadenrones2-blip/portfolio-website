import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Target, Award } from "lucide-react"

export function LaunchResults() {
  const metrics = [
    {
      title: "New Signups",
      value: "1,247",
      target: "1,200",
      performance: "+3.9%",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      status: "exceeded",
    },
    {
      title: "Campus Partnerships",
      value: "12",
      target: "8",
      performance: "+50%",
      icon: <Target className="h-8 w-8 text-green-600" />,
      status: "exceeded",
    },
    {
      title: "Student Ambassadors",
      value: "45",
      target: "30",
      performance: "+50%",
      icon: <Award className="h-8 w-8 text-purple-600" />,
      status: "exceeded",
    },
    {
      title: "Conversion Rate",
      value: "12.3%",
      target: "8%",
      performance: "+4.3%",
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      status: "exceeded",
    },
  ]

  const channelPerformance = [
    {
      channel: "Campus Partnerships",
      signups: 487,
      percentage: 39,
      cost: "$2.40",
      notes: "Greek houses performed 3x better than general campus",
    },
    {
      channel: "Student Ambassadors",
      signups: 312,
      percentage: 25,
      cost: "$3.20",
      notes: "Peer referrals had highest conversion rate at 18%",
    },
    {
      channel: "Social Media (Organic)",
      signups: 248,
      percentage: 20,
      cost: "$0.80",
      notes: "Corporate Starter Pack memes went viral on TikTok",
    },
    {
      channel: "Parent Outreach",
      signups: 125,
      percentage: 10,
      cost: "$4.80",
      notes: "Pinterest strategy exceeded expectations",
    },
    {
      channel: "Paid Social",
      signups: 75,
      percentage: 6,
      cost: "$8.50",
      notes: "Supplemented organic reach during peak periods",
    },
  ]

  const insights = [
    {
      title: "Peer-to-Peer Marketing Success",
      description: "Student ambassador program generated 25% of total signups with highest conversion rates",
      impact: "Will expand ambassador program to 15 additional campuses",
    },
    {
      title: "Greek Life Partnership Gold Mine",
      description: "Greek houses delivered 3x higher conversion than general campus outreach",
      impact: "Developing dedicated Greek life partnership strategy",
    },
    {
      title: "Viral Content Breakthrough",
      description: "Corporate Starter Pack memes achieved 2.3M organic impressions on TikTok",
      impact: "Scaling meme-style content across all campaigns",
    },
    {
      title: "Parent Channel Surprise",
      description: "Pinterest strategy for parents exceeded projections by 40%",
      impact: "Launching dedicated parent education campaign",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Launch Results</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            30-day campaign performance exceeded all targets, validating our peer-to-peer marketing strategy
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{metric.icon}</div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{metric.value}</div>
                <p className="text-sm text-slate-600 mb-2">{metric.title}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">{metric.performance}</Badge>
                  <span className="text-xs text-slate-500">vs target: {metric.target}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Channel Performance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Channel Performance Breakdown</h3>
          <div className="space-y-4">
            {channelPerformance.map((channel, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{channel.channel}</h4>
                      <p className="text-sm text-slate-600">{channel.notes}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{channel.signups}</div>
                      <p className="text-sm text-slate-600">Signups</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{channel.percentage}%</div>
                      <p className="text-sm text-slate-600">Share</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{channel.cost}</div>
                      <p className="text-sm text-slate-600">Cost per signup</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Strategic Insights & Next Steps</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-800">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{insight.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Next Steps:</h5>
                    <p className="text-sm text-blue-700">{insight.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Summary */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Campaign Success Summary</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">104%</div>
                <p className="text-slate-600">Target Achievement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">$4.20</div>
                <p className="text-slate-600">Average Cost Per Signup</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">12.3%</div>
                <p className="text-slate-600">Overall Conversion Rate</p>
              </div>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Young Adult Plan GTM campaign successfully validated our hypothesis that peer-to-peer marketing and
              campus partnerships could effectively reach the 18-26 demographic for estate planning services. The
              campaign exceeded all targets and established a scalable framework for future young adult marketing
              initiatives.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
