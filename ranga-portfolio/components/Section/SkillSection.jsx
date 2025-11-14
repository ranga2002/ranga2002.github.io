"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/data/skills"
import { Badge } from "@/components/ui/badge"

export function SkillSection() {
  return (
    <section id="skills" className="py-20 px-6 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Skills & Competencies
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 border border-border rounded-2xl bg-background/70 shadow-sm hover:shadow-md transition-shadow"
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
    </section>
  )
}