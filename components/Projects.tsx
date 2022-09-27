import React from "react"
import { motion } from "framer-motion"

import { Project } from "../types"
import { urlFor } from "../sanity"

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <a
              href={project.linkToBuild}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src={urlFor(project.image).url()}
                alt=""
                className="h-48 md:h-64"
              />
            </a>

            <div className="max-w-6xl space-y-5 px-0 md:space-y-10 md:px-10">
              <h4 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {index + 1} of {projects.length}
                </span>{" "}
                : {project.title}
              </h4>
              <div className="my-2 flex items-center justify-center space-x-2">
                {project.technologies.map((project) => (
                  <img
                    key={project._id}
                    className="h-5 w-5 rounded-full object-cover object-center"
                    src={urlFor(project?.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-justify text-xs md:text-base lg:text-lg">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
        <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
          <div className="max-w-6xl space-y-5 px-0 md:space-y-10 md:px-10">
            <a
              href={"https://github.com/Farischt"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="animate-pulse text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  See more on my github page
                </span>
              </h4>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </motion.div>
  )
}

export default Projects
