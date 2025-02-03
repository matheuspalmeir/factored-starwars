import { formatKey, formatToSlug } from "@/components/app/lib/utils";
import ListHeader from "../ListHeader";
import Row from "../Row";
import Cover from "../Cover";
import { Character, CharactersData } from "./types";

interface CharacterListProps {
  data: CharactersData;
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

const CharactersList = ({ data }: CharacterListProps) => {
  return (
    <>
      {data.map((character: Character) => {
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
    </>
  );
};
export default CharactersList;
