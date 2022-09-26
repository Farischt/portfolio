import { groq } from "next-sanity"

import { sanityClient } from "../sanity"
import { Project } from "../types"

export const fetchProjects = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`)
  // const data = await res.json()
  // const projects: Project[] = data.projects
  const query = groq`*[_type == "project"] {
  ...,
  technologies[]->
}`
  const projects: Project[] = await sanityClient.fetch(query)

  return projects
}
