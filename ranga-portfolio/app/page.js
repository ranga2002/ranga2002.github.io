import {HeroSection} from "@/components/HeroSection"
import {ExperienceSection} from "@/components/ExperienceSection"
import {ProjectSection} from "@/components/ProjectSection"
import {SkillSection} from "@/components/SkillSection"
import {EducationSection} from "@/components/EducationSection"
import {AchievementsSection} from "@/components/AchievementsSection"

export default function Home() {
  return (
    <main>
      {/* <h1 className="text-4xl font-bold">Sri Ranga Bharadwaj Portfolio</h1> */}
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <EducationSection />
      <AchievementsSection />
    </main>
  )
}
