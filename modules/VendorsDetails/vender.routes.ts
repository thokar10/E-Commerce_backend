import { Router } from "express";
import venderSignUp from "./controller/venderSignUp";
import venderLogin from "./controller/venderLogin";
import authorization from "./controller/authorization";
import venderDashboard from "./controller/venderDashboard";

const venderRouter = Router();

venderRouter.post("/signUp", venderSignUp);
venderRouter.post("/login", venderLogin);

venderRouter.use(authorization);
venderRouter.get("/dashboard", venderDashboard);

export default venderRouter;
