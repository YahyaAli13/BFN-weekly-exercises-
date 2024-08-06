import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from '../../../lib/posts';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    // Ensure `id` is a string
    if (Array.isArray(id)) {
        res.status(400).json({ message: 'Invalid ID' });
        return;
    }

    const post = posts.find((post) => post.id === id);

    if (post){
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};
