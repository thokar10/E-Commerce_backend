import { Router } from "express";
import userRegister from "./userRegister";
import userDetails from "./userDetails";
import userLogin from "./userLogin";

const userRouter = Router();

userRouter.post("/registerUser", userRegister);
userRouter.post("/userLogin", userLogin);
userRouter.get("/userDetail", userDetails);

export default userRouter;
