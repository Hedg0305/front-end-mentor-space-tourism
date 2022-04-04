import type { NextApiRequest, NextApiResponse } from "next";

import Crew from "../../../crew.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Crew);
}
