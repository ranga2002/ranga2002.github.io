"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Download, FileText, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const highlights = [
  "Ship generative AI and ML features end-to-end with measurable impact.",
  "Deliver full-stack experiences (Next.js/Django) with CI/CD on AWS and GCP.",
  "Prioritize performance, accessibility, and observability for reliability.",
]

const quickStats = [
  {
    label: "Experience",
    title: "AI/ML & Cloud Engineer",
    meta: "IvaTech Consulting (Remote)",
  },
  {
    label: "Education",
    title: "PG Dip Web Development",
    meta: "Conestoga College, ON",
  },
]

export function ResumeHighlightSection() {
  const [open, setOpen] = useState(false)
  const pdfHref = "/resume.pdf"

  useEffect(() => {
    const handler = () => setOpen(true)
    if (typeof window !== "undefined") {
      window.addEventListener("openResumePreview", handler)
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("openResumePreview", handler)
      }
    }
  }, [])

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Resume
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Resume Snapshot</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Snapshot of current focus areas. Preview the PDF inline or download a copy.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr,1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/80 bg-background/80 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">Summary</p>
                <h3 className="text-xl font-semibold">What I do</h3>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Updated regularly
              </span>
            </div>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border/70 bg-background/70 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</p>
                  <p className="text-base font-semibold text-primary mt-1">{stat.title}</p>
                  <p className="text-muted-foreground">{stat.meta}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={pdfHref} target="_blank">
                <Button size="lg" className="inline-flex items-center gap-2">
                  <Download size={18} />
                  Download PDF
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="inline-flex items-center gap-2" onClick={() => setOpen(true)}>
                <FileText size={18} />
                Preview inline
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="ghost">
                  Let's talk
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-5xl">
            <div className="bg-background border border-border/80 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/80">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Resume preview
                </div>
                <div className="flex items-center gap-2">
                <Link
                  href={pdfHref}
                  target="_blank"
                  aria-label="Open PDF in new tab"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 p-2 text-primary hover:border-primary/60 hover:text-primary transition-colors"
                >
                  <ArrowUpRight size={16} />
                </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 p-2 hover:border-primary/60 hover:text-primary transition-colors"
                    aria-label="Close preview"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="bg-muted/10">
                <iframe
                  src={pdfHref}
                  title="Resume PDF modal"
                  className="w-full h-[80vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
