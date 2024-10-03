// lib/mongodb.js

import mongoose from "mongoose";

const connection = {}; // Global object to hold the connection status

export const connectToDatabase = async () => {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState; // 1 means connected
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw new Error("Database connection error");
  }
};
