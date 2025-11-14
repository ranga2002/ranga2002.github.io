import {HeroSection} from "@/components/Section/HeroSection"
import {ExperienceSection} from "@/components/Section/ExperienceSection"
import {ProjectSection} from "@/components/Section/ProjectSection"
import {SkillSection} from "@/components/Section/SkillSection"
import {EducationSection} from "@/components/Section/EducationSection"
import {AchievementsSection} from "@/components/Section/AchievementsSection"
import {ContactSection} from "@/components/Section/ContactSection"


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
      <ContactSection />
    </main>
  )
}
