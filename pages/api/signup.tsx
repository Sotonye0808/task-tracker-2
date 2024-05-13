import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db("test");

    // Add a new user to the database
    const { username, userId } = req.body;

    // Create a new user data object with default values
    const newUser = {
        username: username,
        userId: userId,
        daily: {
            tasksAdded: 0,
            tasksRemoved: 0,
        },
        weekly: {
            tasksAdded: 0,
            tasksRemoved: 0,
        },
        monthly: {
            tasksAdded: 0,
            tasksRemoved: 0,
        },
        tasks: [],
        lastUpdated: new Date(),
    };

    // Replace the below logic with your actual database query
    try {
        await db.collection("userdatas").insertOne(newUser);
        res.status(200).json({ status: 'success' });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ status: 'error' });
    }
}