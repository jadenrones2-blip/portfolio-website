import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Briefcase } from "lucide-react"

export function StrategyShowcase() {
  const personas = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "The Independent College Kid",
      age: "18-21",
      description: "Current college students active in nightlife, Greek life, and risk-prone activities",
      values: ["Freedom", "Authenticity", "Safety"],
      triggers: [
        "Going to parties, festivals, or late-night events",
        "Signing a first solo or shared lease",
        "Facing or witnessing emergencies on campus",
      ],
      campaign: "After Hours Protocol",
      message: "The party ends. The plan kicks in.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: "The Young Professional",
      age: "22-26",
      description: "Recently graduated, in grad school, or early career professionals",
      values: ["Security", "Simplicity", "Control"],
      triggers: [
        "Getting a first full-time job or benefits package",
        "Signing a lease solo or with a partner",
        "Growing investments and savings",
      ],
      campaign: "Corporate Starter Pack",
      message: "Planning your future is the smartest form of self-care.",
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "The Prepared Parent",
      age: "40-55",
      description: "Parents sending children to college, highly involved in their child's life",
      values: ["Preparedness", "Love through action", "Peace of mind"],
      triggers: [
        "Child turning 18",
        "Getting ready to send child to college",
        "College checklists and parent Facebook groups",
      ],
      campaign: "College Bound, Legally Unprotected",
      message: "It's not about control - it's about care.",
    },
  ]

  const campaigns = [
    {
      title: "After Hours Protocol",
      target: "College Students",
      concept: "Student ambassador program targeting nightlife and campus culture",
      channels: ["Campus partnerships", "Student ambassadors", "QR-coded posters", "Greek houses"],
      hook: "Someone needs to speak for you when you can't. If you don't name them, no one will.",
    },
    {
      title: "Corporate Starter Pack",
      target: "Young Professionals",
      concept: "Meme-style content positioning estate planning as essential adulting",
      channels: ["Instagram", "TikTok", "LinkedIn", "Corporate benefits"],
      hook: "You've got the job. The benefits. The iced coffee routine. But without an estate plan, your future's still unprotected.",
    },
    {
      title: "College Bound, Legally Unprotected",
      target: "Prepared Parents",
      concept: "Pinterest boards and Facebook groups targeting college preparation",
      channels: ["Pinterest", "Facebook parent groups", "College portals", "Medical forms"],
      hook: "You've done the shopping. You've filled out the medical forms. But without a Young Adult Plan, you won't be able to help your child in an emergency.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Strategic Framework</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep persona development and campaign strategy for Trust & Will's Young Adult Plan launch
          </p>
        </div>

        {/* Personas Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Target Personas</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-slate-100 rounded-full w-fit">{persona.icon}</div>
                  <CardTitle className="text-xl font-bold text-slate-800">{persona.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">Age: {persona.age}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{persona.description}</p>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Values</h4>
                    <div className="flex flex-wrap gap-1">
                      {persona.values.map((value) => (
                        <Badge key={value} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Trigger Moments</h4>
                    <ul className="space-y-1">
                      {persona.triggers.map((trigger, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {trigger}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-1">Campaign</h4>
                    <p className="text-sm font-medium text-blue-600">{persona.campaign}</p>
                    <p className="text-xs text-slate-600 italic mt-1">"{persona.message}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Campaign Concepts */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Campaign Concepts</h3>
          <div className="grid md:grid-cols-1 gap-8">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-2">{campaign.title}</h4>
                      <Badge className="bg-green-100 text-green-800 mb-3">{campaign.target}</Badge>
                      <p className="text-sm text-slate-600">{campaign.concept}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-slate-800 mb-2">Channels</h5>
                      <div className="space-y-1">
                        {campaign.channels.map((channel, i) => (
                          <div key={i} className="text-xs text-slate-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {channel}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-slate-800 mb-2">Hook</h5>
                      <p className="text-sm text-slate-600 italic">"{campaign.hook}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
