"use client"

import { motion } from "framer-motion"
import { achievementsData } from "@/data/achievements"

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements & Highlights</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Milestones that reflect momentum across community building, research, and continuous learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-border/80 bg-gradient-to-b from-background/90 to-background/70 transform transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div
              className={`absolute -top-5 left-5 w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r ${ach.highlight} text-base shadow-md`}
            >
              <span className="text-sm font-semibold tracking-wide">{ach.icon}</span>
            </div>

              <div className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold leading-snug">{ach.title}</h3>
                  <span className="text-xs font-medium text-primary rounded-full border border-border/80 px-3 py-1">
                    {ach.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
