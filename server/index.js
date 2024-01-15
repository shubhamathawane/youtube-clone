import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();
app.use(cookieParser());
app.use(express.json());


const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

mongoose.set('strictQuery', true);

const Connect = () => {
  mongoose
    .connect(mongo_url, {
      config: { autoIndex: true },
      
    })
    .then(() => {
      console.log("Database Connected!");
    })
    .catch((err) => console.log(err));
};

app.use("/api/auth/", authRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/videos/", videoRoutes);
app.use("/api/comments/", commentRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(port, (req, res) => {
  Connect();
  console.log(`Server is up and running on port ${port}`);
});
