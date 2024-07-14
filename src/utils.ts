import mongoose, { connection } from "mongoose";

export const connect = async () => {
    try {
      if (mongoose.connections && mongoose.connections[0].readyState) return;
  
      const { connection } = await mongoose.connect(
        process.env.MONGODB_URI as string,
        {
          dbName: "ArohiSoftware",
        }
      );
  
      console.log(`Connected to database: ${connection.host}`);
    } catch (error) {
      throw new Error("Error connection to database");
    }
  };