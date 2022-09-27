import { groq } from "next-sanity"

import { sanityClient } from "../sanity"
import { Experience } from "../types"

export const fetchExperiences = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences`)
  // const data = await res.json()
  // const experiences: Experience[] = data.experiences

  const query = groq`*[_type == "experience"] | order(dateStarted desc) {
  ...,
  technologies[]->
}`

  const experiences: Experience[] = await sanityClient.fetch(query)
  return experiences
}
