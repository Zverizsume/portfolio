import Layout from '../components/layout'
import NavLeft from '../components/navLeft'
import { Box } from '@mui/material'

import HeaderSection from '../components/home/headerSection'
import AboutSection from '../components/home/aboutSection'
import SkillSection from '../components/home/skillsSection'

export default function Home() {

  const pageSEOData = {
    title : 'Home',
    desc: 'Home page',
    canonical: ''
  }

  return (
    <Layout pageSEOData = {pageSEOData}>
      <Box
        justifyContent={'center'}
        alignItems={'center'}
      >
        <NavLeft>
          <HeaderSection />
          <AboutSection />
          <SkillSection />
        </NavLeft>
      </Box>
    </Layout>
  )
}
