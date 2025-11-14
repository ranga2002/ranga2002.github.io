"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <section className="py-20 px-6 container mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        My Resume
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-muted-foreground mb-10 max-w-3xl mx-auto"
      >
        You can view my detailed experience, education, and projects here or download it directly as a PDF.
      </motion.p>

      {/* Resume Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <Link href="/resume.pdf" target="_blank">
          <Button className="flex items-center gap-2 mx-auto">
            <Download size={18} />
            Download Resume
          </Button>
        </Link>
      </motion.div>

      {/* Resume Preview (Embedded PDF) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full flex justify-center"
      >
        <iframe
          src="/resume.pdf"
          className="w-full h-[800px] border border-border rounded-xl shadow-md"
        ></iframe>
      </motion.div>
    </section>
  )
}