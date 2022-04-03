/* All imports  */
import express, { json } from "express";
import path from "path";
import loginRoute from "./routes/loginRoute.js";
import developerRoute from "./routes/developerRoute.js";
import projectRoute from "./routes/projectRoute.js";
import dbConnect from "./config/dbConfig.js";
import cors from "cors";

/*  express config */
const app = express();
dbConnect()
app.use(cors());
app.use(json());
app.use("/api", loginRoute);
app.use("/api", developerRoute);
app.use("/api", projectRoute);
app.get("/", (req, res) => {
  res.status(200).send("ok");
});

/*  start server */
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
