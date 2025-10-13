"use client"

import { motion } from "framer-motion"
import { achievementsData } from "@/data/achievements"

export function AchievementsSection() {
  return (
    <section className="py-20 px-6 container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Achievements & Highlights
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl border border-border bg-background/70 hover:shadow-lg transition-all"
          >
            {/* Glowing Icon */}
            <div
              className={`absolute -top-5 left-5 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${ach.highlight} text-white shadow-md`}
            >
              <span className="text-lg">{ach.icon}</span>
            </div>

            {/* Content */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-2">{ach.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{ach.description}</p>
              <p className="text-xs text-primary font-medium">{ach.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}