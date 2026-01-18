// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("DB connected");
//   } catch (error) {
//     console.error("DB connection failed:", error.message);
//   }
// };


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const options = {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    };
    
    // USE MONGODB_URI (not MONGO_URI)
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("✅ MongoDB Connected Successfully");
    return mongoose;
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    throw error;
  }
};