import { groq } from "next-sanity"

import { sanityClient } from "../sanity"
import { Skill } from "../types"

export const fetchSkills = async () => {
  const query = groq`*[_type == "skill"] | order(progress desc) {
  ...,
}`
  const skills: Skill[] = await sanityClient.fetch(query)

  return skills
}
