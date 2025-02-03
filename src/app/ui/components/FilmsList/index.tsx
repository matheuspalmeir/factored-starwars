import { formatKey, formatToSlug } from "@/components/app/lib/utils";
import ListHeader from "../ListHeader";
import Row from "../Row";
import Cover from "../Cover";

export interface Film {
  properties: {
    characters: number;
    planets: number;
    starships: number;
    vehicles: number;
    species: number;
    created: string;
    edited: string;
    producer: string;
    title: string;
    episodeId: number;
    director: string;
    releaseDate: string;
    openingCrawl: string;
    url: string;
  };
}

interface FilmListProps {
  data: Array<Film>;
}

const FilmListRows = (film: Film) => {
  return Object.keys(film.properties)
    .filter((k) => k !== "openingCrawl")
    .map((key: string) => {
      return (
        <Row
          key={`row-${key}`}
          title={formatKey(key)}
          data={film.properties[key as keyof Film["properties"]]}
        />
      );
    });
};

const FilmsList = ({ data }: FilmListProps) => {
  return (
    <>
      {data.map((film: Film) => {
        return (
          <div
            key={`list-${film.properties.episodeId}`}
            className="mt-6 border border-gray-200 shadow rounded-xl overflow-hidden p-4 sm:p-6"
          >
            <ListHeader
              key={`header-${film.properties.episodeId}`}
              title={`${film.properties.title} (${
                film.properties.releaseDate.split("-")[0]
              })`}
              description={film.properties.openingCrawl}
            />
            <div className="flex">
              <dl className="w-1/2 divide-y divide-gray-100">
                {FilmListRows(film)}
              </dl>
              <div className="w-1/2 flex items-center justify-center">
                <Cover
                  classNames="w-96 h-auto align-middle"
                  linkTo={`/films/${film.properties.episodeId}`}
                  href={`/films/${formatToSlug(film.properties.title)}.jpg`}
                  alt={film.properties.title}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FilmsList;
