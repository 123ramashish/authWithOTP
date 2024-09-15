//importing necessary package
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
// import to resolve client folder file path
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
// accessing client folder path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middleware

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);
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
