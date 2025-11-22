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
      <Card className="group transform transition-transform hover:-translate-y-1 hover:shadow-lg border border-border/80 bg-background/80">
        <CardHeader className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg font-semibold leading-snug">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground">#{project.tech[0] ?? "build"}</p>
          </div>
          {project.live && (
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Live
            </span>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
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
          <div className="flex gap-4 text-sm">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github size={16} /> Code
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
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
