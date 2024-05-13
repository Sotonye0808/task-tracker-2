import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db("test");

    // Check the database for matching username/email
    const { username, userId } = req.body;

    // Perform database query to check for matching username/email
    const user = await db.collection("userdatas").findOne({ username, userId });

    if (user) {
        // Username and email match
        res.status(200).json({ status: 'success' });
    } else {
        // Check if username exists
        const usernameExists = await db.collection("userdatas").findOne({ username });
        if (usernameExists) {
            res.status(200).json({ status: 'emailMismatch' });
        } else {
            // Check if email exists
            const emailExists = await db.collection("userdatas").findOne({ userId });
            if (emailExists) {
                res.status(200).json({ status: 'usernameMismatch' });
            } else {
                // Neither username nor email match
                res.status(200).json({ status: 'noMatch' });
            }
        }
    }
}