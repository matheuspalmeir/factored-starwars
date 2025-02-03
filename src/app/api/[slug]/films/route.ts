export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  const { params } = await context;
  const slug = params.slug;

  if (slug !== "swapi") {
    return new Response("Not Found", { status: 404 });
  }
  const data = await fetch("https://www.swapi.tech/api/films");
  const dataJson = await data.json();
  return Response.json(dataJson);
}
