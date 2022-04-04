import type { NextApiRequest, NextApiResponse } from "next";

import Technologies from "../../../technologies.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Technologies);
}
