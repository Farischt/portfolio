import { groq } from "next-sanity"

import { sanityClient } from "../sanity"
import { Social } from "../types"

export const fetchSocials = async () => {
  const query = groq`*[_type == "social"] {
  ...,
}`
  const socials: Social[] = await sanityClient.fetch(query)

  return socials
}
