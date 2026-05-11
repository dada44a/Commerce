import mongoose from "mongoose";

// Keep track of the connection promise globally
let connectionPromise: Promise<typeof mongoose> | null = null;

const connectDB = async () => {
    // 1. If we are already connected, return the existing connection
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    // 2. If a connection is currently in progress, wait for it
    if (connectionPromise) {
        return connectionPromise;
    }

    // 3. Otherwise, start a new connection
    connectionPromise = mongoose.connect(process.env.MONGO_URI as string)
        .then((conn) => {
            console.log("MongoDB connected");
            return conn;
        })
        .catch((err) => {
            console.error("MongoDB connection error", err);
            connectionPromise = null;
            throw err;
        });

    return connectionPromise;
};

export default connectDB;