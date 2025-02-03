import { CharactersResponse } from "../lib/types";
import { parseApiData } from "../lib/utils";
import CharactersSection from "../ui/components/Characters";
import { Character, CharactersData } from "../ui/components/Characters/types";

export const parseCharactersData = (
  characters: CharactersResponse
): Character[] => {
  if (!characters.results) {
    return [];
  }

  return characters.results.map((character) =>
    parseApiData<Character>(character)
  );
};

export const DEFAULT_LIMIT_PAGE = 10;

export const getSwapiCharacters = async (
  page: number
): Promise<CharactersData> => {
  const res = await fetch(
    `http://localhost:3000/api/swapi/characters/pages?page=${page}&limit=${DEFAULT_LIMIT_PAGE}`
  );
  const characters = await res.json();
  const parsedData = parseCharactersData(characters);
  return { characters: parsedData, totalRecords: characters.total_records };
};

export default async function Characters() {
  const initialData = await getSwapiCharacters(1);

  return (
    <div className="min-h-screen mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <CharactersSection initialData={initialData} />
    </div>
  );
}
