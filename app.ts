import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import cors from "cors";
import "./model";
import userRouter from "./modules/Users/controller/users.routes";
import errorHandler from "./errorHandler";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.db_connect!, {})
  .then(() => {
    console.log("connection to the database successful");
  })
  .catch(() => {
    console.log("connection to database failed");
  });

app.use("/users", userRouter);

app.use(errorHandler);

app.listen("8000", () => {
  console.log("server started successfully");
});
