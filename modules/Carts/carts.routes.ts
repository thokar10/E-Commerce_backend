import { Router } from "express";
import createCarts from "./controller/createCarts";
import userAuthorization from "../users/userAuthorization";

const cartRouter = Router();

cartRouter.use(userAuthorization);
cartRouter.post("/create", createCarts);
export default cartRouter;
