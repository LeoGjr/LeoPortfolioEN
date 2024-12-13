import { mongooseConnect } from "@/lib/mongoose";
import { Shop } from "@/models/Shop";



export default async function handle(req, res) {

    // If authenticated, connect to MongoDB
    await mongooseConnect();

    const { method } = req;


    // if (method === 'GET') {
    //     if (req.query?.id) {
    //         res.json(await Shop.findById(req.query.id));
    //     } else {
    //         res.json((await Shop.find()).reverse())
    //     }
    // }
    if (method === 'GET') {
        if (req.query?.id) {
            // Fetch a single Shops by id
            const Shops = await Shop.findById(req.query.id);
            res.json(Shops);
        } else if (req.query?.Shopcategory) {
            // Fetch Shops by category
            const Shopcategory = await Shop.find({ Shopcategory: req.query.Shopcategory });
            res.json(Shopcategory.reverse());
        } else if (req.query?.slug) {
            // Fetch Shops by bcategory
            const Shops = await Shop.find({ slug: req.query.slug });
            res.json(Shops.reverse());
        } else {
            // Fetch all Shops
            const Shops = await Shop.find();
            res.json(Shops.reverse());
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }

}