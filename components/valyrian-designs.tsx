import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Droplets, FileText, ShoppingBag, Instagram } from "lucide-react"
import Link from "next/link"

export function ValyrianDesigns() {
  const responsibilities = [
    "Drove $140k in sales in 90 days, managing front-end of luxury outdoor art business through strategic Etsy optimization, Instagram content strategy, personalized customer outreach, and partnerships with overseas marketing collaborators",
    "Managed front-facing business operations, including posting new products on Etsy and maintaining product listings",
    "Handled customer outreach through Etsy and company website, creating personalized thank-you videos to foster long-term relationships",
    "Oversaw brand presence on Instagram, developing content strategies to grow engagement and reach",
    "Coordinated with overseas marketing partners to align campaigns and ensure consistent brand messaging",
    "Collaborated with operations and production lead to strengthen brand identity, blending unique outdoor design with personalized customer care",
  ]

  return (
    <section id="valyrian" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Entrepreneurial Venture</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Co-founding and scaling a luxury outdoor water feature company from startup to established business
          </p>
        </div>

        {/* Company Overview */}
        <div className="mb-16">
          <Card className="shadow-xl border-0 bg-white overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative group">
                <Link href="https://valyriandesigns.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/valyrian-fountain.jpeg"
                    alt="Valyrian Designs - Modern black metal rain curtain water fountain with brass logo plaque, set in landscaped outdoor space"
                    className="w-full h-64 md:h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 px-4 py-2 rounded-lg flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-slate-800" />
                      <span className="text-slate-800 font-medium">Visit Website</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Droplets className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Valyrian Designs</h3>
                    <p className="text-blue-600 font-semibold">Co-Founder & Product Manager</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  I co-founded Valyrian Designs to bring modern serenity to outdoor spaces through bespoke fire and
                  water features that feel as functional as they are emotionally resonant. From product development and
                  custom installation to brand strategy and go-to-market execution, I've led the creative and strategic
                  direction of the company. Our work blends design and craftsmanship to create immersive outdoor
                  experiences, serving both residential and commercial clients who want spaces that inspire connection,
                  calm, and a sense of story.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Custom design and installation services</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Serving residential and commercial clients</span>
                  </div>
                </div>

                {/* Website and Etsy Links */}
                <div className="flex gap-3">
                  <Button size="sm" className="bg-black hover:bg-slate-800 text-white" asChild>
                    <Link href="https://valyriandesigns.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-300 bg-transparent" asChild>
                    <Link href="https://www.etsy.com/shop/Valyrianoutdoors" target="_blank" rel="noopener noreferrer">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Etsy Store
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-300 bg-transparent" asChild>
                    <Link href="https://www.instagram.com/valyriandesignsoutdoor/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Responsibilities & Impact */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800">Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-sm text-slate-600 flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800">Business Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Revenue Growth</h4>
                <p className="text-sm text-slate-600">
                  Generated $140k in sales within 90 days through strategic multi-channel marketing approach and
                  optimized customer acquisition funnel across Etsy and direct channels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Market Positioning</h4>
                <p className="text-sm text-slate-600">
                  Established Valyrian Designs as a premium brand in the luxury outdoor living market, differentiating
                  through custom design and superior craftsmanship.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Customer Experience</h4>
                <p className="text-sm text-slate-600">
                  Created end-to-end customer journey from initial consultation through installation, ensuring premium
                  service delivery at every touchpoint.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Strategy Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">From Concept to Launch</h3>
          <p className="text-slate-600 mb-12 max-w-4xl mx-auto text-center leading-relaxed">
            As co-founder and product lead at Valyrian Designs, I owned the full product lifecycle — from user insights
            and feature planning to roadmap development and go-to-market execution. Below is a snapshot of how I turned
            strategic intent into real products.
          </p>

          {/* Product Documents Grid */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-black rounded-lg flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-2">Raincurtain Fountain Product Roadmap</h4>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        Comprehensive product strategy and development timeline for our signature Raincurtain fountain,
                        including feature prioritization, technical specifications, and market launch phases.
                      </p>
                      <Button size="sm" className="bg-black hover:bg-slate-800 text-white" asChild>
                        <Link
                          href="https://docs.google.com/document/d/1ff1gxs7vxDp2DtfwllMqCXwdqApTeWEhihIftyYs1Gc/edit?tab=t.0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Document
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-black rounded-lg flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-2">Product Strategy Framework</h4>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        Strategic framework outlining our product development methodology, market positioning approach,
                        and competitive differentiation strategy across our water feature product line.
                      </p>
                      <Button size="sm" className="bg-black hover:bg-slate-800 text-white" asChild>
                        <Link
                          href="https://docs.google.com/document/d/1T4OaRncF5vVt3ALMJBtkI0NPggUYMv3RaVAteDUk6HQ/edit?tab=t.0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Document
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
