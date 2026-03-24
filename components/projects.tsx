import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "TechFlow SaaS Platform",
      description:
        "Co-founded and led product marketing for a B2B SaaS platform that streamlines workflow automation. Achieved $10M ARR within 18 months.",
      image: "/placeholder.svg?height=300&width=500",
      achievements: ["$10M ARR", "500+ Enterprise Clients", "40% Market Share"],
      technologies: ["Product Strategy", "Growth Marketing", "B2B Sales", "Team Leadership"],
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "EcoCommerce Marketplace",
      description:
        "Built and marketed a sustainable e-commerce platform connecting eco-conscious consumers with green brands. Successfully exited after 3 years.",
      image: "/placeholder.svg?height=300&width=500",
      achievements: ["Successful Exit", "2M+ Users", "Featured in TechCrunch"],
      technologies: ["Brand Development", "Digital Marketing", "Partnership Strategy", "Fundraising"],
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "FinTech Mobile App",
      description:
        "Led go-to-market strategy for a revolutionary personal finance app. Drove user acquisition from 0 to 1M+ downloads in first year.",
      image: "/placeholder.svg?height=300&width=500",
      achievements: ["1M+ Downloads", "4.8 App Store Rating", "Series A Funding"],
      technologies: ["Mobile Marketing", "User Acquisition", "Product Analytics", "PR Strategy"],
      liveUrl: "https://example.com",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-4 tracking-wide text-black">Featured Ventures</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A showcase of successful companies and products I've co-founded, launched, and scaled
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden border-2 border-black shadow-xl hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black text-white border-0 font-medium">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-light tracking-wide">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600 font-light">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-sm mb-3 text-black uppercase tracking-wider">Key Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.achievements.map((achievement) => (
                          <Badge
                            key={achievement}
                            className="bg-gray-100 text-black border border-gray-300 hover:bg-black hover:text-white transition-colors"
                          >
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-3 uppercase tracking-wider">Core Focus Areas</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-gray-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium tracking-wide" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden border-2 border-black hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover grayscale"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-xl font-light tracking-wide">{project.title}</CardTitle>
                      <CardDescription className="font-light text-gray-600">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.achievements.map((achievement) => (
                            <Badge key={achievement} variant="outline" className="text-xs border-gray-400">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
