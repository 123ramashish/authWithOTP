//importing necessary package
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//connecting to DB

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database conntected!");
  })
  .catch((err) => {
    console.log("Error to connect database:", err.message);
  });

//Listing to port

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
