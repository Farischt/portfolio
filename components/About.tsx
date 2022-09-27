import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "../types"
import { urlFor } from "../sanity"

type Props = {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 h-32 w-32 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Faris' image"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-justify text-sm md:text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}

export default About
