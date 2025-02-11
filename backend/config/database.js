const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('strictQuery', true);

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
