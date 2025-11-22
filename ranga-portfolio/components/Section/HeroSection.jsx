"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featurePills = [
  { label: "Core", value: "GenAI, CV, NLP" },
  { label: "Cloud", value: "AWS / GCP / Firebase" },
  { label: "Web", value: "Next.js / Django / REST" },
]

const statCards = [
  {
    title: "Product thinking",
    value: "Impact over novelty",
    detail: "Shipable AI features with measurable outcomes.",
  },
  {
    title: "Delivery",
    value: "Full-stack builds",
    detail: "From prompt engineering to dashboards and auth.",
  },
  {
    title: "Reliability",
    value: "Performance & A11y",
    detail: "Audits, lazy loading, semantics, and observability.",
  },
]

const focusList = [
  {
    title: "GenAI product experiments",
    blurb: "Prompt engineering, evaluations, and safety guardrails.",
  },
  {
    title: "Cloud-native shipping",
    blurb: "Next.js + Django services deployed on AWS/GCP with CI/CD.",
  },
  {
    title: "Data to experience",
    blurb: "Computer vision and NLP models wired into polished UIs.",
  },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/60 to-background" />
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.12fr,0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.12em] text-muted-foreground shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            AI/ML & Cloud Engineer
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Designing reliable AI experiences{" "}
            <span className="bg-gradient-to-r from-primary via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              for people
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl">
            I blend generative AI, machine learning, and cloud-native engineering to deliver products
            that feel intentional, fast, and human-friendly.
          </p>

          <div className="flex flex-wrap gap-3">
            {featurePills.map((pill) => (
              <span
                key={pill.label}
                className="rounded-full border border-border/60 bg-background/80 px-3 py-2 text-sm text-foreground shadow-sm"
              >
                <span className="text-muted-foreground">{pill.label}</span>
                <span className="ml-2 font-semibold">{pill.value}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/#projects">
              <Button size="lg">See recent work</Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline">
                Book a call
              </Button>
            </Link>
            <Link href="/resume">
              <Button size="lg" variant="ghost">
                View resume
              </Button>
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {statCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{card.title}</p>
                <p className="mt-2 text-base font-semibold text-primary">{card.value}</p>
                <p className="text-sm text-muted-foreground">{card.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-br from-primary/15 via-background to-emerald-400/12 blur-2xl" />
          <div className="relative rounded-3xl border border-border bg-background/90 p-8 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-primary">Currently shipping</p>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Open to collaborations
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {focusList.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-emerald-400" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.blurb}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="mailto:chakilamsriranga@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                Email
              </Link>
              <Link
                href="https://linkedin.com/in/srirangabharadwaj"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/ranga2002"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Github size={18} />
                GitHub
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
