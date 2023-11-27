import { NextResponse } from "next/server";
import Product from "@/database/product.model";
import dbConnect from "@/lib/db";

export async function GET() {
  await dbConnect();
  const headers = {
    "Content-Type": "application/json",
  };
  const products = await Product.find({});

  return NextResponse.json(products, { headers });
}
