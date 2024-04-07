import userModel from "../../../models/user.model";
import { Request, Response } from "express";

const userProfile = async (req: any, res: Response) => {
  console.log(req.user);

  if (!req.user) throw "user id cannot be achieved";

  const findUser = await userModel.findOne({
    _id: req.user.user_id,
  });

  if (!findUser) throw "user  invalid";
  res.status(200).json({
    message: "welcome to user profile",
    userDetails: findUser,
  });
};
export default userProfile;
