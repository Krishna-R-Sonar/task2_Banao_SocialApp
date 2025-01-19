const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('strictQuery', true);

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI || "mongodb+srv://krishnarsonar:krishna9421241525@cluster0.s7a5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
