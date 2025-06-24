import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected in: " + process.env.MONGO_URI)
    
  });
  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;

