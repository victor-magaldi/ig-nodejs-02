import express from "express";
import { createCourse } from "./routes";

const app = express();

app.get("/", (req, res) => {
    const a = 5
    return res.json({ ping: true })
})

app.listen(3333);
