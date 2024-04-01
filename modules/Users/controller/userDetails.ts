import userModel from "../../../models/user.model";
import { Request, Response } from "express";

const userDetails = async (req: Request, res: Response) => {
  const userDetails = await userModel.find();

  if (!userDetails) throw "invalid";

  res.status(200).json({
    userInformation: userDetails,
  });
};
export default userDetails;
