// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"

import { PageInfo } from "../../types.d"
import { sanityClient } from "../../sanity"

type Data =
  | {
      pageInfo: PageInfo
    }
  | { error: string }

const query = groq`*[_type == "pageInfo"][0]`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const pageInfo: PageInfo = await sanityClient.fetch(query)
    res.status(200).json({ pageInfo })
  } catch (err) {
    res.status(500).json({ error: "unknown_error" })
  }
}
