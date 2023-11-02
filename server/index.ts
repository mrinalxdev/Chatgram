import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const { PORT } = process.env || 4000;

app.use(cors())

server.listen(PORT, () => {
    console.log("http://localhost:4000");
})