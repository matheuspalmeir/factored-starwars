export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  const { params } = await context;
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  if (params.slug !== "swapi") {
    return new Response("Not Found", { status: 404 });
  }

  const data = await fetch(
    `https://www.swapi.tech/api/people?page=${page}&limit=${limit}`
  );

  const dataJson = await data.json();
  return Response.json(dataJson);
}
