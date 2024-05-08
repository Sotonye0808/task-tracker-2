import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        try {
            const client = await clientPromise;
            const db = client.db("test");

            // Get user's IP address from request headers
            const userId = `::ffff:${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`;

            // Extract task ID from the query parameters
            const { taskId } = req.query as { taskId: string };

            // Convert taskId to ObjectId
            const taskObjectId = new ObjectId(taskId);
            // Update the user's document in the database to remove the specified task
            await db.collection('userdatas').updateOne(
                { userId },
                {
                    $pull: { tasks: { _id: taskObjectId } },
                    $inc: { 'daily.tasksRemoved': 1, 'weekly.tasksRemoved': 1, 'monthly.tasksRemoved': 1 },
                    $set: { lastUpdated: new Date() },
                },
                { upsert: true }
            );
            res.status(200).json({ message: 'Task removed successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
