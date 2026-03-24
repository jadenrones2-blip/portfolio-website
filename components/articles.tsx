import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function Articles() {
  const articles = [
    {
      title: "Estate Lessons from The Summer I Turned Pretty",
      publication: "Trust & Will",
      url: "https://trustandwill.com/learn/estate-lessons-from-the-summer-i-turned-pretty",
      tags: ["Pop Culture", "Estate Planning", "Inheritance", "Family"],
      featured: true,
    },
    {
      title: "Jeff Bezos' Estate Plan",
      publication: "Trust & Will",
      url: "https://trustandwill.com/learn/jeff-bezos-estate-plan",
      tags: ["Celebrity", "Estate Planning", "Wealth Transfer", "Philanthropy"],
      featured: true,
    },
    {
      title: "How Gen Z Spends Their Money",
      publication: "Trust & Will",
      url: "https://trustandwill.com/learn/how-gen-z-spends-their-money/",
      tags: ["Gen Z", "Financial Habits", "Consumer Behavior", "Money Management"],
      featured: true,
    },
    {
      title: "What Gen Z Gets Right About Investing—And Wrong About Estate Planning",
      publication: "Trust & Will",
      url: "https://trustandwill.com/learn/what-gen-z-gets-right-about-investing-and-wrong-about-estate-planning",
      tags: ["Gen Z", "Estate Planning", "Investing", "Cryptocurrency"],
      featured: true,
    },
    {
      title: "From Paris to Probate: What the $10M Kim Kardashian Robbery Can Teach Us About Estate Planning",
      publication: "Trust & Will",
      url: "https://trustandwill.com/learn/kim-kardashian-robbery",
      tags: ["Estate Planning", "Celebrity", "Asset Protection", "High-Value Assets"],
      featured: true,
    },
    {
      title: "How to Talk to Your Parents About Their Will",
      publication: "Trust & Will",
      url: "https://trustandwill.com/learn/how-to-talk-to-your-parents-about-their-will/",
      tags: ["Family Communication", "Estate Planning", "Wills", "Parent Conversations"],
      featured: true,
    },
  ]

  return (
    <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Published Articles</h2>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 group flex flex-col h-full"
              >
                <CardHeader className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800 border-0">{article.publication}</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight line-clamp-3">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2 min-h-[60px] items-start">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-slate-300 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href={article.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
