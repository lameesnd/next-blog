import { NextApiRequest, NextApiResponse } from "next";

//https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=<token>

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    const path = req.query.path as string;
    await res.revalidate(path)
    return res.json({ revalidated: true })
}