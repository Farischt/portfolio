import React from "react"
import Image from "next/image"
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
      <h3 className="absolute top-20 text-lg uppercase tracking-[20px] text-gray-500 md:text-xl lg:text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-32 w-32 md:h-64 md:w-96"
            >
              <Image
                src={urlFor(project.image).url()}
                alt=""
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </motion.div>

            <div className="max-w-6xl space-y-6 px-0 md:space-y-10 md:px-10">
              <h4 className="cursor-pointer text-center text-2xl font-semibold transition-all duration-200 ease-in-out hover:scale-110 sm:text-3xl md:text-4xl">
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#F7AB0A]/50"
                >
                  {" "}
                  {project.title}{" "}
                </a>
              </h4>
              <div className="my-2 flex items-center justify-center space-x-2">
                {project.technologies.map((project) => (
                  <div
                    key={project._id}
                    className="relative h-7 w-7 rounded-full"
                  >
                    <Image
                      className="rounded-full"
                      src={urlFor(project?.image).url()}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <p className="text-justify text-xs md:text-base lg:text-lg">
                {project.summary}
              </p>
              <div className="flex items-center justify-center">
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-transparent bg-[#F7AB0A]/40 px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F7AB0A]/40 focus:ring-offset-2 hover:bg-[#F7AB0A]/60"
                >
                  Build
                </a>
              </div>
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
