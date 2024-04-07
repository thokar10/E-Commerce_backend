import { Request, Response } from "express";
import productModel from "../../../models/product.model";
const createProducts = async (req: Request, res: Response) => {
  console.log(req.body);
  const { ProductName, ProductImage } = req.body;
  console.log(req.params);

  const { vendor_id } = req.params;

  const CreateProduct = productModel.create({
    ProductName: ProductName,
    ProductImage,
    venderId: vendor_id,
  });

  if (!CreateProduct) throw "unable to create a product";

  res.status(200).json({
    status: "good",
  });
};
export default createProducts;
