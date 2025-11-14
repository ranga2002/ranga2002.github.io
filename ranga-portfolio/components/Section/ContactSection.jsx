"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 container mx-auto">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-background/70 border border-border rounded-2xl p-8 shadow-sm"
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
            <Textarea name="message" rows="4" required placeholder="Write your message here..." />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <Link
            href="mailto:chakilamsriranga@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <Mail size={22} />
          </Link>
          <Link
            href="https://linkedin.com/in/srirangabharadwaj"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="https://github.com/ranga2002"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Github size={22} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}