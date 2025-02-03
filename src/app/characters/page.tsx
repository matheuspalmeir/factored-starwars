import { CharactersResponse } from "../lib/types";
import CharactersList from "../ui/components/CharactersList";
import {
  Character,
  CharactersData,
} from "../ui/components/CharactersList/types";

export default async function Characters() {
  const parseCharactersData = (
    characters: CharactersResponse
  ): CharactersData => {
    return characters.results.map((c) => ({
      uid: c.uid,
      name: c.name,
      url: c.url,
    }));
  };

  const getSwapiCharacters = async (): Promise<Character[]> => {
    const res = await fetch("http://localhost:3000/api/swapi/characters");
    const data = (await res.json()) as CharactersResponse;
    return parseCharactersData(data);
  };

  const data = await getSwapiCharacters();

  return (
    <div className="min-h-screen mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <CharactersList data={data} />
    </div>
  );
}
