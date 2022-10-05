import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../types"
import { urlFor } from "../sanity"
import Image from "next/image"

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex h-[500px] w-[300px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:h-[600px] md:w-[600px] lg:h-[600px]  xl:w-[650px]">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="relative h-24 w-24 flex-shrink-0 rounded-full md:h-32 md:w-32 xl:h-[200px] xl:w-[200px]"
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt="Experience's image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </motion.div>
      <div className="overflow-x-hidden overflow-y-scroll px-0 md:px-10">
        <h4 className="text-lg font-light md:text-2xl lg:text-4xl">
          {experience?.jobTitle}
        </h4>
        <p className="mt-1 text-base font-bold md:text-xl lg:text-2xl">
          {experience?.company}
        </p>
        <div className="my-2 flex space-x-2">
          {experience?.technologies.map((technology) => (
            <div
              key={technology._id}
              className="relative h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
            >
              <Image
                src={urlFor(technology?.image).url()}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-full"
                alt=""
              />
            </div>
          ))}
        </div>
        <p className="py-5 text-xs uppercase text-gray-300 md:text-base">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 list-disc space-y-4 text-justify text-xs md:text-base lg:text-lg">
          {experience?.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
