import { Router } from "express";
import allProducts from "./controller/createProducts";
import productAuthorization from "./handler/productAuthorization";
import createProducts from "./controller/createProducts";
import getAllProducts from "./controller/getAllProducts";
import deleteAllProducts from "./controller/deleteAllProducts";
import editProducts from "./controller/editProducts";
import allPublicProducts from "./controller/allPublicProducts";

const productRouter = Router();

productRouter.get("/allProducts", allPublicProducts);
productRouter.use(productAuthorization);
productRouter.post("/createProducts/:vendor_id", createProducts);
productRouter.get("/getAllProducts", getAllProducts);
productRouter.delete("/deleteAllProducts/:product_id", deleteAllProducts);
productRouter.post("/editProducts/:product_id", editProducts);

export default productRouter;
