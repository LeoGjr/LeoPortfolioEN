import { mongooseConnect } from "@/lib/mongoose";
import { Project } from "@/models/Project";

export default async function handle(req, res) {

    // If authenticated, connect to MongoDB
    await mongooseConnect();

    const { method } = req;


    // if (method === 'GET') {
    //     if (req.query?.id) {
    //         res.json(await Project.findById(req.query.id));
    //     } else {
    //         res.json((await Project.find()).reverse())
    //     }
    // }

    if (method === 'GET') {
        if (req.query?.id) {
            // Fetch a single Project by id
            const projects = await Project.findById(req.query.id);
            res.json(projects);
        } else if (req.query?.projectcategory) {
            // Fetch Project by category
            const projectcategory = await Project.find({ projectcategory: req.query.projectcategory });
            res.json(projectcategory.reverse());
        } else if (req.query?.slug) {
            // Fetch Project by slug
            const projects = await Project.find({ slug: req.query.slug });
            res.json(projects.reverse());
        } else {
            // Fetch all Project
            const projects = await Project.find();
            res.json(projects.reverse());
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }

}