import mongoose from "mongoose";

let isConnected: boolean = false;

async function connectToDatabase() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI)
    return console.log(
      "Please define the MONGODB_URI environment variable inside .env.local",
    );

  if (isConnected) return console.log("Already connected to database.");

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "shopcart",
    });

    isConnected = true;
    console.log("Connected to database");
  } catch (err) {
    console.log("MONGODB Error: " + err);
  }
}

export default connectToDatabase;
