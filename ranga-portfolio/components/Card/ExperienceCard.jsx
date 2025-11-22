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
      className="transform transition-transform p-6 rounded-2xl border border-border/80 bg-background/80 shadow-sm hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">{exp.company}</p>
          <h3 className="text-xl font-semibold leading-snug">{exp.role}</h3>
        </div>
        <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-primary">
          {exp.period}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span>{exp.location}</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {exp.responsibilities.map((item, idx) => (
          <li key={idx} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.tech.map((t, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}
