import { NextResponse } from "next/server";
import products from "@/products";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } },
) {
  const product = products.find((p) => p._id === params.productId);

  const headers = {
    "Content-Type": "application/json",
  };
  return NextResponse.json(product, { headers });
}
