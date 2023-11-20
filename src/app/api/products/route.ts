import { NextResponse } from "next/server";
import products from "@/products";

import connectDb from "@/config/db";
connectDb();

export async function GET() {
  const headers = {
    "Content-Type": "application/json",
  };
  return NextResponse.json(products, { headers });
}
