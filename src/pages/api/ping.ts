import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    ok: true,
    method: req.method,
    message: "RSS Overview API is ready."
  });
}
