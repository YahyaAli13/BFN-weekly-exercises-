import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from '../../lib/posts';

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(posts);
};
