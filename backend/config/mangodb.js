import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected in: " + process.env.MANGODB_URI)
    
  });
  await mongoose.connect(`${process.env.MANGODB_URI}/ShopKR`, );
};

export default connectDB;

