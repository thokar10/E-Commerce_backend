import { Request, Response } from "express";
import productModel from "../../../models/product.model";
const allPublicProducts = async (req: Request, res: Response) => {
  const findAllProducts = await productModel.find({});
  res.status(200).json({
    status: "success to find products",
    productDetails: findAllProducts,
  });
};
export default allPublicProducts;
