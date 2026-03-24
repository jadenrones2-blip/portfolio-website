"use client"

import React, { useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  Star,
  CheckCircle,
  FileText,
  ClipboardList,
  BarChart2,
  Compass,
  Calendar,
  Bell,
  GitMerge,
} from "lucide-react"

// ─── Config ────────────────────────────────────────────────────────────────────
const DEMO_URL = "https://unicircle.app/demo"

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Glow Button ──────────────────────────────────────────────────────────────
function GlowButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="relative inline-flex">
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0.06, 0.35] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-amber-400"
        style={{ filter: "blur(22px)" }}
        aria-hidden
      />
      <motion.div
        animate={{ opacity: [0.4, 0.12, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute inset-0 rounded-full bg-amber-300"
        style={{ filter: "blur(8px)" }}
        aria-hidden
      />
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-semibold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-colors duration-200 group whitespace-nowrap"
      >
        {children}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  )
}

// ─── AI Pipeline ──────────────────────────────────────────────────────────────
const PIPELINE_STEPS = [
  {
    Icon: FileText,
    title: "400 Applications Arrive",
    desc: "Hundreds of unique applicants submit through the student portal. Officers have no standardized system — every review is manual, inconsistent, and slow.",
  },
  {
    Icon: Cpu,
    title: "Claude Reads Every Response",
    desc: "Each application is dispatched to the Anthropic Claude API in bulk. The AI reads full responses — not summaries, not keywords — applying genuine comprehension to each one.",
  },
  {
    Icon: ClipboardList,
    title: "Evaluated Against Custom Rubric",
    desc: "Officers define the rubric once: the qualities they want, weighted by importance. Claude evaluates every applicant against the same standard. Zero bias. Zero fatigue.",
  },
  {
    Icon: Star,
    title: "Standouts Flagged Automatically",
    desc: "Applicants in the top 10–15% are surfaced as Standouts — complete with score, reasoning, and the exact responses that triggered the flag. Officers see the needle, not the haystack.",
  },
  {
    Icon: CheckCircle,
    title: "Auto-Accept / Auto-Reject",
    desc: "Set an acceptance threshold once. The system handles mass decisions instantly. Officers only spend time on the candidates that actually matter.",
  },
]

function AIPipelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const [activeStep, setActiveStep] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.18) setActiveStep(0)
    else if (v < 0.36) setActiveStep(1)
    else if (v < 0.54) setActiveStep(2)
    else if (v < 0.72) setActiveStep(3)
    else setActiveStep(4)
  })

  const s0 = useTransform(scrollYProgress, [0, 0.10, 0.22], [0.25, 1, 0.35])
  const s1 = useTransform(scrollYProgress, [0.14, 0.26, 0.40], [0.25, 1, 0.35])
  const s2 = useTransform(scrollYProgress, [0.32, 0.46, 0.58], [0.25, 1, 0.35])
  const s3 = useTransform(scrollYProgress, [0.50, 0.64, 0.76], [0.25, 1, 0.45])
  const s4 = useTransform(scrollYProgress, [0.68, 0.82, 1.0], [0.25, 1, 1.0])
  const stepOpacities = [s0, s1, s2, s3, s4]
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="bg-[#040A14]">
      {/* Section header */}
      <motion.div
        className="px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-amber-400/30" />
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400">AI Screening</span>
          <span className="w-12 h-[1px] bg-amber-400/30" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#F3F3F3] mb-6 tracking-[-0.02em] leading-[1.1]">
          AI reads every application.<br />
          <span className="text-amber-400">So officers don't have to.</span>
        </h2>
        <p className="text-lg text-[#A1A1AA] font-light leading-relaxed max-w-2xl mx-auto">
          The Anthropic Claude API evaluates 400+ applicants against a custom rubric, flags standouts,
          and auto-accepts or rejects by score threshold.
        </p>
      </motion.div>

      {/* Sticky pipeline — 450vh of scroll travel, 5 steps */}
      <div ref={containerRef} className="relative" style={{ height: "450vh" }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-6xl w-full mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left: animated description */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-xs tracking-[0.3em] uppercase text-amber-400/60 mb-5">
                      Step {activeStep + 1} of 5
                    </p>
                    <h3 className="text-3xl md:text-4xl font-extralight text-[#F3F3F3] mb-5 tracking-[-0.01em] leading-[1.15]">
                      {PIPELINE_STEPS[activeStep].title}
                    </h3>
                    <p className="text-lg text-[#A1A1AA] font-light leading-relaxed">
                      {PIPELINE_STEPS[activeStep].desc}
                    </p>
                    {/* Step progress bar */}
                    <div className="flex gap-2 mt-10">
                      {PIPELINE_STEPS.map((_, i) => (
                        <div
                          key={i}
                          className={`h-[2px] rounded-full transition-all duration-500 ${
                            i === activeStep
                              ? "w-8 bg-amber-400"
                              : i < activeStep
                              ? "w-4 bg-amber-400/40"
                              : "w-4 bg-[#1A2540]"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: pipeline nodes (desktop only) */}
              <div className="hidden lg:flex justify-end">
                <div className="relative" style={{ width: 300 }}>
                  {/* Track background */}
                  <div
                    className="absolute w-px bg-[#1A2540]"
                    style={{ left: 19, top: 20, bottom: 20 }}
                  />
                  {/* Animated progress fill */}
                  <motion.div
                    className="absolute w-px bg-gradient-to-b from-amber-400 via-amber-400/60 to-amber-400/10 origin-top"
                    style={{ left: 19, top: 20, height: lineH }}
                  />

                  <div className="relative flex flex-col">
                    {PIPELINE_STEPS.map((step, i) => {
                      const Icon = step.Icon
                      const isActive = i === activeStep
                      const isPast = i < activeStep
                      return (
                        <motion.div
                          key={i}
                          style={{ opacity: stepOpacities[i] }}
                          className={`flex items-center gap-5 ${
                            i < PIPELINE_STEPS.length - 1 ? "pb-10" : ""
                          }`}
                        >
                          <div
                            className={`relative z-10 w-10 h-10 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                              isActive
                                ? "border-amber-400/50 bg-amber-400/10"
                                : isPast
                                ? "border-[#1A2540] bg-[#0A1020]"
                                : "border-[#1A2540] bg-[#09101F]"
                            }`}
                            style={
                              isActive
                                ? { boxShadow: "0 0 20px rgba(245,158,11,0.25)" }
                                : {}
                            }
                          >
                            <Icon
                              className={`w-4 h-4 transition-colors duration-500 ${
                                isActive
                                  ? "text-amber-400"
                                  : isPast
                                  ? "text-amber-400/30"
                                  : "text-[#2A3A50]"
                              }`}
                            />
                          </div>
                          <span
                            className={`text-sm font-light leading-snug transition-colors duration-500 ${
                              isActive
                                ? "text-[#E8E8E8]"
                                : isPast
                                ? "text-[#A1A1AA]/35"
                                : "text-[#2A3A50]"
                            }`}
                          >
                            {step.title}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Standouts Section ────────────────────────────────────────────────────────
const STANDOUT_INDICES = new Set([2, 7, 10, 16, 20])

function StandoutsSection() {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-amber-400" />
              <span className="text-xs tracking-[0.3em] uppercase text-amber-400">The PM Story</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extralight text-[#F3F3F3] mb-8 tracking-[-0.02em] leading-[1.1]"
            >
              Officers can't read 400 applications.<br />
              <span className="text-amber-400">So I built an AI that could.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#A1A1AA] font-light leading-relaxed mb-6">
              The bottleneck isn't the decision — it's the reading. Clubs were drowning in applications,
              spending hours on manual reviews that were still inconsistent.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-[#A1A1AA] font-light leading-relaxed mb-12">
              UniCircle's AI reads every response against a custom rubric, scores 0–100, and surfaces
              the top 10–15% as{" "}
              <span className="text-amber-400 font-normal">Standouts</span>. Officers only review the
              candidates that actually matter.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-2 border-t border-[#0D1A2E]">
              {[
                { n: "400+", label: "Apps screened" },
                { n: "10–15%", label: "Flagged as Standouts", gold: true },
                { n: "0", label: "Manual reads needed" },
              ].map((s) => (
                <div key={s.label} className="pt-6">
                  <p className={`text-3xl font-extralight mb-1 tracking-[-0.02em] ${s.gold ? "text-amber-400" : "text-[#F3F3F3]"}`}>
                    {s.n}
                  </p>
                  <p className="text-xs text-[#A1A1AA]/60">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Application card grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-end"
          >
            <div className="grid grid-cols-6 gap-1.5 w-full max-w-sm">
              {Array.from({ length: 24 }, (_, i) => {
                const isStandout = STANDOUT_INDICES.has(i)
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={
                      isStandout
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0.18, scale: 1 }
                    }
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.022 }}
                    className={`relative rounded-sm p-1.5 border ${
                      isStandout
                        ? "border-amber-400/50 bg-amber-400/[0.06]"
                        : "border-[#0D1A2E] bg-[#09101F]"
                    }`}
                    style={{
                      aspectRatio: "3/4",
                      boxShadow: isStandout
                        ? "0 0 14px rgba(245,158,11,0.14)"
                        : "none",
                    }}
                  >
                    <div className="flex flex-col gap-[3px] mt-0.5">
                      <div className={`h-[2px] rounded-full w-full ${isStandout ? "bg-amber-400/35" : "bg-[#1A2540]"}`} />
                      <div className={`h-[2px] rounded-full w-3/4 ${isStandout ? "bg-amber-400/25" : "bg-[#1A2540]"}`} />
                      <div className={`h-[2px] rounded-full w-1/2 ${isStandout ? "bg-amber-400/15" : "bg-[#1A2540]"}`} />
                    </div>
                    {isStandout && (
                      <div className="absolute top-1 right-1">
                        <Star className="w-2 h-2 text-amber-400 fill-amber-400" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
            <p className="text-xs text-[#A1A1AA]/35 text-right mt-3 max-w-sm tracking-wide">
              ★ Standouts — top 10–15% auto-flagged by AI
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Full Platform Features ───────────────────────────────────────────────────
const FEATURES = [
  {
    Icon: FileText,
    title: "Custom Form Builder",
    desc: "Officers design their own application forms — any field, any question. Students apply through a clean, branded portal.",
  },
  {
    Icon: GitMerge,
    title: "Drag-and-Drop Pipeline",
    desc: "Full kanban recruitment board. One-click stage advancement, per-officer voting, deliberation threads, final decision tracking.",
  },
  {
    Icon: BarChart2,
    title: "Club Analytics Dashboard",
    desc: "Real-time metrics on applications, funnel conversion, engagement, and member activity. Data, not guesswork.",
  },
  {
    Icon: Compass,
    title: "Club Discovery + AI Chat",
    desc: "AI recommendation widget helps students find clubs that match their interests. Side-by-side comparison and club reviews.",
  },
  {
    Icon: Calendar,
    title: "Event Management",
    desc: "Full event lifecycle: creation, RSVP tracking, reminders, and attendance logging — connected to the member database.",
  },
  {
    Icon: Bell,
    title: "Notifications + CSV Import",
    desc: "Automated application status updates, officer alerts, decision notifications, and bulk CSV import for existing rosters.",
  },
]

function FeaturesSection() {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#040A14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-amber-400/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400">Full Platform</span>
          </div>
          <p className="text-4xl md:text-5xl font-extralight text-[#F3F3F3] max-w-2xl leading-[1.1] tracking-[-0.02em]">
            End-to-end. Built for how clubs actually operate.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0D1A2E]"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.Icon
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group bg-[#060C17] p-8 hover:bg-[#08111F] transition-colors duration-500"
              >
                <div className="w-10 h-10 rounded-lg border border-amber-400/20 bg-amber-400/[0.04] flex items-center justify-center mb-6 group-hover:border-amber-400/40 transition-colors duration-500">
                  <Icon className="w-4 h-4 text-amber-400/60 group-hover:text-amber-400 transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-light text-[#F3F3F3] mb-3 group-hover:translate-x-1 transition-transform duration-500">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#A1A1AA]/60 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Stack + Role ─────────────────────────────────────────────────────────────
const STACK = ["React", "TypeScript", "Supabase", "Tailwind CSS", "Anthropic Claude API"]

function StackSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 border-y border-[#0D1A2E]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Stack</p>
            <div className="flex flex-wrap gap-3">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-light text-[#A1A1AA] border border-[#1A2540] px-4 py-2 rounded-full hover:border-amber-400/30 hover:text-[#F3F3F3] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Role</p>
            <p className="text-2xl font-extralight text-[#F3F3F3] mb-4">
              Founder — Solo Builder
            </p>
            <p className="text-[#A1A1AA] font-light leading-relaxed">
              Owned the entire product vision, roadmap, and every feature decision. Used AI-assisted
              development to ship the full platform solo from zero — no co-founder, no engineers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Founder Takeaway ─────────────────────────────────────────────────────────
const TAKEAWAYS = [
  { stat: "0 → 1", label: "Built from scratch", sub: "Zero to shipped" },
  { stat: "Solo", label: "Full ownership", sub: "Vision through execution" },
  { stat: "AI-native", label: "Claude API at core", sub: "Not bolted on — central to the product" },
  { stat: "PM + Eng", label: "Dual lens", sub: "Product thinking + code shipped" },
]

function FounderCard() {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#040A14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-amber-400/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400">Takeaway</span>
          </div>
          <p className="text-4xl md:text-5xl font-extralight text-[#F3F3F3] max-w-xl leading-[1.1] tracking-[-0.02em]">
            Founder. Solo. AI-native.<br />Shipped.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#0D1A2E]"
        >
          {TAKEAWAYS.map((item) => (
            <motion.div
              key={item.stat}
              variants={fadeUp}
              className="bg-[#060C17] p-8 md:p-10 group hover:bg-[#08111F] transition-colors duration-500"
            >
              <p className="text-4xl md:text-5xl font-extralight text-amber-400 mb-3 tracking-[-0.02em]">
                {item.stat}
              </p>
              <p className="text-sm font-light text-[#F3F3F3] mb-1">{item.label}</p>
              <p className="text-xs text-[#A1A1AA]/50 leading-relaxed">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UniCirclePage() {
  return (
    <div className="min-h-screen bg-[#060C17] text-[#F3F3F3]">

      {/* ── Fixed header ── */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 bg-[#060C17]/80 backdrop-blur-md border-b border-[#0D1A2E]"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[#A1A1AA] hover:text-[#F3F3F3] transition-colors duration-300 text-sm"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="tracking-[0.05em]">Portfolio</span>
        </Link>
        <GlowButton href={DEMO_URL}>View Live Product</GlowButton>
      </motion.header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 overflow-hidden pt-24">
        {/* Ambient gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px circle at 50% 55%, rgba(245,158,11,0.07), transparent 60%)",
          }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <span className="w-8 h-[1px] bg-amber-400/50" />
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400">
              Case Study — SaaS Platform
            </span>
            <span className="w-8 h-[1px] bg-amber-400/50" />
          </motion.div>

          {/* Problem */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-[#A1A1AA] font-light mb-3 tracking-[-0.01em]"
          >
            University clubs manage hundreds of applicants manually.
          </motion.p>

          {/* Solution */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl font-light mb-14 tracking-[-0.01em] text-amber-400"
          >
            UniCircle automates it.
          </motion.p>

          {/* Product name */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,12vw,8rem)] font-extralight tracking-[-0.04em] leading-[0.9] mb-14"
          >
            <span className="text-[#F3F3F3]">UniCircle</span>
            <br />
            <span className="gradient-text-gold">Connect</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-base md:text-lg text-[#A1A1AA] font-light max-w-xl mx-auto mb-14 leading-relaxed"
          >
            AI-powered recruitment platform for university clubs — from application to decision, automated.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.85 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <GlowButton href={DEMO_URL}>View Live Product</GlowButton>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {["React", "Supabase", "Claude API"].map((t) => (
                <span
                  key={t}
                  className="text-xs text-[#A1A1AA]/60 border border-[#1A2540] px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative corners */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="absolute top-24 right-8 w-16 h-16 border-t border-r border-amber-400/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-amber-400/20"
        />
      </section>

      {/* ── Problem metrics ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-y border-[#0D1A2E] bg-[#040A14]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0D1A2E]"
          >
            {[
              {
                n: "400+",
                label: "Applications per cycle",
                sub: "Per competitive club, per semester",
              },
              {
                n: "0",
                label: "Standardized review tools",
                sub: "The status quo before UniCircle",
              },
              {
                n: "Hours",
                label: "Lost to manual screening",
                sub: "Every single recruitment cycle",
              },
            ].map((item) => (
              <div key={item.n} className="bg-[#040A14] px-10 py-10">
                <p className="text-4xl md:text-5xl font-extralight text-amber-400 mb-2 tracking-[-0.02em]">
                  {item.n}
                </p>
                <p className="text-sm font-light text-[#F3F3F3] mb-1">{item.label}</p>
                <p className="text-xs text-[#A1A1AA]/50">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AI Pipeline (sticky scroll) ── */}
      <AIPipelineSection />

      {/* ── Standouts ── */}
      <StandoutsSection />

      {/* ── Full platform features ── */}
      <FeaturesSection />

      {/* ── Stack + role ── */}
      <StackSection />

      {/* ── Founder takeaway ── */}
      <FounderCard />

      {/* ── Final CTA ── */}
      <section className="py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-[#0D1A2E]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px circle at 50% 50%, rgba(245,158,11,0.06), transparent 60%)",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center relative"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-amber-400/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400">Live Product</span>
            <span className="w-12 h-[1px] bg-amber-400/30" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#F3F3F3] mb-6 tracking-[-0.03em] leading-[1.05]"
          >
            See it in action.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#A1A1AA] font-light mb-14 leading-relaxed">
            The full platform is live and deployed. Explore the AI screening flow, the recruitment
            pipeline, and the club discovery experience firsthand.
          </motion.p>
          <motion.div variants={fadeUp}>
            <GlowButton href={DEMO_URL}>View Live Product</GlowButton>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 pt-8 border-t border-[#0D1A2E] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#A1A1AA]/50 max-w-6xl mx-auto"
        >
          <Link
            href="/"
            className="hover:text-[#A1A1AA] transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to portfolio
          </Link>
          <span>© 2025 Jaden Rones · UniCircle Connect</span>
        </motion.div>
      </section>
    </div>
  )
}
