import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

interface User {
    _id: string;
    userId: string;
    daily: {
        tasksAdded: number;
        tasksRemoved: number;
    };
    weekly: {
        tasksAdded: number;
        tasksRemoved: number;
    };
    monthly: {
        tasksAdded: number;
        tasksRemoved: number;
    };
    tasks: [{
        _id: string;
        title: string;
        description: string;
        date: Date;
        reminder: boolean;
        createdAt: Date;
    }];
    lastUpdated: Date;
 }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const client = await clientPromise;
            const db = client.db("test");

            // Get user's IP address from request headers
            const userId = `::ffff:${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`;

            // Extract task data from the request body
            const { title, description, date, reminder } = req.body;

            // Construct the new task object
            const newTask = {
                _id: new ObjectId(),
                title,
                description,
                date: new Date(date),
                reminder,
                createdAt: new Date(),
            };

            // Update the user's document in the database
            await db.collection('userdatas').updateOne(
                { userId },
                {
                    $push: { 'tasks': newTask } as any, // Use 'as any' to resolve type error
                    $inc: { 'daily.tasksAdded': 1, 'weekly.tasksAdded': 1, 'monthly.tasksAdded': 1 },
                    $set: { lastUpdated: new Date() },
                },
                { upsert: true }
            );
            res.status(200).json({ message: 'Task added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
