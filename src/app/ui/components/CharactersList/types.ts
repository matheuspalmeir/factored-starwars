export type Character = {
  uid: string;
  name: string;
  url: string;
};

export type CharactersData = {
  characters: Character[];
  totalRecords: number;
};
