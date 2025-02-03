type FilmsGetParams = {
  slug: string;
};

export async function GET(
  request: Request,
  { params }: { params: FilmsGetParams }
) {
  const slug = params.slug;

  if (slug !== "swapi") {
    return new Response("Not Found", { status: 404 });
  }
  const films = await fetch("https://www.swapi.tech/api/films");
  const filmsJson = await films.json();
  return Response.json(filmsJson);
}
