import React from "react"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

import { Social } from "../types"

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          )
        })}
      </motion.div>
      <Link href="#contact">
        <motion.div
          className="flex cursor-pointer flex-row items-center text-gray-300"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
      </Link>
    </header>
  )
}

export default Header
