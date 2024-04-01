import userModel from "../../../models/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLogin = async (req: Request, res: Response) => {
  const { email, phone_no, password } = req.body;

  const findUser = await userModel.findOne({
    $or: [{ email }, { phone_no }],
  });

  console.log(findUser);
  if (!findUser) throw "email or  phone number invalid";

  console.log(findUser.password);

  const checkPassword = await bcrypt.compare(password, findUser.password);
  if (!checkPassword) throw "password invalid";

  const payload = {
    user_id: findUser._id,
  };

  const access_token = jwt.sign(payload, "secret-key-1076");

  res.status(200).json({
    message: "Login in successful",
    access_token: access_token,
  });
};
export default userLogin;
