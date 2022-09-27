import React from "react"
import { motion } from "framer-motion"

import SkillCard from "./SkillCard"
import { Skill } from "../types"

type Props = {
  skills: Skill[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center overflow-hidden text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>
      <h3 className="absolute top-32 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCard key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
