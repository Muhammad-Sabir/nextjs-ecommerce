import { NextResponse } from "next/server";
import products from "@/products";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } },
) {
  const product = products.find((p) => p._id === params.productId);

  return NextResponse.json(product);
}
