import { NextResponse } from "next/server";
import Product from "@/database/product.model";
import connectToDatabase from "@/lib/db";

export async function GET() {
  await connectToDatabase();
  const headers = {
    "Content-Type": "application/json",
  };
  const products = await Product.find({});

  return NextResponse.json(products, { headers });
}
