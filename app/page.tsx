import { Hero } from "@/components/hero"
import { NodeNetwork } from "@/components/node-network"
import { FeaturedProjects } from "@/components/featured-projects"
import { TrustWillWork } from "@/components/trust-will-work"
import { About } from "@/components/about"
import { Capabilities } from "@/components/capabilities"
import { Stack } from "@/components/stack"
import { Insights } from "@/components/insights"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#060C17] grid-bg" suppressHydrationWarning>
      <Navigation />
      <Hero />
      <About />
      <NodeNetwork />
      <FeaturedProjects />
      <TrustWillWork />
      <Capabilities />
      <Stack />
      <Insights />
      <CTASection />
    </main>
  )
}
