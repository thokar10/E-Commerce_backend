import { Request, Response } from "express";
import productModel from "../../../models/product.model";
const createProducts = async (req: Request, res: Response) => {
  const { ProductName, ProductImage, ProductPrice, vendor_id } = req.body;

  const CreateProduct = await productModel.create({
    ProductName,
    ProductImage,
    venderId: vendor_id,
    ProductPrice,
  });

  if (!CreateProduct) throw "unable to create a product";

  res.status(200).json({
    status: "good",
  });
};
export default createProducts;
