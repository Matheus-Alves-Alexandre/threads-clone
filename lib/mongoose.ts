import mongoose from "mongoose";

let isConnected = false;
export const connectedToDb = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("not found");
  if (process.env.MONGODB_URL) return console.log("connected");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to mongdb");
  } catch (e) {
    console.log(e, "deu ruim");
  }
};
