import { groq } from "next-sanity"

import { sanityClient } from "../sanity"
import { Skill } from "../types"

export const fetchSkills = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`)
  // const data = await res.json()
  // const skills: Skill[] = data.skills
  const query = groq`*[_type == "skill"] | order(progress desc) {
  ...,
}`
  const skills: Skill[] = await sanityClient.fetch(query)

  return skills
}
