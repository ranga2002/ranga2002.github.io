"use client"

import { motion } from "framer-motion"
import { Download, FileText, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Resume
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Resume & Highlights</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my recent work across generative AI, ML systems, and cloud-native delivery. Download the PDF or open it inline below.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/80 bg-background/80 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">TL;DR</p>
                <h3 className="text-xl font-semibold">What I do</h3>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Updated regularly
              </span>
            </div>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Build and ship generative AI and ML features end-to-end with measurable impact.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Deliver full-stack web experiences (Next.js/Django) with CI/CD and cloud infra on AWS/GCP.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Focus on performance, accessibility, and observability to keep products reliable.
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Experience</p>
                <p className="text-base font-semibold text-primary mt-1">AI/ML & Cloud Engineer</p>
                <p className="text-muted-foreground">IvaTech Consulting (Remote)</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Education</p>
                <p className="text-base font-semibold text-primary mt-1">PG Dip Web Dev</p>
                <p className="text-muted-foreground">Conestoga College, ON</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/resume.pdf" target="_blank">
                <Button size="lg" className="inline-flex items-center gap-2">
                  <Download size={18} />
                  Download PDF
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                  <FileText size={18} />
                  Open in new tab
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="ghost" className="inline-flex items-center gap-2">
                  <Mail size={18} />
                  Let's talk
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/80 bg-background/70 shadow-lg overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/80">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Inline preview
              </div>
              <Link href="/resume.pdf" target="_blank" className="text-sm text-primary hover:underline">
                Open PDF
              </Link>
            </div>
            <div className="bg-muted/10">
              <iframe
                src="/resume.pdf"
                title="Resume PDF"
                className="w-full h-[900px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
