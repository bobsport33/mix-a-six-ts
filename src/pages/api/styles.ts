import { prisma } from "@/utlis/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ data: await prisma.styles.findMany() });
}
