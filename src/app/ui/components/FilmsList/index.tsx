"use client";
import { useEffect, useState } from "react";

import Row from "../Row";
import Cover from "../Cover";
import ListHeader from "../ListHeader";
import Pagination from "../Pagination";

import { Film, FilmsData } from "./types";

import { formatKey, formatToSlug } from "@/components/app/lib/utils";
import { useSearchParams } from "next/navigation";

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

const ITEMS_PER_PAGE = 2;

const FilmsList = ({ data }: FilmListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [filmsData, setFilmsData] = useState<FilmsData>(data);
  const searchParams = useSearchParams();

  const countTotalPages = (targetData: FilmsData) => {
    return Math.ceil(targetData.length / ITEMS_PER_PAGE);
  };

  const paginateData = (page: number) => {
    return data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  };

  const filterFilms = (name: string) => {
    const filteredFilms = data.filter((film) =>
      film.title.toLowerCase().includes(name.toLowerCase())
    );
    return filteredFilms;
  };

  const handlePageChange = (page: number) => {
    const pageData = paginateData(page);
    setFilmsData(pageData);

    setCurrentPage(page);
  };

  const handleSearch = (name: string) => {
    const filteredFilms = filterFilms(name);
    setFilmsData(filteredFilms);

    const totalPages = countTotalPages(filteredFilms);
    setTotalPages(totalPages);

    if (totalPages === 1) {
      setCurrentPage(1);
    }
  };

  const initFilmsData = () => {
    const totalPages = countTotalPages(data);
    setTotalPages(totalPages);

    const pageData = paginateData(currentPage);
    setFilmsData(pageData);
  };

  useEffect(() => {
    initFilmsData();
  }, []);

  useEffect(() => {
    const queryName = searchParams.get("query") || "";

    if (queryName !== "") {
      handleSearch(queryName);
      return;
    }

    initFilmsData();
  }, [searchParams]);

  return (
    <>
      {filmsData.map((film: Film) => {
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default FilmsList;
