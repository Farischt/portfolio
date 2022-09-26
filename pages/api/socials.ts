// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

import { Social } from "../../types.d"
import { sanityClient } from "../../sanity"

type Data =
  | {
      socials: Social[]
    }
  | { error: string }

const query = groq`*[_type == "social"] {
  ...,
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const socials: Social[] = await sanityClient.fetch(query)
    res.status(200).json({ socials })
  } catch (err) {
    res.status(500).json({ error: "unknown_error" })
  }
}
