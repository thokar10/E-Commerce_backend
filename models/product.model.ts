import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    venderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    ProductName: {
      type: String,
      required: true,
    },
    ProductImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("products", productSchema);
export default productModel;
