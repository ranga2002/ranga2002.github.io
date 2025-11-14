import { projectsData } from "@/data/projects"
import { ProjectCard } from "../Card/ProjectCard"

export function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-6 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}
