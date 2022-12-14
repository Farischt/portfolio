import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "../types"

type Props = {
  experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-center text-lg uppercase tracking-[20px] text-gray-500 md:text-xl lg:text-2xl">
        Experience
      </h3>

      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
