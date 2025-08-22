// app/api/products/route.js
import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb"

export async function POST(req) {
  try {
    // ১. request থেকে JSON data নাও
    const body = await req.json();
    const { name, price, description, photoUrl } = body;

    // ২. basic validation
    if (!name || !price) {
      return NextResponse.json(
        { error: "Name and price are required" },
        { status: 400 }
      );
    }

    // ৩. MongoDB connection
    const client = await clientPromise;
    const db = client.db("nextauth-db"); // ডাটাবেস নাম সরাসরি বসাও
    const collection = db.collection("products"); // collection নাম

    // ৪. ডাটা insert করা
    const newProduct = {
      name,
      price: Number(price),
      description: description || "",
      photoUrl: photoUrl || "",
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newProduct);

    // ৫. success response
    return NextResponse.json(
      { success: true, id: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error) {
    console.error("API /api/products error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
