import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

export default async function handle(req, res) {

    // If authenticated, connect to MongoDB
    await mongooseConnect();

    const { method } = req;


    // if (method === 'GET') {
    //     if (req.query?.id) {
    //         res.json(await Blog.findById(req.query.id));
    //     } else {
    //         res.json((await Blog.find()).reverse())
    //     }
    // }

    if (method === 'GET') {
        if (req.query?.id) {
            // Fetch a single Blogs by id
            const Blogs = await Blog.findById(req.query.id);
            res.json(Blogs);
        } else if (req.query?.tags) {
            // Fetch Blogs by tags
            const tags = await Blog.find({ tags: req.query.tags });
            res.json(tags.reverse());
        } else if (req.query?.blogcategory) {
            // Fetch Blogs by category
            const blogcategory = await Blog.find({ blogcategory: req.query.blogcategory });
            res.json(blogcategory.reverse());
        } else if (req.query?.slug) {
            // Fetch Blogs by bcategory
            const Blogs = await Blog.find({ slug: req.query.slug });
            res.json(Blogs.reverse());
        } else {
            // Fetch all Blogs
            const Blogs = await Blog.find();
            res.json(Blogs.reverse());
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }

}