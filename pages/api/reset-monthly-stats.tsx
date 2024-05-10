// reset-monthly-stats.ts

import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const client = await clientPromise;
            const db = client.db("test");

            const userId = `::ffff:${req.headers['x-real-ip'] || req.connection.remoteAddress}`;

            // Reset the monthly tasks counters
            await db.collection('userdatas').updateOne(
                { userId },
                {
                    $set: { 
                        'monthly.tasksAdded': 0, 
                        'monthly.tasksRemoved': 0,
                        lastUpdated: new Date() 
                    },
                },
                { upsert: true }
            );
            res.status(200).json({ message: 'Monthly statistics reset successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
