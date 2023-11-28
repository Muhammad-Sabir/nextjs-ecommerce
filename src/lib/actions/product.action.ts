"use server";

import Product from "@/database/product.model";
import connectToDatabase from "../db";
import { GetProductByIdParams } from "./shared.types";

export async function getProducts() {
  connectToDatabase();
  try {
    const products = await Product.find({});
    return products;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getProductById(params: GetProductByIdParams) {
  connectToDatabase();
  try {
    const product = await Product.findById(params.productId);
    return product;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
