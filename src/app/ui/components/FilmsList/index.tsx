import { formatKey, formatToSlug } from "@/components/app/lib/utils";
import ListHeader from "../ListHeader";
import Row from "../Row";
import Cover from "../Cover";
import { Film, FilmsData } from "./types";

interface FilmListProps {
  data: FilmsData;
}

const FilmListRows = (film: Film) => {
  return Object.keys(film)
    .filter((k) => k !== "openingCrawl")
    .map((key: string) => {
      return (
        <Row
          key={`row-${key}`}
          title={formatKey(key)}
          data={film[key as keyof Film]}
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
            key={`list-${film.episodeId}`}
            className="mt-6 border border-gray-200 shadow rounded-xl overflow-hidden p-4 sm:p-6"
          >
            <ListHeader
              key={`header-${film.episodeId}`}
              title={`${film.title} (${film.releaseDate.getFullYear()})`}
              description={film.openingCrawl}
            />
            <div className="flex">
              <dl className="w-1/2 divide-y divide-gray-100">
                {FilmListRows(film)}
              </dl>
              <div className="w-1/2 flex items-center justify-center">
                <Cover
                  classNames="w-96 h-auto align-middle"
                  linkTo={`/films/${film.episodeId}`}
                  href={`/films/${formatToSlug(film.title)}.jpg`}
                  alt={film.title}
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
