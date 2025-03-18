import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI as string;
const DB_NAME = process.env.DB_NAME
const COLLECTION_NAME = "gallery-images"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { image } = body

        if (!image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 })
        }

        // Connect to MongoDB
        const client = new MongoClient(MONGODB_URI)
        await client.connect()
        const db = client.db(DB_NAME)
        const collection = db.collection(COLLECTION_NAME)

        // Insert image (Base64 format)
        await collection.insertOne({ image })

        // Close connection
        await client.close()

        return NextResponse.json({ success: true, message: "Image uploaded successfully!" })
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
    }
}
