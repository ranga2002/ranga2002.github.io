"use client"

import { motion } from "framer-motion"
import { EducationCard } from "../Card/EducationCard"
import { educationData, certificationsData } from "@/data/education"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A strong academic foundation paired with continuous learning across cloud, AI, and modern
            engineering practices.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certificationsData.map((cert, i) => (
              <Badge key={i} variant="secondary" className="text-sm px-4 py-2">
                {cert.title}
                <span className="text-muted-foreground ml-2">
                  {cert.provider} / {cert.year}
                </span>
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
