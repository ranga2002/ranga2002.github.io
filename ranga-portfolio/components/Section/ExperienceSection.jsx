import { ExperienceCard } from "../Card/ExperienceCard"
import { experienceData } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Pairing generative AI, machine learning, and cloud to deliver products that are resilient,
            performant, and easy to iterate on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experienceData.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
