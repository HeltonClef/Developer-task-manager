require("dotenv").config();
const mongoose = require("mongoose");

console.log("🔗 Testing MongoDB connection...");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ SUCCESS: MongoDB connected!");
    console.log("📊 Database:", mongoose.connection.name);
    console.log("🏠 Host:", mongoose.connection.host);
    process.exit(0);
  })
  .catch((error) => {
    console.log("❌ ERROR:", error.message);
    console.log("💡 Tips:");
    console.log(
      "1. Check your MongoDB Atlas network access (whitelist your IP)"
    );
    console.log("2. Verify username/password in connection string");
    console.log("3. Check if your cluster is running in MongoDB Atlas");
    process.exit(1);
  });
