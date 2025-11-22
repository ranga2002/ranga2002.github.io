"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/data/skills"
import { Badge } from "@/components/ui/badge"

export function SkillSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Competencies</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The tools and disciplines I rely on to move fast, keep quality high, and ship end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-border/80 rounded-2xl bg-background/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
