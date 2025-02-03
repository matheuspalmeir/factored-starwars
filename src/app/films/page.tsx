import { FilmsResponse } from "../lib/types";
import { parseApiData } from "../lib/utils";
import FilmsList from "../ui/components/FilmsList";
import { Film, FilmsData } from "../ui/components/FilmsList/types";

const parseFilmsData = (films: FilmsResponse): FilmsData => {
  const data = films.result.map((film) =>
    parseApiData<Film>(film.properties, { arrayToLength: true })
  );
  return data;
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
