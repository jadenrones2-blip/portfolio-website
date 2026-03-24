import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Lightbulb } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Marketing & Growth",
      icon: <TrendingUp className="h-8 w-8 text-black" />,
      skills: [
        "Product Marketing",
        "Growth Hacking",
        "Digital Marketing",
        "Content Strategy",
        "Sales Techniques",
        "Shopify Analytics",
        "SEO/SEM",
        "Analytics",
        "A/B Testing",
      ],
    },
    {
      title: "Business & Strategy",
      icon: <Lightbulb className="h-8 w-8 text-black" />,
      skills: [
        "Business Development",
        "Market Research",
        "Competitive Analysis",
        "Product Strategy",
        "Go-to-Market",
        "Fundraising",
        "P&L Management",
      ],
    },
    {
      title: "Leadership & Operations",
      icon: <Users className="h-8 w-8 text-black" />,
      skills: [
        "Team Building",
        "Project Management",
        "Stakeholder Management",
        "Public Speaking",
        "Negotiation",
        "Strategic Planning",
        "Mentoring",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <TrendingUp className="h-8 w-8 text-black" />,
      skills: [
        "Shopify",
        "Figma",
        "Iterable",
        "Canvas",
        "Notion",
        "Apollo",
        "Jira",
        "Slack",
        "Klaviyo",
        "Aimfox",
        "Instantly",
        "Clay",
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-light text-center mb-16 tracking-wide text-black">
          Expertise & Capabilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 p-4 border-2 border-black w-fit">{category.icon}</div>
                <CardTitle className="text-xl font-light tracking-wider uppercase">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border border-gray-400 text-gray-700 hover:border-black hover:text-black transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
