import { prisma } from "@/utlis/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(await prisma.beer.findMany());
    res.status(200).json({ data: await prisma.beer.findMany() });
}
