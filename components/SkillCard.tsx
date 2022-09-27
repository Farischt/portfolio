import React from "react"
import { motion } from "framer-motion"
import { Skill } from "../types"
import { urlFor } from "../sanity"

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="h-12 w-12 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
        src={urlFor(skill.image).url()}
        alt="Skill's logo"
      />
      <div className="absolute h-12 w-12 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-[#F7AB0A] group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full flex-col items-center justify-center space-y-2">
          {/* <p className="text-xs font-bold text-black opacity-100 sm:text-sm md:text-lg">
            {skill.title}
          </p> */}
          <p className="text-lg font-bold text-white opacity-100 sm:text-2xl md:text-3xl">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
