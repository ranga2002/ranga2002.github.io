import { ExperienceCard } from "./ExperienceCard"
import { experienceData } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section className="py-20 px-6 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Professional Experience
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {experienceData.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  )
}