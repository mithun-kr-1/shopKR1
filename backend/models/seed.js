import mongoose from "mongoose";
import userModel from "./userModel.js"; // ✅ Correct relative import

const MONGO_URI = "mongodb://ShopKR"; // Add your DB name

const dummyUsers = [
  {
    name: "Mithun K R",
    email: "mithunkr533@gmail.com",
    password: "Mithun@123",
  },
  
];

const seedUsers = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await userModel.deleteMany();
    await userModel.insertMany(dummyUsers);

    console.log("✅ Dummy users seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
    process.exit(1);
  }
};

seedUsers();
