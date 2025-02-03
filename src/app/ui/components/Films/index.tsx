"use client";
import { useEffect, useState } from "react";

import Row from "../Row";
import Cover from "../Cover";
import ListHeader from "../ListHeader";
import Pagination from "../Pagination";

import { Film, FilmsData } from "./types";

import { formatKey, formatToSlug } from "@/components/app/lib/utils";
import { useSearchParams } from "next/navigation";
import { usePagination } from "@/components/app/hooks/usePagination";

interface FilmListProps {
  data: FilmsData;
}

const Films = ({ data }: FilmListProps) => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    paginateData,
    setPageData,
    setTotalPages,
  } = usePagination({
    data,
    itemsPerPage: 2,
  });

  const [displayedFilms, setDisplayedFilms] = useState<FilmsData>([]);
  const searchParams = useSearchParams();

  const filterFilms = (name: string) => {
    const filteredFilms = data.filter((film) =>
      film.title.toLowerCase().includes(name.toLowerCase())
    );
    return filteredFilms;
  };

  const handlePageChange = (page: number) => {
    const displayData = paginateData(page);
    setDisplayedFilms(displayData);
    setCurrentPage(page);
  };

  const handleSearch = (name: string) => {
    const filteredFilms = filterFilms(name);

    if (filteredFilms.length === 1) {
      setDisplayedFilms(filteredFilms);
      setTotalPages(1);
    }

    if (filteredFilms.length > 1) {
      setPageData(filteredFilms);
      setDisplayedFilms(paginateData(1, filteredFilms));
    }

    setCurrentPage(1);
  };

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

  const initializeData = () => {
    if (data) {
      const displayData = paginateData(currentPage, data);
      setDisplayedFilms(displayData);
      setPageData(data);
    }
  };

  useEffect(() => {
    initializeData();
  }, []);

  useEffect(() => {
    const queryName = searchParams.get("query") || "";

    if (queryName !== "") {
      handleSearch(queryName);
      return;
    }

    initializeData();
  }, [searchParams]);

  return (
    <>
      {displayedFilms.map((film: Film) => {
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
export default Films;
