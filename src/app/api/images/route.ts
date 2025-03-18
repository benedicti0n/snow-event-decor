import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;
const DB_NAME = process.env.DB_NAME
const COLLECTION_NAME = "gallery-images"


export async function GET(req: NextRequest) {
    try {
        // Connect to MongoDB
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Fetch images (latest first)
        const images = await collection.find().sort({ _id: -1 }).toArray();
        await client.close();

        return NextResponse.json({ success: true, images });
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
    }
}
