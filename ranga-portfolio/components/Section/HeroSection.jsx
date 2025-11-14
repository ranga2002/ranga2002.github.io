"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Sri Ranga Bharadwaj Chakilam
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
      >
        AI/ML & Cloud Engineer specializing in Generative AI, Prompt Engineering,
        and Full-Stack Web Development.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex gap-4 mt-8"
      >
        <Link href="/projects">
          <Button variant="default">View Projects</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Get in Touch</Button>
        </Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-6 mt-10"
      >
        <Link href="https://github.com/ranga2002" target="_blank" className="hover:text-primary transition-colors">
          <Github size={26} />
        </Link>
        <Link href="https://linkedin.com/in/srirangabharadwaj" target="_blank" className="hover:text-primary transition-colors">
          <Linkedin size={26} />
        </Link>
        <Link href="mailto:chakilamsriranga@gmail.com" className="hover:text-primary transition-colors">
          <Mail size={26} />
        </Link>
      </motion.div>
    </section>
  )
}
