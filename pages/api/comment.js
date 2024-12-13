import { mongooseConnect } from "@/lib/mongoose";
import { Comment } from "@/models/Comment";

export default async function handle(req, res) {
    // If authenticated, connect to MongoDB
    await mongooseConnect();

    const { method } = req;

    if (method === 'POST') {
        try {
            const { name, email, title, contentpera, parent } = req.body;

            let commentDoc;
            if (parent) {
                // If parent comment ID is provided, create a child comment
                commentDoc = await Comment.create({
                    name, email, title, contentpera,
                    parent: parent
                });

                // Update parent comment's children array
                await Comment.findByIdAndUpdate(parent, {
                    $push: { children: commentDoc._id }
                });
            } else {
                // Otherwise, create a root comment
                commentDoc = await Comment.create({
                    name, email, title, contentpera
                });
            }

            res.status(201).json(commentDoc); // Respond with 201 Created status
        } catch (error) {
            console.error('Error creating comment:', error);
            res.status(500).json({ error: 'Failed to create comment' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
