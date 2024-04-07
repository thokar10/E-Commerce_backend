import { Router } from "express";
import userRegister from "./userRegister";
import userDetails from "./userDetails";
import userLogin from "./userLogin";
import authorization from "../handler/authorization";
import userProfile from "./userProfile";
import userDashboard from "./userDashboard";

const userRouter = Router();

userRouter.post("/registerUser", userRegister);
userRouter.post("/userLogin", userLogin);
userRouter.get("/userDetail", userDetails);

userRouter.use(authorization);
userRouter.get("/userProfile", userProfile);
userRouter.get("/userDashboard", userDashboard);

export default userRouter;
