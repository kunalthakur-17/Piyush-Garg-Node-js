import mongoose from "mongoose";

const url = "mongodb://kunalthakur306_db_user:7RDaUdBz8t2R4UuP@ac-iyc0bag-shard-00-00.bywo5vp.mongodb.net:27017,ac-iyc0bag-shard-00-01.bywo5vp.mongodb.net:27017,ac-iyc0bag-shard-00-02.bywo5vp.mongodb.net:27017/?ssl=true&replicaSet=atlas-ddx4la-shard-0&authSource=admin&appName=Cluster0";

export default async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error connecting to DB:", error);
        throw error;
    }
}
