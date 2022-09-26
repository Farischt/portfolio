// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

import { Experience } from "../../types.d"
import { sanityClient } from "../../sanity"

type Data =
  | {
      experiences: Experience[]
    }
  | { error: string }

const query = groq`*[_type == "experience"] {
  ...,
  technologies[]->
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const experiences: Experience[] = await sanityClient.fetch(query)
    res.status(200).json({ experiences })
  } catch (err) {
    res.status(500).json({ error: "unknown_error" })
  }
}
