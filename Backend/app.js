import express from "express";

const app = express();

//JSON BODY
app.use(express.json());

//CORS
app.use(cors());

export default app;