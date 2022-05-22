const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const emailRoute = require("./routes/email");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connection successfull!"))
.catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/email", emailRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
});