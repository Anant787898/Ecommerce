import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";

const app = express();

//CORS
app.use(cors());

//JSON BODY
app.use(express.json());

//cokkie-parser
app.use(cookieParser());

// ROUTES
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);

//Error middleware
app.use(notFound);
app.use(errorHandler);

export default app;
