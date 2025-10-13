"use client"

import { motion } from "framer-motion"

export function EducationCard({ edu, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative pl-10"
    >
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 h-full border-l border-border" />

      {/* Dot */}
      <div
        className={`absolute left-[7px] top-3 w-3 h-3 rounded-full bg-gradient-to-r ${edu.color}`}
      />

      {/* Card */}
      <div className="bg-background/60 border border-border rounded-xl p-5 mb-8 hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold">{edu.degree}</h3>
        <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
        <p className="text-xs text-primary mb-3">{edu.period}</p>

        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {edu.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
