"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Instagram, Facebook, Play, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

// TikTok icon component since it's not in Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function FeaturedSocialContent() {
  const socialContent = {
    instagram: [
      {
        id: 1,
        thumbnail: "/images/instagram-thumbnail-1.jpg",
        url: "https://drive.google.com/file/d/1Nx16WBtdpg514AnyazXP2wBdaySYd1Bb/preview",
        available: true,
      },
    ],
    tiktok: [
      {
        id: 1,
        thumbnail: "/images/tiktok-thumbnail-1.png",
        url: "https://www.tiktok.com/@trustandwill/video/7545645124450110750?_t=ZT-8zVdoFJUS57&_r=1",
        available: true,
        isVideo: true,
      },
    ],
    facebook: [
      {
        id: 1,
        thumbnail: "/images/facebook-thumbnail-1.png",
        url: "https://www.facebook.com/reel/3868380843451761",
        available: true,
      },
    ],
  }

  const platformConfig = {
    instagram: {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white",
    },
    tiktok: {
      name: "TikTok",
      icon: <TikTokIcon className="h-6 w-6" />,
      color: "bg-black",
      textColor: "text-white",
    },
    facebook: {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      color: "bg-blue-600",
      textColor: "text-white",
    },
  }

  const handleVideoClick = (url: string, isVideo: boolean) => {
    if (isVideo) {
      const videoWindow = window.open("", "_blank", "width=400,height=600")
      if (videoWindow) {
        videoWindow.document.write(`
          <html>
            <head><title>TikTok Video</title></head>
            <body style="margin:0;padding:20px;background:#000;display:flex;align-items:center;justify-content:center;min-height:100vh;">
              <video controls autoplay style="max-width:100%;max-height:100%;border-radius:8px;">
                <source src="${url}" type="video/mp4">
                <source src="${url}" type="video/quicktime">
                Your browser does not support the video tag.
              </video>
            </body>
          </html>
        `)
      }
    }
  }

  return (
    <section id="social-content" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Featured Social Content</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Featured social content showcasing platform-specific messaging and creative execution
          </p>

          {/* Campaign Performance Highlights */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-semibold">3.19x ROAS (vs. &gt;1.0 goal)</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">196% Lift in Return on Ad Spend</span>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Instagram */}
          <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${platformConfig.instagram.color}`}>
                  <div className={platformConfig.instagram.textColor}>{platformConfig.instagram.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{platformConfig.instagram.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={socialContent.instagram[0].thumbnail || "/placeholder.svg"}
                  alt="Instagram content"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-white text-slate-800 hover:bg-slate-100"
                    onClick={() => window.open(socialContent.instagram[0].url, "_blank", "width=800,height=600")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Post
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TikTok */}
          <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${platformConfig.tiktok.color}`}>
                  <div className={platformConfig.tiktok.textColor}>{platformConfig.tiktok.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{platformConfig.tiktok.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={socialContent.tiktok[0].thumbnail || "/placeholder.svg"}
                  alt="TikTok content"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-black/60 rounded-full">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white text-slate-800 hover:bg-slate-100" asChild>
                    <Link href={socialContent.tiktok[0].url} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-2" />
                      Watch on TikTok
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${platformConfig.facebook.color}`}>
                  <div className={platformConfig.facebook.textColor}>{platformConfig.facebook.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{platformConfig.facebook.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={socialContent.facebook[0].thumbnail || "/placeholder.svg"}
                  alt="Facebook content"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white text-slate-800 hover:bg-slate-100" asChild>
                    <Link href={socialContent.facebook[0].url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Post
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Section */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Paid Social Content Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                <p className="text-slate-600">Platforms</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">3.19x</div>
                <p className="text-slate-600">ROAS Achieved</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">196%</div>
                <p className="text-slate-600">ROAS Lift</p>
              </div>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Paid advertising campaign achieved a ROAS of 3.19 (vs. &gt;1.0 goal), contributing to a 196% lift in
              return on ad spend across our prospecting campaign—effectively turning first-time ad viewers into engaged
              leads through strategic platform-specific content.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
