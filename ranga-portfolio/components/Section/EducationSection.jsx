"use client"

import { motion } from "framer-motion"
import { EducationCard } from "../Card/EducationCard"
import { educationData, certificationsData } from "@/data/education"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 container mx-auto">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Education & Certifications
      </motion.h2>

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
              {cert.title} — <span className="text-muted-foreground ml-1">{cert.provider}</span>
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  )
}