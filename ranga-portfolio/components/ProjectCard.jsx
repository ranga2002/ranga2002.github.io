"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover:shadow-md transition-shadow border border-border bg-background/70">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
              >
                <Github size={16} /> Code
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
              >
                <ExternalLink size={16} /> Live
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
