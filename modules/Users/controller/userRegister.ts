import { Request, Response } from "express";
import validator from "validator";
import bcrypt, { hash } from "bcrypt";
import userModel from "../../../models/user.model";
const userRegister = async (req: Request, res: Response) => {
  const {
    full_name,
    email,
    phone_no,
    location,
    username,
    password,
    confirm_password,
  } = req.body;
  if (!phone_no) throw "phone number is required";

  //phone number validation
  const convertNumberToString = phone_no.toString();
  if (convertNumberToString.length !== 10) {
    throw "phone number should be of 10 digits";
  }
  const validatePhoneNo = validator.isInt(phone_no.toString());
  if (!validatePhoneNo) throw "phone number should be in number ";
  const findExistedUser = await userModel.findOne({
    $or: [
      {
        email,
      },
      {
        phone_no,
      },
    ],
  });

  if (findExistedUser) throw "user is already existed ";

  if (!full_name) throw "full name is  required";
  const validateFullName = validator.isNumeric(full_name.toString());
  if (validateFullName) throw "full name should be in String ";

  if (!email) throw "email is required";
  const validateEmail = validator.isEmail(email.toString());
  if (!validateEmail) throw "invalid email ";

  if (!location) throw "location is required";
  if (!username) throw "username is required";
  if (!password) throw "password is required";
  if (!confirm_password) throw "confirm_password is required";

  if (password != confirm_password) throw "password doesn't matched";

  //Encrypting password
  const hashPassword = await bcrypt.hash(password, 8);

  const userDetails = await userModel.create({
    full_name,
    email,
    phone_no,
    location,
    username,
    password: hashPassword,
  });

  if (!userDetails) throw "user cannot be created";

  res.status(200).json({
    message: "Registered Successful",
    userInformation: userDetails,
  });
};
export default userRegister;
