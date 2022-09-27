import React from "react"
import { motion } from "framer-motion"
import {
  ServerStackIcon,
  CircleStackIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid"

const Services = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[15px] text-gray-500">
        My Services
      </h3>
      <h3 className="absolute top-32 hidden text-sm uppercase tracking-[3px] text-[#F7AB0A]/40 md:inline">
        What do I do ?
      </h3>

      <div className="flex w-full flex-col items-center justify-center space-y-10 p-10 md:flex-row md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center justify-center space-y-4 rounded bg-[#292929] p-5 md:h-72 md:w-96">
          <GlobeAltIcon className="h-6 w-6 animate-pulse text-[#F7AB0A] md:h-12 md:w-12" />
          <h4 className="text-sm font-bold tracking-widest md:text-xl">
            Web Applications
          </h4>
          <p className="px-10 text-justify text-xs font-light md:text-base">
            I create dynamic and complex web applications as well as static
            websites. I also take care of the creation of dedicated web servers.
          </p>
        </div>

        <div className="w-18 flex flex-col items-center justify-center space-y-4 rounded bg-[#292929] p-5 md:h-72 md:w-96">
          <CircleStackIcon className="h-6 w-6 animate-pulse text-[#F7AB0A] md:h-12 md:w-12" />
          <h4 className="text-sm font-bold tracking-widest md:text-xl">
            Servers & Databases
          </h4>
          <p className="px-10 text-justify text-xs font-light md:text-base">
            The creation of back-end web servers and database to communicate and
            manage your data to the front-end.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Services
