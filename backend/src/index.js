require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const houseRoutes = require("./routes/houses");
const bookingRoutes = require("./routes/bookings");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend running 🚀"));

app.use("/auth", authRoutes);
app.use("/houses", houseRoutes);
app.use("/bookings", bookingRoutes);

app.listen(4000, () => console.log("Backend running at http://localhost:4000"));
