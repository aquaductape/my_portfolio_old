import express from "express";
import { wakaTimeRoute } from "./api/wakatime";
import { middlewareForAllRoutes } from "./api/router";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening port ${port}...`));

app.use(middlewareForAllRoutes);
app.use(wakaTimeRoute);
