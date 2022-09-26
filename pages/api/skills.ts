// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

import { Skill } from "../../types.d"
import { sanityClient } from "../../sanity"

type Data =
  | {
      skills: Skill[]
    }
  | { error: string }

const query = groq`*[_type == "skill"] {
  ...,
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const skills: Skill[] = await sanityClient.fetch(query)
    res.status(200).json({ skills })
  } catch (err) {
    res.status(500).json({ error: "unknown_error" })
  }
}
