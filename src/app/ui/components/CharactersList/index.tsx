"use client";
import { useState } from "react";

import Row from "../Row";
import Cover from "../Cover";
import ListHeader from "../ListHeader";
import Pagination from "../Pagination";

import {
  DEFAULT_LIMIT_PAGE,
  getSwapiCharacters,
} from "@/components/app/characters/page";
import { Character, CharactersData } from "./types";
import { formatKey, formatToSlug } from "@/components/app/lib/utils";
import Loading from "../Loading";

interface CharacterListProps {
  initialData: CharactersData;
}

const characterListRows = (character: Character) => {
  return Object.keys(character)
    .filter((k) => k !== "openingCrawl")
    .map((key: string) => {
      return (
        <Row
          key={`row-${key}`}
          title={formatKey(key)}
          data={character[key as keyof Character]}
        />
      );
    });
};

const CharactersList = ({ initialData }: CharacterListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [data, setData] = useState<CharactersData>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.ceil(totalRecords / DEFAULT_LIMIT_PAGE);

  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    setCurrentPage(page);
    const fetchedData = await getSwapiCharacters(page);

    setTotalRecords(fetchedData.totalRecords);
    setData(fetchedData);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      {data.characters.map((character: Character) => {
        return (
          <div
            key={`list-${character.uid}`}
            className="mt-6 border border-gray-200 shadow rounded-xl overflow-hidden p-4 sm:p-6"
          >
            <ListHeader
              key={`header-${character.uid}`}
              title={character.name}
            />
            <div className="flex">
              <dl className="w-1/2 divide-y divide-gray-100">
                {characterListRows(character)}
              </dl>
              <div className="w-1/2 flex items-center justify-center">
                <Cover
                  variant="circle"
                  classNames="w-96 h-auto align-middle"
                  linkTo={`/characters/${character.uid}`}
                  href={`/characters/${formatToSlug(character.name)}.jpg`}
                  alt={character.name}
                />
              </div>
            </div>
          </div>
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        isDynamic={true}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CharactersList;
