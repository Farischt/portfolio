// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

import { Project } from "../../types.d"
import { sanityClient } from "../../sanity"

type Data =
  | {
      projects: Project[]
    }
  | { error: string }

const query = groq`*[_type == "project"] {
  ...,
  technologies[]->
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const projects: Project[] = await sanityClient.fetch(query)
    res.status(200).json({ projects })
  } catch (err) {
    res.status(500).json({ error: "unknown_error" })
  }
}
