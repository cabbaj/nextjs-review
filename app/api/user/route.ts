import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url); // this is destructuring
  const search = searchParams.get("id");
  console.log(search);

  return NextResponse.redirect(new URL("/", req.url));
}
