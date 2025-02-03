export type Character = {
  uid: string;
  name: string;
  url: string;
} & CharacterProperties;

export type CharacterProperties = {
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  name: string;
};

export type CharactersData = {
  characters: Character[];
  totalRecords: number;
};
