import Image from "next/image"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { urlFor } from "../sanity"
import { PageInfo } from "../types"
import BackgroundCircles from "./BackgroundCircles"

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, the name's ${pageInfo?.name}`,
      "GuyWhoLovesCoffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <div className="relative mx-auto h-32 w-32">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Faris' avatar"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[10px] text-gray-500 md:text-base md:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="px-10 text-xl font-semibold md:text-2xl lg:text-4xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="inline-flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-4 pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#services">
            <button className="heroButton">Services</button>
          </a>
          <a href="#experiences">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
          <a href="#contact">
            <button className="heroButton">Get in touch</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
