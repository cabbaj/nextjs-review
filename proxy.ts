import { NextResponse } from "next/server";

export function proxy(req: NextResponse) {
  console.log("middle");
//   return NextResponse.redirect(new URL("/", req.url));
}

// define config
// export const config = {
//   matcher: "/about/:path*",
// };
