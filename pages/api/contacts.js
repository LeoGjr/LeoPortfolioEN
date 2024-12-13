import { mongooseConnect } from "@/lib/mongoose";
import { Contact } from "@/models/contact";

export default async function handle(req, res) {
    // If authenticated, connect to MongoDB
    await mongooseConnect();

    const { method } = req;

    if (method === 'POST') {
        try {
            const { name, lname, email, company, phone, country, project, price, description } = req.body;

            const contactDoc = await Contact.create({
                name, lname, email, company, phone, country, project, price, description
            });

            res.status(201).json(contactDoc); // Respond with 201 Created status
        } catch (error) {
            console.error('Error creating contact:', error);
            res.status(500).json({ error: 'Failed to create contact' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
