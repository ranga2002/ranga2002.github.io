"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [redirectUrl, setRedirectUrl] = useState(() => {
    const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
    return envBase ? `${envBase}/thank-you` : ""
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin.replace(/\/$/, "")
      setRedirectUrl(`${origin}/thank-you`)
    }
  }, [])

  return (
    <section id="contact" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 space-y-3"
      >
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Tell me about your next AI, ML, or cloud project. I'm quick to respond and happy to share ideas
          even if you're still exploring.
        </p>
      </motion.div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr,1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/80 bg-gradient-to-br from-primary/10 via-background to-emerald-400/10 p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Prefer a direct note?</h3>
            <p className="text-muted-foreground">
              Reach me directly at{" "}
              <a
                href="mailto:chakilamsriranga@gmail.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                chakilamsriranga@gmail.com
              </a>{" "}
              or drop a message on LinkedIn.
            </p>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p>Available for collaborations, freelance builds, and technical consulting.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p>Focus areas: generative AI, ML systems, full-stack web, and cloud deployments.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p>Time zones: EST-friendly with flexible hours for global teams.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:chakilamsriranga@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                Email
              </Link>
              <Link
                href="https://linkedin.com/in/srirangabharadwaj"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/ranga2002"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Github size={18} />
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background/80 border border-border/80 rounded-2xl p-8 shadow-sm"
          >
            <form
              action="https://formsubmit.co/chakilamsriranga@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* Hidden Config for FormSubmit */}
              <input type="hidden" name="_subject" value="New message from your portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value={redirectUrl} />

              {/* Inputs */}
              <div>
                <label className="block text-sm mb-2">Name</label>
                <Input type="text" name="name" required placeholder="Your name" />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <Input type="email" name="email" required placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <Textarea name="message" rows="4" required placeholder="Tell me about your project..." />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
