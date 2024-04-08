import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request, event) {
  //   console.log("I am inside middleware");
  //   return NextResponse.json({
  //     helllo: "I am happy",
  //   });
  // return NextResponse.next()
  //   if (request.url.includes("api/comments"))
  // return NextResponse.redirect(new URL("/", request.url));
  // return NextResponse.rewrite(new URL("/", request.url));

  event.waitUntil(
    setTimeout(() => {
      console.log("Done!");
    }, 3000)
  );
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
//   matcher: "/api/comments",
  //   matcher: ['/api/comments','/about']
};
