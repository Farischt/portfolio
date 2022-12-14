import React from "react"
import { motion } from "framer-motion"
import { Skill } from "../types"
import { urlFor } from "../sanity"
import Image from "next/image"

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative h-16 w-16 rounded-full border border-gray-500 bg-white/20 object-cover shadow-lg filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
      >
        <Image
          src={urlFor(skill.image).url()}
          alt="Skill's logo"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute h-16 w-16 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-[#F7AB0A] group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32"
      >
        <div className="flex h-full flex-col items-center justify-center space-y-2">
          <p className="text-lg font-bold text-transparent opacity-100 transition duration-300 ease-in-out group-hover:text-white sm:text-2xl md:text-3xl">
            {skill.progress}%
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Skill
