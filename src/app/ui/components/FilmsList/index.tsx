"use client";
import { useState } from "react";

import Row from "../Row";
import Cover from "../Cover";
import ListHeader from "../ListHeader";
import Pagination from "../Pagination";

import { Film, FilmsData } from "./types";

import { formatKey, formatToSlug } from "@/components/app/lib/utils";

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

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  data = paginatedData;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default FilmsList;
