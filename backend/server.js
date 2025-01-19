const app = require("./app");
const { connectDatabase } = require("./config/database.js");
const cloudinary = require("cloudinary");
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Check Cloudinary connection
cloudinary.api.ping()
  .then(() => {
    console.log("Cloudinary is connected successfully!");
  })
  .catch((error) => {
    console.error("Cloudinary connection failed:", error.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
