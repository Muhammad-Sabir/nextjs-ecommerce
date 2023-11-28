import { NextResponse } from "next/server";
import Product from "@/database/product.model";
import connectToDatabase from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } },
) {
  await connectToDatabase();
  const headers = {
    "Content-Type": "application/json",
  };
  const product = await Product.findById(params.productId);

  if (product) {
    return NextResponse.json(product, { headers });
  }

  return NextResponse.json({ message: "Product not found" });
}
