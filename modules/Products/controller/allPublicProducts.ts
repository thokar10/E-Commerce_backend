import { Request, Response } from "express";
import productModel from "../../../models/product.model";
const allPublicProducts = async (req: Request, res: Response) => {
  console.log(req.query);

  const { page_limit } = req.query;

  delete req.query.page_limit;
  const findAllProducts = await productModel
    .find(req.query)
    .limit(parseInt((page_limit ?? 5).toString()));
  res.status(200).json({
    status: "success to find products",
    productDetails: findAllProducts,
  });
};
export default allPublicProducts;
