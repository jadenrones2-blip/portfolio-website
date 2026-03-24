import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Target,
  Figma,
  Mail,
  Video,
  FileText,
  Users,
  CheckSquare,
  MessageSquare,
  Zap,
  Database,
  BarChart3,
  Send,
} from "lucide-react"

export function Tools() {
  const toolCategories = [
    {
      title: "E-commerce & Analytics",
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      tools: [
        { name: "Shopify", icon: <ShoppingCart className="h-5 w-5" /> },
        { name: "Shopify Analytics", icon: <BarChart3 className="h-5 w-5" /> },
        { name: "Klaviyo", icon: <Send className="h-5 w-5" /> },
      ],
    },
    {
      title: "Email & Marketing Automation",
      icon: <Mail className="h-8 w-8 text-green-600" />,
      tools: [
        { name: "Iterable", icon: <Mail className="h-5 w-5" /> },
        { name: "Aimfox", icon: <Target className="h-5 w-5" /> },
        { name: "Instantly", icon: <Zap className="h-5 w-5" /> },
        { name: "Clay", icon: <Database className="h-5 w-5" /> },
      ],
    },
    {
      title: "Design & Content Creation",
      icon: <Figma className="h-8 w-8 text-purple-600" />,
      tools: [
        { name: "Figma", icon: <Figma className="h-5 w-5" /> },
        { name: "Canvas", icon: <FileText className="h-5 w-5" /> },
        { name: "CapCut", icon: <Video className="h-5 w-5" /> },
      ],
    },
    {
      title: "Project Management & Collaboration",
      icon: <CheckSquare className="h-8 w-8 text-orange-600" />,
      tools: [
        { name: "Notion", icon: <FileText className="h-5 w-5" /> },
        { name: "Jira", icon: <CheckSquare className="h-5 w-5" /> },
        { name: "Slack", icon: <MessageSquare className="h-5 w-5" /> },
        { name: "Apollo", icon: <Users className="h-5 w-5" /> },
      ],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Tools & Platforms</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proficient in a comprehensive suite of marketing, design, and collaboration tools that drive efficient
            workflows and measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-slate-100 rounded-full w-fit">{category.icon}</div>
                <CardTitle className="text-lg font-bold text-slate-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="text-slate-600">{tool.icon}</div>
                      <span className="text-sm font-medium text-slate-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Tools Overview */}
        <div className="mt-16">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Complete Toolkit</h3>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {[
                  "Shopify",
                  "Aimfox",
                  "Figma",
                  "Iterable",
                  "Canvas",
                  "CapCut",
                  "Notion",
                  "Apollo",
                  "Jira",
                  "Slack",
                  "Instantly",
                  "Clay",
                  "Shopify Analytics",
                  "Klaviyo",
                ].map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="bg-white/80 text-slate-700 hover:bg-white transition-colors px-4 py-2 text-sm font-medium border border-slate-200"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From e-commerce platforms and email automation to design tools and project management, I leverage the
                right technology stack to deliver comprehensive marketing solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
