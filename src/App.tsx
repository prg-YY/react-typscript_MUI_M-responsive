import { IntroSection } from "./sections"
import { SectionIdEnum } from "./types"
import { Layout } from "./components"
// import { Appbar } from "./components/Navbar"
import { SectionContainer } from "components/section-container/SectionContainer"
import { Divider } from "@mui/material"

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.projects,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.contact,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.skills,
    component: <IntroSection />,
  },
]

const App: React.FC = () => {
  return (
    <Layout>
      {/* <Appbar /> */}

      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            <Divider />
            {component}
          </SectionContainer>
        )
      })}
    </Layout>
  )
}

export default App
