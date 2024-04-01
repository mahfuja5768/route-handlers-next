
export async function GET(request) {
  const requestHeaders = new Header(request.headers)

  return Response.json(comments);
}

