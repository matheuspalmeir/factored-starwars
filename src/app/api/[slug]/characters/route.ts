export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  const { params } = await context;
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (params.slug !== "swapi") {
    return new Response("Not Found", { status: 404 });
  }

  console.log("[get] - name", name?.replace(" ", "+"));
  const parsed = name?.replace(" ", "+");
  const data = await fetch(`https://www.swapi.tech/api/people?name=${parsed}`);

  const dataJson = await data.json();
  return Response.json(dataJson);
}
