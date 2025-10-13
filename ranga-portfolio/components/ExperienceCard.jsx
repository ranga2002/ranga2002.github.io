"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function ExperienceCard({ exp }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-border bg-background/60 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-semibold">{exp.role}</h3>
      <p className="text-sm text-muted-foreground mb-2">
        {exp.company} — {exp.location}
      </p>
      <p className="text-xs text-primary mb-4">{exp.period}</p>

      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
        {exp.responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((t, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}