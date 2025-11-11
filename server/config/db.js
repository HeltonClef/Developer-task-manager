const mongoose = require("mongoose");

// Connect to MongoDB using mongoose
const connectDB = async () => {
  try {
    // Remove the deprecated options
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected SUCCESSFULLY: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    console.log(
      "💡 Connection string used:",
      process.env.MONGO_URI?.replace(
        /mongodb\+srv:\/\/([^:]+):([^@]+)@/,
        "mongodb+srv://username:password@"
      )
    );
    process.exit(1);
  }
};

module.exports = connectDB;
