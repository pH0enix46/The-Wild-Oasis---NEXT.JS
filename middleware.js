// // //
// note here why root folder, and moore
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   // ei name e convention, note
//   console.log(request); //note

//   return NextResponse.redirect(new URL("/about", request.url)); //note
// }

// // note
// export const config = {
//   matcher: ["/account"], // protect, note
// };

import { auth } from "./app/_library/auth/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"], // protect
};
