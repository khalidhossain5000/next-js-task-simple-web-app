import { MongoClient } from "mongodb";

// 1️⃣ MongoDB URI environment variable থেকে নাও
const uri = process.env.mongoDB_uri;

let client;
let clientPromise;

if (!process.env.mongoDB_uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// 2️⃣ Development এবং Production এ connection handle করা
if (process.env.NODE_ENV === "development") {
  // development mode: hot reload এর সময় connection reuse
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // production: normal connection
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// 3️⃣ Export করা, যাতে অন্য file এ import করে use করা যায়
export default clientPromise;
