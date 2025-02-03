"use client";
import { useEffect, useState } from "react";

import Row from "../Row";
import Cover from "../Cover";
import ListHeader from "../ListHeader";
import Pagination from "../Pagination";

import { getSwapiCharacters } from "@/components/app/characters/page";
import { Character, CharactersData } from "./types";
import {
  formatKey,
  formatToSlug,
  parseApiData,
} from "@/components/app/lib/utils";
import Loading from "../Loading";
import { usePagination } from "@/components/app/hooks/usePagination";
import { useSearchParams } from "next/navigation";
import { CharacterResponse } from "@/components/app/lib/types";

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
          data={character[key as keyof Character] as any}
        />
      );
    });
};

export const parseCharacterData = (
  characters: CharacterResponse
): Character[] => {
  return characters.result.map((character) => {
    const { properties, ...filteredCharacter } = character;
    return {
      ...parseApiData<Character>(filteredCharacter),
      ...parseApiData(properties),
    };
  });
};

export const searchCharactersByName = async (
  query: string
): Promise<CharactersData> => {
  const res = await fetch(
    `http://localhost:3000/api/swapi/characters?${query}`
  );
  const characters = (await res.json()) as CharacterResponse;
  const parsedData = parseCharacterData(characters);
  return { characters: parsedData, totalRecords: 1 };
};

const Characters = ({ initialData }: CharacterListProps) => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    setPageData,
    setTotalPages,
    setTotalRecords,
    countTotalPages,
  } = usePagination({
    data: initialData.characters,
    isDynamic: true,
    itemsPerPage: 10,
  });
  const [data, setData] = useState<CharactersData>(initialData);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    const fetchedData = await getSwapiCharacters(page);

    setTotalRecords(fetchedData.totalRecords);
    setPageData(fetchedData.characters);
    setData(fetchedData);

    setCurrentPage(page);
    setIsLoading(false);
  };

  const initializeData = () => {
    if (initialData) {
      setIsLoading(false);
      setData(initialData);
      setPageData(initialData.characters);
      setTotalPages(countTotalPages());
      setCurrentPage(1);
      setTotalRecords(initialData.totalRecords);
    }
  };

  const getCharacterByName = async (name: string) => {
    setIsLoading(true);
    const fetchedData = await searchCharactersByName(name);
    setTotalRecords(fetchedData.totalRecords);
    setPageData(fetchedData.characters);
    setData(fetchedData);
    setCurrentPage(1);
    setTotalPages(1);
    setIsLoading(false);
  };

  useEffect(() => {
    initializeData();
  }, [isLoading]);

  useEffect(() => {
    const targetName = searchParams.get("query");
    if (targetName) {
      getCharacterByName(`name=${targetName}`);
    } else {
      initializeData();
    }
  }, [searchParams]);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center align-center w-full h-hull">
          <Loading />{" "}
        </div>
      )}
      {!isLoading &&
        data.characters.map((character: Character) => {
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

export default Characters;
