export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (slug !== "swapi") {
    return new Response("Not Found", { status: 404 });
  }

  const characters = await fetch("https://www.swapi.tech/api/people");
  const charactersJson = await characters.json();
  return Response.json(charactersJson);
}
