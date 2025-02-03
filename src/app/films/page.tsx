import { FilmsResponse } from "../lib/types";
import FilmsList from "../ui/components/FilmsList";
import { Film, FilmsData } from "../ui/components/FilmsList/types";

const parseFilmsData = (films: FilmsResponse): FilmsData => {
  return films.result.map((f) => ({
    id: f.uid,
    title: f.properties.title,
    releaseDate: new Date(f.properties.release_date),
    director: f.properties.director,
    openingCrawl: f.properties.opening_crawl,
    characters: f.properties.characters.length,
    planets: f.properties.planets.length,
    starships: f.properties.starships.length,
    vehicles: f.properties.vehicles.length,
    species: f.properties.species.length,
    created: new Date(f.properties.created),
    edited: new Date(f.properties.edited),
    producer: f.properties.producer,
    episodeId: f.properties.episode_id,
    url: f.properties.url,
  }));
};

const getSwapiFilms = async (): Promise<Film[]> => {
  const res = await fetch("http://localhost:3000/api/swapi/films");
  const data = (await res.json()) as FilmsResponse;
  return parseFilmsData(data);
};

export default async function Films() {
  const initialdata = await getSwapiFilms();

  return (
    <div className="min-h-screen mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <FilmsList data={initialdata} />
    </div>
  );
}
