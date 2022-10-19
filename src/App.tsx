import { IntroSection } from "./sections"
import { SectionIdEnum } from "./types"
import { Layout } from "./components"
import { Appbar } from "./components/Navbar"

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  // {
  //   sectionId: SectionIdEnum.about,
  //   component: <AboutSection />,
  // },
  // {
  //   sectionId: SectionIdEnum.projects,
  //   component: <ProjectsSection />,
  // },
  // {
  //   sectionId: SectionIdEnum.contact,
  //   component: <ContactSection />,
  // },
  // {
  //   sectionId: SectionIdEnum.skills,
  //   component: <SkillsSection />,
  // },
]

const App: React.FC = () => {
  return (
    <Layout>
      <Appbar />
      {sections.map(({ component }) => {
        return component
      })}
    </Layout>
  )
}

export default App
