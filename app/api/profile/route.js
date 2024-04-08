import { cookies, headers } from "next/headers";

export async function GET(request) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));
  const headerList = headers();
  // console.log(headerList.get("Authorization"));

  //Type -1
  cookies().set("page", "2");
  console.log(cookies().get("page"));

  //Type -2
  console.log(request.cookies.get("theme"));
  return new Response("Profile api", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
