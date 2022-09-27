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
    <article className="flex h-[600px] w-[300px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900]">
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
        className="relative h-32 w-32 flex-shrink-0 rounded-full xl:h-[200px] xl:w-[200px]"
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
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{experience?.company}</p>
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
        <p className="py-5 uppercase text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          {experience?.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
