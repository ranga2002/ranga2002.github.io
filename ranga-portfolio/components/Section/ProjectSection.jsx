import { projectsData } from "@/data/projects"
import { ProjectCard } from "../Card/ProjectCard"

export function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A mix of generative AI, computer vision, and web engineering work shipped across different
            stacks and deployment targets.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
