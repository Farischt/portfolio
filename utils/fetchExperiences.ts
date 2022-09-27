import { groq } from "next-sanity"

import { sanityClient } from "../sanity"
import { Experience } from "../types"

export const fetchExperiences = async () => {
  const query = groq`*[_type == "experience"] | order(dateStarted desc) {
  ...,
  technologies[]->
}`

  const experiences: Experience[] = await sanityClient.fetch(query)
  return experiences
}
