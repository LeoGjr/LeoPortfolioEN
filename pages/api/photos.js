import { mongooseConnect } from "@/lib/mongoose";
import { Photo } from "@/models/Photo";


export default async function handle(req, res) {

    // If authenticated, connect to MongoDB
    await mongooseConnect();

    const { method } = req;


    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Photo.findById(req.query.id));
        } else {
            res.json((await Photo.find()).reverse())
        }
    }
}