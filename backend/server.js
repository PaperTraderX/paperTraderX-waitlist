import "dotenv/config";
import express from "express";
import { bootstrap } from "./bootstrap.js";

const app = express();
bootstrap(app);
export default app;
