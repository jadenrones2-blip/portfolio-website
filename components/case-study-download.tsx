import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Eye } from "lucide-react"

export function CaseStudyDownload() {
  const caseStudyAssets = [
    {
      title: "Complete GTM Strategy Document",
      description:
        "Comprehensive 24-page strategy document including persona development, competitive analysis, and campaign framework",
      type: "PDF",
      size: "2.4 MB",
      pages: "24 pages",
    },
    {
      title: "Creative Asset Portfolio",
      description: "High-resolution mockups and creative samples from all campaign concepts",
      type: "PDF",
      size: "8.7 MB",
      pages: "16 pages",
    },
    {
      title: "Performance Analytics Report",
      description: "Detailed performance metrics, channel analysis, and ROI calculations",
      type: "PDF",
      size: "1.8 MB",
      pages: "12 pages",
    },
    {
      title: "Campaign Timeline & Process",
      description: "Project management framework and execution timeline for replication",
      type: "PDF",
      size: "1.2 MB",
      pages: "8 pages",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Detailed Case Study</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Download comprehensive documentation of the Young Adult Plan GTM strategy and execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudyAssets.map((asset, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-slate-800">{asset.title}</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">{asset.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4 text-sm text-slate-500">
                    <span>{asset.type}</span>
                    <span>•</span>
                    <span>{asset.size}</span>
                    <span>•</span>
                    <span>{asset.pages}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-300 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Complete Package */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Complete Case Study Package</h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Get the full strategic framework, creative executions, and performance analysis in one comprehensive
              package
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
                <p className="text-sm text-slate-600">Total Pages</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">14 MB</div>
                <p className="text-sm text-slate-600">Complete Package</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <p className="text-sm text-slate-600">Detailed Documents</p>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Download className="h-5 w-5 mr-3" />
              Download Complete Package
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              Includes strategy framework, creative assets, performance data, and implementation guide
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
