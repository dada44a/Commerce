import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import productRouter from "./routes/product.js";
import cors from "cors";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";

dotenv.config();


connectDB();
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true // Adjust this to your frontend's URL
}));


app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);



app.get("/", (_req, res) => {
  res.json({
    message: "Hello TypeScript + Express + ESM"
  });
});



const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});