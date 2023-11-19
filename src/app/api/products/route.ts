import { NextResponse } from "next/server";
import products from "@/products";

export async function GET() {
  const headers = {
    "Content-Type": "application/json",
  };
  return NextResponse.json(products, { headers });
}
