import type { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { ArrowUpIcon } from "@heroicons/react/24/solid"

import About from "../components/About"
import Contact from "../components/Contact"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import WorkExperience from "../components/WorkExperience"
import { Experience, PageInfo, Project, Skill, Social } from "../types"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchSocials } from "../utils/fetchSocials"
import Services from "../components/Services"

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
  socials: Social[]
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Faris Chtatou</title>
        <meta
          name="description"
          content="Hi ! I'm Faris Chtatou and I'll help you build your dream ! I'm a Junior Fullstack Developer based in Paris, France, currently studying a Master in Software Engineering at Efrei Paris! At the moment of reading, I'm a Fullstack Web Developer intern at DialOnce."
        />
        <link rel="icon" href="/avatar.jpeg" />
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="services" className="snap-center">
        <Services />
      </section>
      <section id="experiences" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <div className="cursor-pointer rounded-full">
              <ArrowUpIcon className="h-10 w-10 rounded-full bg-[#F7AB0A] grayscale hover:grayscale-0" />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const projects: Project[] = await fetchProjects()
  const skills: Skill[] = await fetchSkills()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 30,
  }
}
